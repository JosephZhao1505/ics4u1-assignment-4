import { Button, Footer } from '@/components';
import { useNavigate } from 'react-router-dom';

export const LandingPageView = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <section className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">BrokeFlix+</h1>
        <p className="text-gray-400 text-lg">Waste your time exponentially quicker with this waste of computing resources.</p>
        <p>Or go outside, that's good too</p>
        <Button onClick={() => navigate('/home')}>Enter</Button>
        <Footer/>
      </section>
    </main>
  );
};
