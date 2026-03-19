#!/bin/bash

echo "🚀 Starting deployment to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
  echo "❌ Error: Git repository not initialized."
  echo "Please run 'git init' and set up your remote repository first."
  exit 1
fi



# Check if remote repository is set
if ! git remote get-url origin >/dev/null 2>&1; then
  echo "❌ Error: No remote repository named 'origin' found."
  echo "Please add a remote repository with: git remote add origin <your-repo-url>"
  exit 1
fi


# Run build
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix the errors and try again."
  exit 1
fi


# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
gh-pages -d dist

if [ $? -eq 0 ]; then
  echo "✅ Deployment successful!"
  echo "🌐 Your site should be live at: https://${GITHUB_USERNAME}.github.io/portfolio-site/"
else
  echo "❌ Deployment failed."
  exit 1
fi
