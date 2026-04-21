'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  name: string;
  price: string;
  desc: string;
  before: string;
  after: string;
  index: number;
};

export default function ServiceCard({ name, price, desc, before, after, index }: Props) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative overflow-hidden bg-white dark:bg-dark-surface rounded-sm border border-ink/10 dark:border-dark-border hover:border-accent/50 dark:hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
    >
      {/* Фото: по умолчанию — После, при hover — До */}
      <div className="relative aspect-square sm:aspect-[4/5] bg-sand dark:bg-dark-surface-2 overflow-hidden">
        {/* После — базовый слой */}
        <Image
          src={after}
          alt={`${name} — после`}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
        />
        {/* До — появляется при наведении */}
        <Image
          src={before}
          alt={`${name} — до`}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Метка статуса */}
        <span className="absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm font-serif bg-accent/90 text-white transition-opacity duration-300 group-hover:opacity-0">
          После
        </span>
        <span className="absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm font-serif bg-white/90 dark:bg-dark-bg/90 text-ink dark:text-dark-text opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          До
        </span>
      </div>

      {/* Текстовая часть */}
      <div className="p-5 relative">
        <span className="absolute top-3 right-4 font-serif italic text-accent/25 text-2xl leading-none transition-all duration-500 group-hover:text-accent/60">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="font-serif text-lg leading-tight mb-2 pr-8 min-h-[2.5rem] text-ink dark:text-dark-text">
          {name}
        </h3>
        <p className="text-[12px] text-muted dark:text-dark-muted leading-relaxed mb-4 min-h-[2.75rem]">
          {desc}
        </p>

        <div className="flex items-end justify-between pt-3 border-t border-ink/10 dark:border-dark-border">
          <span className="text-[9px] tracking-[0.3em] uppercase text-muted dark:text-dark-muted">от</span>
          <span className="font-serif text-xl transition-transform duration-500 group-hover:scale-105 text-ink dark:text-dark-text">
            {price}
          </span>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full"
        />
      </div>
    </motion.article>
  );
}
