import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <div>

          <div>
            HOME PAGE OF NSS NITC
          </div>
          <div>
            <Link to='/admin'>
            login/register
            </Link>
          
          </div>
        </div>
     );
}
 
export default Home;