// Header.tsx
import { ButtonGroup, LinkGroup, SearchBar } from '@/components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [type, setType] = useState<string>('movie');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center gap-8 px-4">
        
        <h1 
          className="text-xl font-black tracking-tighter text-indigo-500 cursor-pointer shrink-0"
          onClick={() => navigate('/home')}
        >
          BrokeFlix+
        </h1>

        <div className="hidden lg:block flex-1">
          <LinkGroup
            options={[
              { label: 'Home', to: '/home' },
              { label: 'Movies', to: '/movies/now-playing', match: ['/movies/:listType'] },
              { label: 'TV', to: '/tv/airing-today', match: ['/tv/:listType'] },
              { label: 'Trending', to: '/trending/movie?interval=day', match: ['/trending/:mediaType'] },
              { label: 'Genre', to: '/genre/movie/action', match: ['/genre/:mediaType/:genre'] },
            ]}
          />
        </div>

        <div className="flex items-center bg-slate-900/50 border border-slate-700 rounded-lg pl-4 pr-1 py-1 gap-2 focus-within:border-indigo-500/50 transition-all w-full max-w-sm ml-auto">
          <SearchBar
            value={query}
            onChange={(input) => {
              setQuery(input);
              navigate(`/search?q=${input}&type=${type}`);
            }}
          />
          
          <div className="h-4 w-[1px] bg-slate-700 mx-1" />

          <ButtonGroup
            value={type}
            options={[
              { label: 'Movies', value: 'movie' },
              { label: 'TV', value: 'tv' },
              { label: 'People', value: 'person' },
            ]}
            onClick={(val) => {
              setType(val);
              query && navigate(`/search?q=${query}&type=${val}`);
            }}
          />
        </div>
      </nav>
    </header>
  );
};
