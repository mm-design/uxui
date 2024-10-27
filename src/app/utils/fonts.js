import { Space_Grotesk } from 'next/font/google'

export const space_grotesk_init = Space_Grotesk({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space_grotesk',
  })

export const space_grotesk = space_grotesk_init.variable;