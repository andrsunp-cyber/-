'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppButton from '@/components/WhatsAppButton';
import HandDraw from '@/components/HandDraw';
import SiteHeader from '@/components/SiteHeader';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import Reviews from '@/components/Reviews';
import Team from '@/components/Team';

const PHONE = '+79280000000';
const PHONE_DISPLAY = '+7 (928) 000-00-00';
const ADDRESS = 'Кисловодская ул., 14А, Ессентуки Пассаж, этаж 1, кабинет 2';

const STOCK_MESO = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80';
const STOCK_INJECTION = 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80';
const STOCK_BIOREV = 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80';
const STOCK_FULLFACE = 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80';
const STOCK_PEEL = 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80';
const STOCK_CLEAN = 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80';
const STOCK_HANDS = 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=900&q=80';

const faceServices = [
  { name: 'Мезотерапия', price: 'от 6 000 ₽', desc: 'Питание кожи витаминным коктейлем, восстановление тонуса.', before: STOCK_MESO, after: STOCK_MESO },
  { name: 'Инъекции красоты', price: 'от 5 000 ₽', desc: 'Коррекция мимических и статических морщин.', before: STOCK_INJECTION, after: STOCK_INJECTION },
  { name: 'Биоревитализация', price: 'от 12 000 ₽', desc: 'Глубокое увлажнение, стимуляция выработки коллагена.', before: STOCK_BIOREV, after: STOCK_BIOREV },
  { name: 'FULL-FACE уход', price: 'от 18 000 ₽', desc: 'Комплексный уход: зоны вокруг глаз, лоб, щёки, шея.', before: STOCK_FULLFACE, after: STOCK_FULLFACE },
  { name: 'Химический пилинг', price: 'от 4 000 ₽', desc: 'Обновление кожи, ровный тон и сияние.', before: STOCK_PEEL, after: STOCK_PEEL },
  { name: 'Аппаратная чистка', price: 'от 4 500 ₽', desc: 'Профессиональное очищение и лифтинг контуров.', before: STOCK_CLEAN, after: STOCK_CLEAN }
];

const handServices = [
  { name: 'Мезотерапия рук', price: 'от 5 000 ₽', desc: 'Увлажнение, тонус, лёгкое омоложение кистей.', before: STOCK_HANDS, after: STOCK_HANDS }
];

export default function Home() {
  return (
    <main className="bg-cream dark:bg-dark-bg text-ink dark:text-dark-text overflow-x-hidden transition-colors duration-500">
      <SiteHeader />

      {/* Hero + About combined */}
      <section
        id="home"
        className="relative pt-40 pb-24 md:pt-44 md:pb-32 bg-gradient-to-b from-[#ede2cc] via-cream to-[#f0e3d0] dark:from-dark-bg dark:via-dark-surface dark:to-dark-surface-2"
      >
        {/* Декоративные цветовые пятна */}
        <span
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blush-soft/50 dark:bg-accent/10 blur-3xl pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-accent/10 dark:bg-blush/10 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[55%] md:left-auto md:right-0 md:top-0 w-full md:w-[70%] lg:w-[60%] max-w-none md:max-w-[860px] md:translate-x-[22%] md:-translate-y-[18%] flex justify-center md:block text-ink/[0.08] md:text-ink/[0.14] dark:text-dark-text/[0.05] md:dark:text-dark-text/[0.08] z-0"
        >
          <div className="w-[140%] md:w-full -translate-x-[5%] md:translate-x-0">
            <HandDraw />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5">
          {/* Portrait + About */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative aspect-[3/4] max-w-md w-full mx-auto md:mx-0 md:sticky md:top-32"
            >
              <div className="absolute -inset-3 border border-ink/20 dark:border-dark-border rounded-sm -z-10" />
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                alt="Частная косметологическая клиника"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover rounded-sm"
              />
            </motion.div>

            <motion.div
              className="flex flex-col"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
              }}
            >
              {[
                <p key="k" className="text-[11px] tracking-[0.45em] uppercase text-muted dark:text-dark-muted mb-4">
                  Частная косметологическая клиника
                </p>,
                <h1 key="h" className="font-serif text-4xl md:text-5xl lg:text-6xl mb-5 leading-[1.02] text-ink dark:text-dark-text">
                  <span className="block">Эстетика</span>
                  <span className="block italic text-accent">и уход</span>
                </h1>,
                <p key="l" className="text-base text-muted dark:text-dark-muted leading-relaxed mb-6 max-w-lg">
                  Команда сертифицированных врачей, современное оборудование
                  и индивидуальный подход к каждому клиенту.
                </p>,
                <div key="d" className="space-y-4 text-muted dark:text-dark-muted leading-relaxed text-[15px]">
                  <p>
                    Наша клиника — это пространство, где современные технологии
                    косметологии сочетаются с заботой о здоровье вашей кожи.
                  </p>
                  <p>
                    Мы работаем только с проверенными препаратами и аппаратами,
                    прошедшими сертификацию. Каждая процедура подбирается
                    индивидуально после консультации.
                  </p>
                  <p>
                    Наш принцип — естественный результат без «пластикового»
                    эффекта. Вы остаётесь собой — отдохнувшей и уверенной.
                  </p>
                </div>,
                <div key="s" className="mt-7 grid grid-cols-3 gap-4 max-w-md">
                  <div className="border-l-2 border-ink dark:border-dark-text pl-3">
                    <p className="font-serif text-2xl md:text-3xl">10+</p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-muted dark:text-dark-muted mt-1">врачей</p>
                  </div>
                  <div className="border-l-2 border-ink dark:border-dark-text pl-3">
                    <p className="font-serif text-2xl md:text-3xl">5000+</p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-muted dark:text-dark-muted mt-1">клиентов</p>
                  </div>
                  <div className="border-l-2 border-ink dark:border-dark-text pl-3">
                    <p className="font-serif text-2xl md:text-3xl">30+</p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-muted dark:text-dark-muted mt-1">процедур</p>
                  </div>
                </div>,
                <div key="b" className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#services"
                    className="inline-flex items-center rounded-full border border-ink/30 dark:border-dark-border px-6 py-3 text-xs tracking-[0.15em] uppercase hover:bg-ink hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition"
                  >
                    Посмотреть услуги
                  </a>
                  <WhatsAppButton phone={PHONE} label="Записаться" />
                </div>
              ].map((el, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  {el}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative py-16 md:py-20 bg-gradient-to-b from-[#f0e3d0] via-[#f5ead8] to-blush-soft/50 dark:from-dark-surface-2 dark:via-dark-bg dark:to-dark-surface overflow-hidden"
      >
        {/* Цветовые акценты */}
        <span
          aria-hidden="true"
          className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-blush-soft/40 dark:bg-accent/10 blur-3xl pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/[0.06] dark:bg-blush/10 blur-3xl pointer-events-none"
        />

        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal className="text-center mb-10">
            <p className="text-[11px] tracking-[0.45em] uppercase text-muted dark:text-dark-muted mb-3">Прайс</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-3 text-ink dark:text-dark-text">
              Эксклюзивные услуги
            </h2>
            <p className="ornament text-muted dark:text-dark-muted text-[11px] tracking-[0.3em] uppercase">авторские процедуры</p>
          </Reveal>

          {/* Процедуры для лица */}
          <Reveal className="mb-5">
            <h3 className="font-serif text-2xl md:text-3xl flex items-center gap-3 text-ink dark:text-dark-text">
              <span className="w-8 h-[1px] bg-accent/50" />
              Процедуры для лица
            </h3>
          </Reveal>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {faceServices.map((s, i) => (
              <ServiceCard key={s.name} {...s} index={i} />
            ))}
          </motion.div>

          {/* Процедуры для рук — блок с розовым акцентом */}
          <div className="relative max-w-6xl mx-auto">
            <Reveal className="mb-5 text-center">
              <h3 className="font-serif text-2xl md:text-3xl inline-flex items-center gap-3 justify-center text-ink dark:text-dark-text">
                <span className="w-8 h-[1px] bg-blush" />
                Процедуры для рук
                <span className="w-8 h-[1px] bg-blush" />
              </h3>
            </Reveal>

            <motion.div
              className="flex justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
          >
              {handServices.map((s, i) => (
                <div key={s.name} className="w-full sm:w-[380px]">
                  <ServiceCard {...s} index={faceServices.length + i} />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      <Team />

      <Reviews />

      {/* Contacts */}
      <section
        id="contacts"
        className="relative py-14 md:py-16 bg-gradient-to-b from-[#efe1cb] via-blush-soft/55 to-[#e8d8bd] dark:from-dark-surface-2 dark:via-dark-surface dark:to-dark-bg overflow-hidden"
      >
        <span
          aria-hidden="true"
          className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-blush-soft/40 dark:bg-accent/10 blur-3xl pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-accent/[0.08] dark:bg-blush/10 blur-3xl pointer-events-none"
        />
        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal className="text-center mb-8">
            <p className="text-[11px] tracking-[0.45em] uppercase text-accent mb-3">Контакты</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink dark:text-dark-text">
              Запишитесь на <span className="italic text-accent">приём</span>
            </h2>
          </Reveal>

          <motion.div
            className="grid md:grid-cols-3 gap-4 md:gap-5 md:auto-rows-fr"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Адрес */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="bg-white dark:bg-dark-surface rounded-sm p-6 shadow-sm border border-accent/20 dark:border-dark-border hover:border-accent/50 dark:hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500"
            >
              <h3 className="font-serif text-xl mb-3 text-ink dark:text-dark-text">Адрес</h3>
              <p className="text-muted dark:text-dark-muted leading-relaxed mb-5 text-[13px]">{ADDRESS}</p>

              <div className="space-y-2 text-[13px]">
                <div className="flex gap-2">
                  <span className="text-muted dark:text-dark-muted w-20 shrink-0 text-[10px] tracking-[0.2em] uppercase pt-1">Телефон</span>
                  <a href={`tel:${PHONE}`} className="hover:text-accent">{PHONE_DISPLAY}</a>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted dark:text-dark-muted w-20 shrink-0 text-[10px] tracking-[0.2em] uppercase pt-1">Часы</span>
                  <span>Пн–Сб · 10:00 — 20:00</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted dark:text-dark-muted w-20 shrink-0 text-[10px] tracking-[0.2em] uppercase pt-1">Instagram</span>
                  <span>@your.clinic</span>
                </div>
              </div>
            </motion.div>

            {/* Быстрая запись */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="bg-white dark:bg-dark-surface rounded-sm p-6 shadow-sm border border-accent/20 dark:border-dark-border hover:border-accent/50 dark:hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-xl mb-3 text-ink dark:text-dark-text">Быстрая запись</h3>
                <p className="text-muted dark:text-dark-muted text-[13px] leading-relaxed mb-5">
                  Напишите в WhatsApp — отвечу в течение рабочего дня, подберу
                  удобное время и подробно расскажу о процедуре.
                </p>
              </div>
              <WhatsAppButton phone={PHONE} className="w-full justify-center !py-3 !text-sm" />
            </motion.div>

            {/* Карта */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="relative rounded-sm overflow-hidden border border-accent/20 dark:border-dark-border hover:border-accent/50 dark:hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 min-h-[320px] md:min-h-0"
            >
              <iframe
                title="Карта"
                src="https://yandex.ru/map-widget/v1/?ll=42.858710%2C44.044893&z=16&mode=search&text=%D0%95%D1%81%D1%81%D0%B5%D0%BD%D1%82%D1%83%D0%BA%D0%B8%20%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%2014%D0%90"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 bg-ink dark:bg-black text-white/70">
        <div className="mx-auto max-w-6xl px-5 flex flex-col md:flex-row gap-4 justify-between items-center text-xs tracking-wider">
          <p>© {new Date().getFullYear()} Частная клиника · Эстетическая косметология</p>
          <p>Ессентуки · {PHONE_DISPLAY}</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${PHONE.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#1ebe5a] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.873.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347z" />
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.751.457 3.459 1.325 4.962L2 22l5.24-1.374a9.89 9.89 0 004.8 1.222h.004c5.46 0 9.91-4.45 9.91-9.908 0-2.648-1.03-5.136-2.903-7.008A9.825 9.825 0 0012.04 2zm0 1.78c2.189 0 4.247.852 5.795 2.4a8.146 8.146 0 012.4 5.795c0 4.517-3.677 8.193-8.195 8.193-1.516 0-3.003-.414-4.294-1.197l-.308-.183-3.108.815.83-3.032-.2-.32a8.143 8.143 0 01-1.247-4.276c0-4.517 3.676-8.195 8.193-8.195z" />
        </svg>
      </a>
    </main>
  );
}
