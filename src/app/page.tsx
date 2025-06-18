'use client';
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import HowItWorks from '../components/HowItWorks';
import PvPTeaser from '../components/PvPTeaser';
import ScreenshotsMockups from '../components/ScreenshotsMockups';
import TestimonialsLeaderboard from '../components/TestimonialsLeaderboard';
import JoinNowCTA from '../components/JoinNowCTA';

export default function Home() {
  return (
    <>
      {/* Hero Banner Section */}
      <HeroBanner />
      {/* How It Works Section */}
      <HowItWorks />
      {/* PvP + Solo Mode Teaser Section */}
      <PvPTeaser />
      {/* Screenshots/Animated Mockups Section */}
      <ScreenshotsMockups />
      {/* Testimonials/Leaderboard Section */}
      <TestimonialsLeaderboard />
      {/* Join Now CTA Section */}
      <JoinNowCTA />
    </>
  );
} 