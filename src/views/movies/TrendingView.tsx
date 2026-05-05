import { ButtonGroup, Footer, ImageGrid, LinkGroup, Pagination } from '@/components';
import { TRENDING_ENDPOINT } from '@/core/constants';
import type { MoviesResponse, TvsResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export const TrendingView = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const { mediaType } = useParams<{ mediaType: string }>();
  const interval = searchParams.get('interval') || 'day';

  const { data } = useTmdb<MoviesResponse | TvsResponse>(`${TRENDING_ENDPOINT}/${mediaType}/${interval}`, { page }, [
    page,
    mediaType,
    interval,
  ]);

  useEffect(() => {
    setPage(1);
  }, [mediaType, interval]);

  const gridData = (data?.results ?? []).map((result: any) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: result.original_title || result.original_name,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-5">
      <div className="flex items-center justify-between mb-4">
        <LinkGroup
          options={[
            { label: 'Movies', to: '/trending/movie?interval=day' },
            { label: 'TV', to: '/trending/tv?interval=day' },
          ]}
        />

        <ButtonGroup
          value={interval}
          options={[
            { label: 'Today', value: 'day' },
            { label: 'Week', value: 'week' },
          ]}
          onClick={(value) => setSearchParams({ interval: value })}
        />
      </div>
      <ImageGrid results={gridData} onClick={(id) =>{
        const mediaNav = mediaType === "movie" ? 'credits' : 'seasons';
        navigate(`/${mediaType}/${id}/${mediaNav}`)}} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
      <Footer />
    </section>
  );
};
