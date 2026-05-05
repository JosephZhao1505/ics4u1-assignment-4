import { Footer, ImageGrid, LinkGroup, Pagination } from '@/components';
import { TELEVISION_LISTS_ENDPOINT } from '@/core/constants';
import type { TvsResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const TelevisionListsView = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const { listType } = useParams<{ listType: string }>();
  const formattedList = listType?.replace('-', '_');
  const list = listType || 'airing_today';
  const { data } = useTmdb<TvsResponse>(`${TELEVISION_LISTS_ENDPOINT}/${formattedList}`, { page }, [page, list]);

  useEffect(() => {
    setPage(1);
  }, [list]);

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: result.original_name,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-5">
      <div className="flex items-center justify-between mb-4">
        <LinkGroup
          options={[
            { label: 'Airing Today', to: '/tv/airing-today' },
            { label: 'On The Air', to: '/tv/on_the-air' },
            { label: 'Popular', to: '/tv/popular' },
            { label: 'Top Rated', to: '/tv/top-rated' },
          ]}
        />
      </div>
      <ImageGrid results={gridData} onClick={(id) => navigate(`/tv/${id}/seasons`)} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
      <Footer />
    </section>
  );
};
