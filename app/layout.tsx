import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';

const ibmPlexSans = localFont({
  src: [
    {
      path: '/fonts/IBMPlexSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/IBMPlexSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/IBMPlexSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/IBMPlexSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

const babasNeue = localFont({
  src: [
    {
      path: '/fonts/BabasNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--babas-neue',
});

export const metadata: Metadata = {
  title: 'Bookwise',
  description:
    'Bookwise is a book borrowing university library management solution.',
};

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <html lang='en'>
      <body
        className={`${ibmPlexSans.className} ${babasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
