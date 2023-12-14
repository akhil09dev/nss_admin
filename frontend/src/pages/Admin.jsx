import { Link ,Outlet} from "react-router-dom";
import attendance from '../assets/images/attendance.svg';
import events from '../assets/images/events.svg'
import volenteers from '../assets/images/volenteers.svg'
import UserBar from "../components/UserBar";
const Admin = () => {
    return ( <div>
        
        <UserBar />

        <div>
            <Link to='volunteers'>
           <img className="w-20" src={volenteers} />
            </Link>
            
        </div>
        <div >
            <Link to='attendance'>
            <img className="w-20" src={attendance} />
            </Link> 
            </div>

        <div> 
            <Link to='activities'>
            <img  className="w-20" src={events} />
            </Link>
            </div>

            <div>
            
        <Outlet/>

        </div>
    </div> );
}
 
export default Admin;