import { MainLayout } from '@/layouts/MainLayout';
import { CreditsView, MovieView, ErrorView, HomeView, LandingPageView, MovieListsView, ReviewsView, SearchView, TelevisionListsView, TrendingView, SeasonsView } from '@/views';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageView />} />
      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomeView />} />
        <Route path="/movies/:listType" element={<MovieListsView />} />
        <Route path="/tv/:listType" element={<TelevisionListsView />} />
        <Route path="/trending/:mediaType" element={<TrendingView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/:mediaType/:id" element={<MovieView />}>
          <Route path="credits" element={<CreditsView />} />
          <Route path="reviews" element={<ReviewsView />} />
          {/* <Route path="trailers" element={<TrailersView />} /> */}
          <Route path="seasons" element={<SeasonsView />} />
          {/* <Route path="season/:seasonNumber" element={<EpisodeView />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
