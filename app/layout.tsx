import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NegoLab - Votre Arène de Négociation',
  description:
    'Découvrez votre profil de négociateur et développez vos compétences dans un environnement immersiv et ludique.',
  keywords: ['négociation', 'profil', 'compétences', 'formation', 'quiz'],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'NegoLab - Votre Arène de Négociation',
    description:
      'Découvrez votre profil de négociateur et développez vos compétences dans un environnement immersif et ludique.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
