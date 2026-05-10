import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Phone,
  MapPin,
  ShieldCheck,
  FileSignature,
  Award,
  Building2,
  Handshake,
  Scale,
  KeyRound,
  Search,
  CheckCircle2,
  Star,
  Clock,
} from "lucide-react";
import heroAgent from "@/assets/hero-agent.jpg";
import apt1 from "@/assets/apartment-1.jpg";
import apt2 from "@/assets/apartment-2.jpg";
import apt3 from "@/assets/apartment-3.jpg";
import keysImg from "@/assets/keys.jpg";
import contractImg from "@/assets/contract.jpg";

const PHONE = "8 (925) 040-00-67";
const PHONE_HREF = "tel:+79250400067";
const ADDRESS = "8-я Текстильщиков ул., 11 стр 2, Москва, 109129";

const objects = [
  {
    img: apt1,
    title: "2-комн. квартира, Текстильщики",
    meta: "54 м² · 7/12 этаж · с ремонтом",
    price: "16 900 000 ₽",
    tag: "Свежий объект",
  },
  {
    img: apt2,
    title: "3-комн. квартира, ЮВАО",
    meta: "82 м² · 9/16 этаж · видовая",
    price: "24 500 000 ₽",
    tag: "Эксклюзив",
  },
  {
    img: apt3,
    title: "1-комн. квартира, Кузьминки",
    meta: "38 м² · 4/9 этаж · с мебелью",
    price: "11 200 000 ₽",
    tag: "Готова к показу",
  },
];

const services = [
  { icon: Building2, title: "Продажа квартиры", text: "Оценка по рынку, профессиональные фото, реклама на всех площадках, работа с покупателями." },
  { icon: Search, title: "Подбор и покупка", text: "Подбираем варианты под бюджет и район, выезжаем на просмотры, проверяем юридическую чистоту." },
  { icon: Scale, title: "Ипотека под ключ", text: "Поможем подобрать программу и собрать пакет документов. Работаем с ведущими банками." },
  { icon: FileSignature, title: "Юридическое сопровождение", text: "Договор, проверка документов, безопасные расчёты и регистрация сделки в Росреестре." },
];

const cases = [
  { title: "Продали 2-к в Текстильщиках за 18 дней", text: "Семья переезжала в новостройку. Сделали предпродажную подготовку, нашли покупателя за 18 дней без торга по объявлению." },
  { title: "Сложная альтернатива на 3 квартиры", text: "Собрали цепочку из трёх объектов в ЮВАО. Согласовали даты, банк и нотариуса — клиенты заехали в новую квартиру через 6 недель." },
  { title: "Покупка с ипотекой и материнским капиталом", text: "Подобрали 1-к в Кузьминках, согласовали смешанную оплату, провели сделку без задержек по документам." },
];

const reviews = [
  { name: "Ирина М.", text: "Помогли продать квартиру в районе Текстильщиков быстрее, чем мы рассчитывали. Всё спокойно, по делу, без давления.", stars: 5 },
  { name: "Андрей К.", text: "Подбирали первую квартиру в ипотеку. Объяснили все этапы, проверили документы продавца. Чувствовали поддержку до самой регистрации.", stars: 5 },
  { name: "Светлана П.", text: "Сопровождали сложную сделку с альтернативой. Профессионально, с понятным договором и фиксированной комиссией.", stars: 5 },
];

const guarantees = [
  { icon: FileSignature, title: "Договор на услуги", text: "Фиксируем объём работ, сроки и комиссию письменно — никаких устных договорённостей." },
  { icon: ShieldCheck, title: "Юридическая проверка", text: "Проверяем продавца, историю объекта и обременения до внесения аванса." },
  { icon: Handshake, title: "Прозрачная комиссия", text: "Стоимость услуг известна на старте и не меняется в процессе сделки." },
  { icon: Award, title: "Опыт 5 лет в Москве", text: "Реальные сделки в районе и понимание локального рынка ЮВАО." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", goal: "Подбор квартиры", note: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Заполните имя и телефон, пожалуйста");
      return;
    }
    toast.success("Заявка принята. Мы свяжемся с вами в течение часа.");
    setForm({ name: "", phone: "", goal: "Подбор квартиры", note: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container-tight flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary font-display font-bold">ДЭ</span>
            <span className="font-display text-lg font-semibold tracking-tight">Дом Экспертов</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#objects" className="hover:text-foreground">Объекты</a>
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#cases" className="hover:text-foreground">Кейсы</a>
            <a href="#reviews" className="hover:text-foreground">Отзывы</a>
            <a href="#contacts" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden items-center gap-2 text-sm font-medium text-foreground md:flex">
            <Phone className="h-4 w-4 text-primary" /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="container-tight grid gap-10 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
          <div className="animate-fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
              Риелторское агентство в Москве · 5 лет на рынке
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Поможем продать или купить квартиру <span className="text-primary">спокойно и по договору</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Дом Экспертов — небольшая команда риелторов, которая работает в ЮВАО и по всей Москве.
              Подберём объект, проверим документы, проведём сделку до получения ключей.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold">
                <a href="#lead">Получить подборку объектов</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-card/40 hover:bg-card text-foreground">
                <a href="#lead">Узнать стоимость моей квартиры</a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "5 лет", v: "на рынке Москвы" },
                { k: "5,0", v: "оценка на Яндекс Картах" },
                { k: "ЮВАО", v: "глубокая экспертиза района" },
                { k: "РГР", v: "стандарты профсообщества" },
              ].map((s) => (
                <div key={s.k} className="rounded-lg border border-border/70 bg-card/60 p-3">
                  <div className="font-display text-xl font-semibold text-primary">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="overflow-hidden rounded-2xl ring-gold">
              <img
                src={heroAgent}
                alt="Риелтор агентства Дом Экспертов в офисе"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden w-64 rounded-xl border border-border bg-card p-4 shadow-card sm:block">
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="ml-1 font-semibold">5,0</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Оценка на Яндекс Картах · 8-я Текстильщиков, 11 стр 2</p>
            </div>
            <div className="absolute -right-3 -top-3 hidden rounded-lg border border-primary/30 bg-card/90 px-3 py-2 text-xs text-foreground sm:block">
              <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-primary" /> Ответим в течение часа</div>
            </div>
          </div>
        </div>
        <div className="gold-line h-px w-full" />
      </section>

      {/* Objects */}
      <section id="objects" className="py-16 lg:py-24">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Свежие объекты"
            title="Подборка квартир в продаже"
            subtitle="Реальные объекты с фото, метражом и ценой. Полную базу с актуальными вариантами пришлём по запросу."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {objects.map((o) => (
              <article key={o.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40 hover:shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={o.img} alt={o.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs text-primary backdrop-blur">{o.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{o.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{o.meta}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-xl font-semibold text-primary">{o.price}</span>
                    <a href="#lead" className="text-sm text-accent hover:underline">Запросить</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <a href="#lead">Получить полную подборку</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-card/40 py-16 lg:py-24">
        <div className="container-tight">
          <SectionHeading eyebrow="Услуги" title="Что мы берём на себя" subtitle="Работаем по договору с фиксированной комиссией. Сопровождаем от первой консультации до получения ключей." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-background/60 p-6 transition hover:border-primary/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Animated process visual */}
          <ProcessVisual />
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-16 lg:py-24">
        <div className="container-tight">
          <SectionHeading eyebrow="Кейсы" title="Реальные сделки за последний год" subtitle="Короткие истории клиентов — без приукрашивания." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {cases.map((c, i) => (
              <article key={c.title} className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6">
                <div>
                  <div className="font-display text-3xl font-semibold text-primary/80">0{i + 1}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-xs text-accent">
                  <CheckCircle2 className="h-4 w-4" /> Сделка закрыта
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-card/40 py-16 lg:py-24">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img src={keysImg} alt="Передача ключей от квартиры" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="О команде" title="Небольшая команда. Каждый клиент — лично." align="left" />
            <p className="mt-5 text-muted-foreground">
              Дом Экспертов — это агентство с офисом в районе Текстильщики. Пять лет работаем с жилой недвижимостью Москвы:
              продажа, покупка, альтернативные сделки, ипотека и юридическое сопровождение. Не передаём клиента «по конвейеру»:
              с вами на связи один ответственный риелтор от первого звонка до регистрации сделки.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Опыт работы с недвижимостью ЮВАО и центральных районов",
                "Стандарты Российской Гильдии Риэлторов",
                "Безопасные расчёты через банковскую ячейку или аккредитив",
                "Сертифицированные специалисты по ипотечным сделкам",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 lg:py-24">
        <div className="container-tight">
          <SectionHeading eyebrow="Отзывы" title="Что говорят клиенты" subtitle="Истории людей, с которыми мы провели сделки." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm text-foreground/90">«{r.text}»</blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section id="guarantees" className="bg-card/40 py-16 lg:py-24">
        <div className="container-tight grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <SectionHeading eyebrow="Гарантии" title="Прозрачные условия с первого разговора" align="left" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {guarantees.map((g) => (
                <div key={g.title} className="rounded-xl border border-border bg-background/50 p-5">
                  <g.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 font-display font-semibold">{g.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{g.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img src={contractImg} alt="Подписание договора с риелтором" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Lead form + contacts */}
      <section id="lead" className="py-16 lg:py-24">
        <div className="container-tight grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Заявка" title="Подберём объект или оценим вашу квартиру" align="left" />
            <p className="mt-4 text-muted-foreground">
              Оставьте заявку — перезвоним в течение часа в рабочее время. Бесплатно обсудим задачу и подскажем шаги.
            </p>
            <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs text-muted-foreground">Имя</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-muted-foreground">Телефон</label>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-muted-foreground">Что нужно</label>
                <div className="flex flex-wrap gap-2">
                  {["Подбор квартиры", "Продажа квартиры", "Оценка стоимости", "Ипотека"].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setForm({ ...form, goal: g })}
                      className={`rounded-full border px-3 py-1.5 text-xs transition ${
                        form.goal === g
                          ? "border-primary bg-primary/15 text-primary"
                          : "border-border bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-muted-foreground">Комментарий</label>
                <Textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Бюджет, район, сроки" rows={3} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Получить подборку объектов
              </Button>
              <p className="text-center text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
            </form>
          </div>

          <div id="contacts" className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Контакты</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href={PHONE_HREF} className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> {PHONE}
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{ADDRESS}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" /> Пн–Сб 10:00–20:00
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Дом Экспертов на Яндекс Картах"
                src="https://yandex.ru/map-widget/v1/?text=8-%D1%8F%20%D0%A2%D0%B5%D0%BA%D1%81%D1%82%D0%B8%D0%BB%D1%8C%D1%89%D0%B8%D0%BA%D0%BE%D0%B2%20%D1%83%D0%BB.%2C%2011%20%D1%81%D1%82%D1%80%202%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&z=17"
                width="100%"
                height="320"
                frameBorder={0}
                className="block"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container-tight flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Дом Экспертов · Риелторское агентство в Москве</div>
          <a href={PHONE_HREF} className="hover:text-primary"><KeyRound className="mr-1 inline h-4 w-4" />{PHONE}</a>
        </div>
      </footer>
    </div>
  );
};

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">{eyebrow}</div>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function ProcessVisual() {
  const steps = ["Заявка", "Подбор", "Просмотр", "Проверка", "Сделка", "Ключи"];
  return (
    <div className="mt-12 rounded-2xl border border-border bg-background/40 p-6 sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary/80">Как мы работаем</div>
          <div className="font-display text-lg font-semibold">Шесть шагов до ключей от вашей квартиры</div>
        </div>
        <div className="hidden text-xs text-muted-foreground sm:block">в среднем 4–8 недель</div>
      </div>
      <svg viewBox="0 0 600 90" className="block h-24 w-full" aria-hidden>
        <defs>
          <linearGradient id="goldLine" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(38 50% 58% / 0.2)" />
            <stop offset="50%" stopColor="hsl(38 50% 58% / 1)" />
            <stop offset="100%" stopColor="hsl(38 50% 58% / 0.2)" />
          </linearGradient>
        </defs>
        <line x1="20" y1="45" x2="580" y2="45" stroke="hsl(220 25% 22%)" strokeWidth="2" />
        <line
          x1="20"
          y1="45"
          x2="580"
          y2="45"
          stroke="url(#goldLine)"
          strokeWidth="2"
          strokeDasharray="300 600"
          className="animate-draw-line"
        />
        {steps.map((_, i) => {
          const x = 20 + (i * 560) / (steps.length - 1);
          return (
            <g key={i}>
              <circle cx={x} cy={45} r={7} fill="hsl(222 38% 9%)" stroke="hsl(38 50% 58%)" strokeWidth={2} />
              <circle cx={x} cy={45} r={3} fill="hsl(38 50% 58%)" />
            </g>
          );
        })}
      </svg>
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-muted-foreground sm:grid-cols-6">
        {steps.map((s) => (
          <div key={s} className="text-center">{s}</div>
        ))}
      </div>
    </div>
  );
}

export default Index;
