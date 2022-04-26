
export default function Photo({userPhotos}) {
  return (
    <div>
      {
        userPhotos.map((item) => {
          return (
            <div key={item.id}>
              {item.title}
              <img src={`${item.thumbnailUrl}`} />
            </div>
          )
        })
      }
    </div>
  )
}
