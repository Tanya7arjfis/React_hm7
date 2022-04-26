import { Routes, Route } from 'react-router-dom';

import AlbumsDetailPage from '../main_info/AlbumsDetailPage';
import PhotoDetailPage from '../main_info/PhotoDetailPage';


export default function UsersModule() {
  return (
    <Routes>
      <Route path='' element={<AlbumsDetailPage />} />
      <Route path=':AlbumId' element={<PhotoDetailPage />} />  
    </Routes>
  )
}
