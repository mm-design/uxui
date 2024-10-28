import { Space_Grotesk } from 'next/font/google';
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";

export const space_grotesk_init = Space_Grotesk({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space_grotesk',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${space_grotesk_init.variable} overflow-x-hidden`}>
        <SmoothScrolling><main className='space_grotesk'>{children}</main></SmoothScrolling>
      </body>
    </html>
  );
}
