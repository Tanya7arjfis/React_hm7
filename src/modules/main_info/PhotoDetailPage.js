import { useParams } from 'react-router-dom';
import UsePhotos from '../users/hooks/UsePhotos';
import Photo from '../users/components/Photo';

export default function PhotoDetailPage() {
  const {AlbumId} = useParams()
  const {photos} = UsePhotos(AlbumId)
  // console.log(useParams());
  return (
    <div>
      <h2>User Photos</h2>
      <Photo userPhotos={photos}/>
    </div>
  )
}

