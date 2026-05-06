import { Footer } from '@/components';
import { HiFilm, HiFire } from 'react-icons/hi';
import { HiRectangleGroup, HiTv } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

export const HomeView = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Movies', path: '/movies/now-playing', icon: <HiFilm className="w-10 h-10" /> },
    { label: 'TV', path: '/tv/airing-today', icon: <HiTv className="w-10 h-10" /> },
    { label: 'Trending', path: '/trending/movie?interval=day', icon: <HiFire className="w-10 h-10" /> },
    { label: 'Genres', path: '/genres', icon: <HiRectangleGroup className="w-10 h-10" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col">
      <main className="flex-grow flex items-center justify-center p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="cursor-pointer group relative overflow-hidden flex flex-col items-center justify-center gap-4 h-56 rounded-3xl bg-slate-900/50 border border-slate-800 transition-all duration-500 hover:border-indigo-500/50 hover:bg-slate-800 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-5 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>

              <span className="text-2xl font-bold tracking-tight text-slate-300 group-hover:text-white">{item.label}</span>
            </button>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};
