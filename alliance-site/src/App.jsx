  // ← можешь оставить, если хочешь (или удали — не важно)

export default function App() {
  const products = [
    {
      title: 'Техническая соль',
      text: 'Для дорог, складов, промышленных и хозяйственных задач.',
    },
    {
      title: 'Таблетированная соль',
      text: 'Для систем водоочистки, котельных и обслуживания оборудования.',
    },
    {
      title: 'Пищевая соль',
      text: 'Для предприятий, торговли и оптовых поставок.',
    },
    {
      title: 'Соль в мешках',
      text: 'Удобная фасовка для розницы, склада и регулярных закупок.',
    },
  ];

  const advantages = [
    'Быстрая обработка заявок',
    'Понятный ассортимент без перегруза',
    'Оптовые и регулярные поставки',
    'Консультация по выбору продукции',
    'Доставка и удобные условия сотрудничества',
    'Адаптивный дизайн для телефона и ПК',
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-xl font-bold tracking-tight">ООО «Альянс»</div>
            <div className="text-sm text-slate-500">
              Поставки соли для бизнеса и частных клиентов
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#catalog" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">Ассортимент</a>
            <a href="#advantages" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">Преимущества</a>
            <a href="#delivery" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">Доставка</a>
            <a href="#contacts" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">Контакты</a>
          </nav>

          <a
            href="#request"
            className="rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
          >
            Оставить заявку
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_40%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
                Надёжные поставки соли по заявкам клиентов
              </div>

              <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Соль для бизнеса и производства — быстро, удобно и без лишней путаницы
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Современный сайт-каталог с понятной навигацией, быстрым доступом к ассортименту, заявкой в один клик и акцентом на доверие клиента.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#catalog"
                  className="rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                >
                  Смотреть ассортимент
                </a>
                <a
                  href="#request"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:border-slate-900 hover:bg-slate-50 active:scale-95"
                >
                  Получить консультацию
                </a>
              </div>

              <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  ['Оптовые поставки', 'Для бизнеса'],
                  ['Быстрая заявка', 'За 1 минуту'],
                  ['Удобный каталог', 'Без перегруза'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="mt-1 text-sm text-slate-500">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Каталог-превью в hero */}
            <div className="relative z-10">
              <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-2xl shadow-slate-200/60">
                <div className="rounded-[24px] bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold">Каталог продукции</div>
                      <div className="text-sm text-slate-500">Быстрый доступ к основным категориям</div>
                    </div>
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Актуально</div>
                  </div>

                  <div className="space-y-3">
                    {products.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:border-slate-900"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-semibold">{item.title}</div>
                            <div className="mt-1 text-sm leading-6 text-slate-500">{item.text}</div>
                          </div>
                          <button className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                            Подробнее
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* КАТАЛОГ */}
        <section id="catalog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.125em] text-slate-500">Ассортимент</div>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.02em] text-slate-900 sm:text-4xl lg:text-5xl">
                Основные категории продукции
              </h2>
            </div>
            <p className="max-w-2xl text-slate-600">
              Каталог должен открываться быстро и сразу показывать клиенту понятные группы товаров.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-slate-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-lg font-bold">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                <button className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-slate-900">
                  Узнать подробнее
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ПРЕИМУЩЕСТВА */}
        <section id="advantages" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.125em] text-slate-500">Почему мы</div>
                <h2 className="mt-2 text-3xl font-bold tracking-[-0.02em] text-slate-900 sm:text-4xl lg:text-5xl">
                  Сайт должен не просто выглядеть красиво, а помогать продавать
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  Главная задача — не перегрузить клиента лишними эффектами. Нужны доверие, скорость и лёгкий путь до заявки.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-slate-900"
                  >
                    <div className="text-sm font-semibold leading-6">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ДОСТАВКА */}
        <section id="delivery" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: '1. Вы оставляете заявку', text: 'Через форму, телефон или мессенджер.' },
              { title: '2. Менеджер уточняет задачу', text: 'Подбираем вид соли, фасовку и объём поставки.' },
              { title: '3. Согласуем условия', text: 'Фиксируем доставку, стоимость и формат сотрудничества.' },
            ].map((step) => (
              <div key={step.title} className="rounded-[28px] border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ФОРМА ЗАЯВКИ */}
        <section id="request" className="bg-slate-900 py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Заявка</div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Получите консультацию и предложение по поставке
              </h2>
              <p className="mt-5 max-w-xl text-slate-300">
                Форма должна быть короткой и понятной. Чем меньше трения — тем выше конверсия.
              </p>
            </div>

            <form className="rounded-[28px] bg-white p-6 text-slate-900 shadow-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Имя</span>
                  <input
                    className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base outline-none transition-all duration-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                    placeholder="Ваше имя"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Телефон</span>
                  <input
                    className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base outline-none transition-all duration-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                    placeholder="+7 (...)"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium">Что вас интересует</span>
                  <input
                    className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base outline-none transition-all duration-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                    placeholder="Например: таблетированная соль, 2 тонны"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium">Комментарий</span>
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base outline-none transition-all duration-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                    placeholder="Укажите объём, город, частоту поставок"
                  />
                </label>
              </div>

              <button className="mt-5 w-full rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95">
                Отправить заявку
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contacts" className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="text-lg font-bold">ООО «Альянс»</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Современный сайт поставщика соли с упором на скорость, доверие и удобную навигацию.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Контакты</div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>Телефон: +7 (000) 000-00-00</p>
              <p>Email: info@alliance-salt.ru</p>
              <p>Адрес: укажи адрес компании</p>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Навигация</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <a href="#catalog" className="hover:text-slate-950">Ассортимент</a>
              <a href="#advantages" className="hover:text-slate-950">Преимущества</a>
              <a href="#request" className="hover:text-slate-950">Заявка</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}