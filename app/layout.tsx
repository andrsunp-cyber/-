import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Частная клиника — эстетическая косметология',
  description:
    'Частная косметологическая клиника. Команда сертифицированных врачей, современное оборудование, индивидуальный подход. Ессентуки, ул. Кисловодская, 14А.',
  openGraph: {
    title: 'Частная клиника — косметология',
    description: 'Эстетическая косметология в Ессентуках',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`
          }}
        />
      </head>
      <body className="bg-cream dark:bg-dark-bg text-ink dark:text-dark-text transition-colors duration-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
