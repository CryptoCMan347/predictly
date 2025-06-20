import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import prisma from './prisma';

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      username?: string | null;
      credits: number;
      pro_status: boolean;
      referralCode?: string | null;
      bonusCredits: number;
      transactions: any[];
    }
  }
  
  interface User {
    id: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
    username?: string | null;
    credits: number;
    pro_status: boolean;
    hashedPassword?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
            hashedPassword: true,
            credits: true,
            pro_status: true,
            image: true
          }
        });
        
        if (!user?.hashedPassword) return null;
        
        const isValid = await compare(credentials.password, user.hashedPassword);
        if (!isValid) return null;
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          username: user.username,
          credits: user.credits,
          pro_status: user.pro_status,
          image: user.image
        };
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (!token.id) return session;

      // Fetch the user with all related data
      const user = await prisma.user.findUnique({
        where: { id: token.id as string },
        include: {
          transactions: {
            orderBy: {
              createdAt: 'desc'
            }
          },
          referrals: {
            include: {
              referred: true
            }
          }
        }
      });

      if (!user) return session;

      // Get the referral code if it exists, or create one
      let referralCode = user.referrals[0]?.code;
      if (!referralCode) {
        // Create a new referral code
        const newReferral = await prisma.referral.create({
          data: {
            code: `REF${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
            userId: user.id
          }
        });
        referralCode = newReferral.code;
      }

      // Calculate bonus credits from referrals
      const bonusCredits = (user.referrals[0]?.referred?.length || 0) * 50;
      
      return {
        ...session,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          username: user.username,
          credits: user.credits,
          pro_status: user.pro_status,
          referralCode,
          bonusCredits,
          transactions: user.transactions
        }
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}; 