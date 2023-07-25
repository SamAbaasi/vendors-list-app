import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/vendor-list">Vendor List</Link>
        </li>
      </ul>
    </div>
  )
}
export default Home;