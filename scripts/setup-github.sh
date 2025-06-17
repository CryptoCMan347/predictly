#!/bin/bash

# GitHub Repository Setup Script
# This script helps set up a new GitHub repository for a project

# Check if repository name is provided
if [ -z "$1" ]; then
    echo "Please provide a repository name"
    echo "Usage: ./setup-github.sh <repository-name>"
    exit 1
fi

REPO_NAME=$1

# Initialize git repository
git init

# Create .gitignore file
cat > .gitignore << EOL
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOL

# Add all files
git add .

# Initial commit
git commit -m "Initial commit"

# Create main branch (if not already on it)
git branch -M main

# Add remote repository (you'll need to create this on GitHub first)
echo "Please create a new repository named $REPO_NAME on GitHub first"
echo "Then run these commands:"
echo "git remote add origin https://github.com/yourusername/$REPO_NAME.git"
echo "git push -u origin main"

echo "GitHub repository setup complete!" 