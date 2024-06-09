import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmsans_init = DM_Sans({
  weight: ['300', '400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

const dmserifdisplay_init = DM_Serif_Display({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

export const dmSans = dmsans_init.className;
export const dmSerifDisplay = dmserifdisplay_init.className;