import { MOVIE_ENDPOINT, TELEVISION_ENDPOINT } from '@/core/constants';
import type { TrailersResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useLocation, useParams } from 'react-router-dom';

export const TrailersView = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const isMovie = pathname.includes('movie');
    const ENDPOINT = isMovie ? MOVIE_ENDPOINT : TELEVISION_ENDPOINT;
    const { data } = useTmdb<TrailersResponse>(`${ENDPOINT}/${id}/videos`, {}, [id]);

    const trailers = data?.results.filter((v) => v.site === 'YouTube' && v.type === 'Trailer') ?? [];

    if (!data) {
        return <p className="text-center text-gray-400">Loading...</p>;
    }

    return (
        <section className="px-2 space-y-4">
            <h2 className="text-2xl font-bold">Trailers</h2>
            {trailers.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                    {trailers.slice(0, 6).map((trailer) => (
                        <div key={trailer.key}>
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                    title={trailer.name}
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            <p className="text-gray-300 text-sm mt-1">{trailer.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 text-center">No trailers available.</p>
            )}
        </section>
    );
};