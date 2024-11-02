import { Space_Grotesk } from 'next/font/google';
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

export const space_grotesk_init = Space_Grotesk({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space_grotesk',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body suppressHydrationWarning={true}  className={`${space_grotesk_init.variable} overflow-x-hidden bg-[--light-primary]`}>
        <SmoothScrolling>
          <main className='space_grotesk'>
            <MainNav />
            {children}

            <Footer />
          </main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
