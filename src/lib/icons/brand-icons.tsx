import type { ComponentType, SVGProps } from 'react'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

type IconProps = SVGProps<SVGSVGElement>

export const LinkedInIcon = IconBrandLinkedin as unknown as ComponentType<IconProps>
export const GitHubIcon = IconBrandGithub as unknown as ComponentType<IconProps>
