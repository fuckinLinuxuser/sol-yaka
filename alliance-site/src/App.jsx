'use client'; // если используешь Next.js App Router

import { useEffect, useState } from 'react';

export default function HeroHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Название компании — замени на своё
  const companyName = "SOL YAKA";

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Задний слой — фиксированный фон */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/back-layer.jpg')", // ← замени на свою заднюю фото
          transform: `translateY(${scrollY * 0.3}px)`, // лёгкий parallax
        }}
      />

      {/* Передний слой — скроллится нормально и перекрывает */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75"
        style={{
          backgroundImage: "url('/images/front-layer.jpg')", // ← замени на свою переднюю фото
          opacity: 0.85 + (scrollY > 100 ? 0 : 0), // можно добавить fade при скролле
          transform: `translateY(${scrollY * 0.6}px)`,
        }}
      />

      {/* Тёмная overlay для читаемости текста */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Навигация + Лого */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        {/* Лево — название компании */}
        <div className="text-3xl font-bold tracking-tighter text-white">
          {companyName}
        </div>

        {/* Центр — навигация */}
        <div className="flex gap-10 text-lg font-medium text-white">
          <a href="#about" className="hover:text-orange-400 transition-colors">О нас</a>
          <a href="#services" className="hover:text-orange-400 transition-colors">Услуги</a>
          <a href="#projects" className="hover:text-orange-400 transition-colors">Проекты</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">Контакты</a>
        </div>

        {/* Право — можно добавить кнопку или пусто */}
        <div className="w-32" />
      </nav>

      {/* Контент по центру (по желанию) */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight mb-4">
          Создаём будущее
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          Короткое мощное описание проекта / компании
        </p>
        <button className="mt-10 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-orange-400 hover:text-white transition-all">
          Узнать больше
        </button>
      </div>

      {/* Индикатор скролла внизу */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </div>
    </header>
  );
}