import { useState, useEffect } from "react";
import  {fetchPhotos}  from "../service/service";

export default function UsePhotos(id) {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetchPhotos(id).then(({data}) => setPhotos(data))
  }, [])
  console.log(photos)
  return {photos}
}
