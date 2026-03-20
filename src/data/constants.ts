// Social media usernames - replace with your actual usernames
export const SOCIAL_USERNAME = {
  github: 'SamShawn',
  twitter: 'SamS_404',
  linkedin: 'samuel-sun-5464031b5',
  email: 'samshawn2014@gmail.com',
} as const

// Social media URLs
export const SOCIAL_URL = {
  github: `https://github.com/${SOCIAL_USERNAME.github}`,
  twitter: `https://twitter.com/${SOCIAL_USERNAME.twitter}`,
  linkedin: `https://linkedin.com/in/${SOCIAL_USERNAME.linkedin}`,
  email: `mailto:${SOCIAL_USERNAME.email}`,
} as const

// Display formats
export const SOCIAL_DISPLAY = {
  github: `github.com/${SOCIAL_USERNAME.github}`,
  twitter: `@${SOCIAL_USERNAME.twitter}`,
  linkedin: `linkedin.com/in/${SOCIAL_USERNAME.linkedin}`,
  email: SOCIAL_USERNAME.email,
} as const
