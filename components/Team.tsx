'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Member = {
  name: string;
  role: string;
  photo: string;
  years: string;
};

const TEAM: Member[] = [
  {
    name: 'Имя Фамилия',
    role: 'Врач-косметолог',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    years: '12 лет опыта'
  },
  {
    name: 'Имя Фамилия',
    role: 'Дерматолог-косметолог',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
    years: '8 лет опыта'
  },
  {
    name: 'Имя Фамилия',
    role: 'Эстетист',
    photo: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80',
    years: '6 лет опыта'
  },
  {
    name: 'Имя Фамилия',
    role: 'Врач-косметолог',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    years: '10 лет опыта'
  }
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-14 md:py-16 bg-gradient-to-b from-blush-soft/50 via-[#f0e3d0] to-[#efe1cb] dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface-2 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="absolute top-10 right-10 w-80 h-80 rounded-full bg-accent/[0.06] dark:bg-accent/10 blur-3xl pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blush-soft/50 dark:bg-blush/10 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <p className="text-[11px] tracking-[0.45em] uppercase text-accent mb-3">Команда</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-3 text-ink dark:text-dark-text">
            Наши <span className="italic text-accent">специалисты</span>
          </h2>
          <p className="ornament text-muted dark:text-dark-muted text-[11px] tracking-[0.3em] uppercase">
            сертифицированные врачи
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {TEAM.map((m) => (
            <motion.article
              key={m.name + m.role}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="group relative bg-white dark:bg-dark-surface rounded-sm border border-accent/15 dark:border-dark-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[3/4] bg-sand dark:bg-dark-surface-2 overflow-hidden">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base md:text-lg leading-tight text-ink dark:text-dark-text mb-1">
                  {m.name}
                </h3>
                <p className="text-[12px] text-accent mb-1">{m.role}</p>
                <p className="text-[11px] text-muted dark:text-dark-muted">{m.years}</p>
              </div>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
