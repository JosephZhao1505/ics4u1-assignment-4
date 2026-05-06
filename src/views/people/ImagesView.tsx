import { ImageGrid } from '@/components';
import { PERSON_ENDPOINT } from '@/core/constants';
import type { PersonImagesResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useParams } from 'react-router-dom';

export const ImagesView = () => {
  const { id } = useParams();
  const { data } = useTmdb<PersonImagesResponse>(`${PERSON_ENDPOINT}/${id}/images`, {}, []);

  const gridData = (data?.profiles ?? []).map((result) => ({
    id: result.id,
    imagePath: result.file_path,
    primaryText: "",
    secondaryText: "",
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="px-2">
      <h2 className="text-2xl font-bold mb-6">Images</h2>
      {data.profiles.length ?
      <ImageGrid results={gridData} /> : <p className="text-gray-400 text-center">No images available.</p>}
    </section>
  );
};