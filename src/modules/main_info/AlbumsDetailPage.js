import { useParams } from 'react-router-dom';
import useUserAlbums from '../users/hooks/UseAlbums'
import Albums from '../users/components/Albums';

export default function AlbumsDetailPage() {
  const {userId} = useParams()
  const {albums} = useUserAlbums(userId);
  // console.log(useParams());
  return (
    <div>
      <h2>User Albums</h2>
      <Albums albumsUser={albums}/>
    </div>
  )
}
