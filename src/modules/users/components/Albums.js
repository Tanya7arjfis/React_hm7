import { Link } from 'react-router-dom';

export default function Albums({ albumsUser }) {
  // console.log({ albumsUser })
  return (
    <div>
      {
        albumsUser.map((item) => {
          return <div key={item.id}>
            {item.title}
            <button>
              <Link to={`${item.id}`}>view photos</Link>
            </button>
          </div>
        })
      }
    </div>
  )
}
