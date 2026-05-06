import { Button, LinkGroup } from '@/components';
import { IMAGE_BASE_URL, PERSON_ENDPOINT } from '@/core/constants';
import type { PersonResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { FaBirthdayCake, FaLocationArrow, FaChevronLeft } from 'react-icons/fa';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export const PersonView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useTmdb<PersonResponse>(`${PERSON_ENDPOINT}/${id}`, {}, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
        <p className="animate-pulse">Loading Profile...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 pb-20">
      <div className="container mx-auto px-4 pt-8">
        
        <div className="mb-8">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            <div className="flex items-center gap-2">
              <FaChevronLeft className="w-3 h-3" />
              <span>Back</span>
            </div>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          <aside className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            <div className="sticky top-24">
              <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                <img 
                  src={`${IMAGE_BASE_URL}${data.profile_path}`} 
                  alt={data.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="space-y-4 px-2">
                <div className="flex items-center gap-3 text-slate-400">
                  <FaLocationArrow className="text-indigo-500 shrink-0" />
                  <span className="text-sm leading-relaxed">{data.place_of_birth}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <FaBirthdayCake className="text-indigo-500 shrink-0" />
                  <span className="text-sm">{data.birthday}</span>
                </div>
              </div>
            </div>
          </aside>

          <section className="flex-1 min-w-0">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
              {data.name}
            </h1>

            <div className="mb-10">
              <h2 className="text-lg font-bold text-indigo-400 uppercase tracking-widest mb-3">Biography</h2>
              <p className="text-slate-400 leading-relaxed text-lg max-w-3xl whitespace-pre-line">
                {data.biography || "No biography available for this person."}
              </p>
            </div>

            <div className="border-b border-slate-800 mb-8">
              <LinkGroup
                options={[
                  { label: 'Career', to: 'career' },
                  { label: 'Images', to: 'images' },
                ]}
              />
            </div>

            <div className="mt-8">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};