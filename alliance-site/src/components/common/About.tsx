export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tighter mb-8">
              О проекте Alliance Salt
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              SOL YAKA — современное предприятие по добыче и переработке высококачественной соли.
              Мы используем передовые технологии, чтобы обеспечивать чистый продукт для промышленности и пищевой отрасли.
            </p>
            <p className="text-zinc-400">
              Наша миссия — устойчивое развитие, экологичность и надёжность поставок по всему региону.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-4xl">🏔️</div>
                <div>
                  <h3 className="font-semibold text-2xl">Природные ресурсы</h3>
                  <p className="text-zinc-400">Добыча из проверенных месторождений</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl">⚙️</div>
                <div>
                  <h3 className="font-semibold text-2xl">Современное оборудование</h3>
                  <p className="text-zinc-400">Автоматизированные линии переработки</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl">🌱</div>
                <div>
                  <h3 className="font-semibold text-2xl">Экологичный подход</h3>
                  <p className="text-zinc-400">Минимальное воздействие на окружающую среду</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}