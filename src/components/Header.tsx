import { LinkGroup } from '@/components';

export const Header = () => {
  return (
    <header>
      <nav className="flex gap-4 p-4 bg-gray-800">
        <h1 className="text-2xl font-bold text-white-900">BrokeFlix+</h1>

        <LinkGroup
          options={[
            {
              label: 'Movies',
              to: '/movies/now-playing',
              match: ['/movies/:listType'],
            },
            {
              label: 'TV',
              to: '/tv/airing-today',
              match: ['/tv/:listType'],
            },
            {
              label: 'Trending',
              to: '/trending/movie?interval=day',
              match: ['/trending/:mediaType'],
            },
            {
              label: 'Genre',
              to: '/genre/movie/action',
              match: ['/genre/:mediaType/:genre'],
            },
          ]}
        />
      </nav>
    </header>
  );
};
