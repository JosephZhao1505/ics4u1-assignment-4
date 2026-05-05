import { Button } from '@/components';
import { useNavigate } from 'react-router-dom';

export const HomeView = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <section className="max-w-3xl w-full text-center space-y-8">
        <Button onClick={() => navigate('/movies')}>Movies</Button>
        <Button onClick={() => navigate('/tv')}>TV</Button>
        <Button onClick={() => navigate('/genres')}>Genres</Button>
        <Button onClick={() => navigate('/search')}>Search</Button>
      </section>
    </main>
  );
};
