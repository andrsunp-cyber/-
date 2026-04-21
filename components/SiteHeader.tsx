'use client';

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import ThemeToggle from './ThemeToggle';

export default function SiteHeader() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  const bgAlpha = useTransform(scrollY, [0, 120], [0, 0.92]);
  const blurPx = useTransform(scrollY, [0, 120], [0, 10]);
  const borderAlpha = useTransform(scrollY, [80, 160], [0, 0.1]);
  const padY = useTransform(scrollY, [0, 120], [28, 14]);
  const gap = useTransform(scrollY, [0, 120], [16, 8]);

  const bgRgb = theme === 'dark' ? '19,17,15' : '247,241,230';
  const borderRgb = theme === 'dark' ? '240,235,227' : '31,30,28';

  const bg = useMotionTemplate`rgba(${bgRgb},${bgAlpha})`;
  const backdrop = useMotionTemplate`blur(${blurPx}px)`;
  const border = useMotionTemplate`rgba(${borderRgb},${borderAlpha})`;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-30"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <motion.div
        style={{
          backgroundColor: bg,
          backdropFilter: backdrop,
          WebkitBackdropFilter: backdrop,
          borderBottomColor: border
        }}
        className="border-b border-transparent"
      >
        <motion.div
          style={{ paddingTop: padY, paddingBottom: padY, gap }}
          className="mx-auto max-w-6xl px-5 flex flex-col items-center relative"
        >
          <a href="#home" className="font-serif text-xl md:text-2xl tracking-[0.2em] text-ink dark:text-dark-text text-center">
            ЧАСТНАЯ · КЛИНИКА
          </a>
          <nav className="hidden md:flex gap-8 text-[13px] tracking-[0.2em] uppercase text-muted dark:text-dark-muted">
            <a href="#services" className="hover:text-accent transition">Услуги</a>
            <a href="#team" className="hover:text-accent transition">Команда</a>
            <a href="#reviews" className="hover:text-accent transition">Отзывы</a>
            <a href="#contacts" className="hover:text-accent transition">Контакты</a>
          </nav>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-ink dark:text-dark-text">
            <ThemeToggle />
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
