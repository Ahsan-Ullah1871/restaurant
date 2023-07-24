import Image from 'next/image';
import './globals.css';
import { Inter, Libre_Bodoni, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/presentation/Header';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const libre_bodoni = Libre_Bodoni({
  subsets: ['latin'],
  variable: '--font-libre-bodoni'
});
export const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans'
});

export const metadata = {
  title: 'Restaurant ',
  description: 'Best restaurant in ... '
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plus_jakarta_sans.variable} ${libre_bodoni.variable}`}
    >
      <body className="bg-[#111114]">
        {/* Nav */}
        <nav className="bg-white relative   w-full h-auto py-7">
          <Header />
        </nav>
        {/* body children */}
        {children}

        {/* footer */}
      </body>
    </html>
  );
}
