import { extendTheme } from '@chakra-ui/react'
import { Work_Sans } from 'next/font/google'
const workSans = Work_Sans({
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

const theme = extendTheme({
  colors: {
    neutral: {
      lightPink: `hsl(275, 100%, 97%)`,
      grayishPurple: `hsl(292, 16%, 49%)`,
      darkPurple: `hsl(292, 42%, 14%)`,
      purple: '#AD28EB',
    },
  },
  fonts: {
    heading: workSans.style.fontFamily,
    body: workSans.style.fontFamily,
  },
})

export default theme
