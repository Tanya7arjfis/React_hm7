import { useState, useEffect } from "react";
import  {fetchAlbums}  from "../service/service";

export default function useUserAlbums(id) {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    fetchAlbums(id).then(({data}) => setAlbums(data))
  }, [])
  return {albums}
}