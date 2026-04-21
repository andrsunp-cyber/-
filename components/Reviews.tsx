'use client';

import { motion } from 'framer-motion';

type Review = {
  name: string;
  date: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: 'Анна К.',
    date: 'январь',
    text: 'Замечательная клиника! Приятная атмосфера, внимательные врачи, современное оборудование. Проходила курс биоревитализации — результат превзошёл ожидания.'
  },
  {
    name: 'Ольга М.',
    date: 'февраль',
    text: 'Хожу в клинику уже несколько лет. Всегда подбирают индивидуальную программу ухода, объясняют каждый этап, не навязывают лишнего. Доверяю врачам полностью.'
  },
  {
    name: 'Екатерина П.',
    date: 'март',
    text: 'Делала чистку и пилинг. Всё прошло очень комфортно, кожа буквально засияла. Спасибо за профессиональный подход и тёплое отношение!'
  },
  {
    name: 'Инкогнито',
    date: 'март',
    text: 'Грамотные специалисты, подходят к работе очень ответственно. Результатом всегда довольна. Рекомендую знакомым.'
  },
  {
    name: 'Марина Д.',
    date: 'апрель',
    text: 'Обратилась с проблемой увядающей кожи. Врач подобрала комплексную программу — мезотерапия + уход. Через месяц результат виден не только мне, но и окружающим.'
  },
  {
    name: 'Татьяна Р.',
    date: 'апрель',
    text: 'Потрясающая команда. Чуткие, внимательные, настоящие профессионалы. Делаю процедуры не первый год — качеством довольна на 100%.'
  },
  {
    name: 'Светлана В.',
    date: 'май',
    text: 'Нашла клинику по рекомендации подруги и осталась в полном восторге. Чисто, уютно, врачи настоящие мастера. Теперь только сюда.'
  },
  {
    name: 'Елена С.',
    date: 'июнь',
    text: 'Записывалась на консультацию, в итоге осталась постоянным клиентом. Никакой навязчивости, всё только по делу. Очень приятная и грамотная команда.'
  },
  {
    name: 'Юлия',
    date: 'июль',
    text: 'Прекрасные специалисты, профи своего дела. Супер! Рекомендую всем!'
  }
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-14 md:py-16 bg-gradient-to-b from-[#efe1cb] via-[#f5ead8] to-[#efe1cb] dark:from-dark-surface-2 dark:via-dark-surface dark:to-dark-bg overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-blush-soft/40 dark:bg-accent/10 blur-3xl pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 dark:bg-blush/10 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <p className="text-[11px] tracking-[0.45em] uppercase text-accent mb-3">Отзывы</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-3 text-ink dark:text-dark-text">
            Что говорят <span className="italic text-accent">клиенты</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted dark:text-dark-muted text-sm">
            <Stars />
            <span>5.0</span>
          </div>
        </motion.div>

        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        >
          {REVIEWS.map((r) => (
            <motion.article
              key={r.name + r.date}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="relative break-inside-avoid mb-5 bg-white dark:bg-dark-surface border border-accent/15 dark:border-dark-border rounded-sm p-5 hover:border-accent/50 dark:hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500"
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 left-5 font-serif text-5xl leading-none text-accent/30 dark:text-accent/40 select-none"
              >
                “
              </span>
              <div className="flex items-start justify-between mb-2 gap-3 pt-1">
                <div>
                  <h3 className="font-serif text-base leading-tight text-ink dark:text-dark-text">{r.name}</h3>
                  <p className="text-[11px] text-muted dark:text-dark-muted mt-0.5">{r.date}</p>
                </div>
                <Stars />
              </div>
              <p className="text-[13px] text-ink/80 dark:text-dark-text/80 leading-relaxed">{r.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
