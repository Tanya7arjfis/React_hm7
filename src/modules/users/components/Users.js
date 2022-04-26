import { Link } from "react-router-dom";

export default function Users({ users }) {
  return (
    <div>
      {users.map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            <button>
              <Link to={`${item.id}`}>view albums</Link>
            </button>
          </div>
        )
      })}
    </div>
  )
}
