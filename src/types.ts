export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl: string
  demoUrl: string | null
  featured: boolean
  role?: string
  type?: string
  challenge?: string
  solution?: string
}

export type TimelineType = 'work' | 'education' | 'achievement'

export interface TimelineItem {
  id: number
  year: string
  title: string
  company: string
  description: string
  type: TimelineType
}

export interface NavItem {
  label: string
  path: string
}

export type Theme = 'light' | 'dark'

export interface ContactInfo {
  email: string
  github: string
  linkedin: string
  twitter: string
}