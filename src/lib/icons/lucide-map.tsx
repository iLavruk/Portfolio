import type { LucideIcon } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import {
  Atom,
  Beaker,
  Book,
  Boxes,
  Camera,
  ChevronRight,
  Clapperboard,
  Code2,
  Download,
  Calendar,
  Dumbbell,
  FileCode,
  GitBranch,
  GitPullRequest,
  Globe,
  Image as ImageIcon,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  MonitorSmartphone,
  Music,
  Palette,
  PenTool,
  Phone,
  Braces,
  User,
  Briefcase,
  Wrench,
  GraduationCap,
  Heart,
  MapPin,
  Map,
  Crown,
} from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './brand-icons'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>
export const contactIcons: Record<'email'|'phone'|'linkedin'|'github'|'location', IconComponent> = {
  email: Mail,
  phone: Phone,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  location: MapPin,
}

export const skillIcons: Record<string, LucideIcon> = {
  // Frontend
  'JavaScript': Code2,
  'TypeScript': FileCode,
  'React': Atom,
  'Redux Toolkit': Boxes,
  'HTML5': LayoutTemplate,
  'CSS3': Palette,
  'SCSS': Braces,
  'Bootstrap': Boxes,
  'WordPress': Globe,

  // Testing
  'Cypress (Automation)': Beaker,

  // Design
  'UI/UX': LayoutDashboard,
  'Figma': PenTool,
  'Adobe Photoshop': ImageIcon,
  'Illustrator': PenTool,

  // Other
  'Responsive Design': MonitorSmartphone,
  'Cross-browser': Globe,
  'Git': GitBranch,
  'GitHub Actions': GitPullRequest,
  'Video Editing': Clapperboard,
}

export const interestIcons: Record<string, LucideIcon> = {
  'Travel': Map,
  'Music': Music,
  'Coding': Code2,
  'Sport': Dumbbell,
  'Photography': Camera,
  'Chess': Crown,
}

export const miscIcons = { Download, ChevronRight, Calendar }

export const navIcons: Record<string, LucideIcon> = {
  about: User,
  'work-experience': Briefcase,
  skills: Wrench,
  education: GraduationCap,
  languages: Globe,
  interests: Heart,
  contact: Mail,
}
