import { Outlet } from "react-router-dom";
import { useState } from "react";
import { volunteers } from "../assets/data";
import ListItem from "./ListElement";

const VolunteerList = () => {

  const handleClick = (prop) => {
    setList(volunteers.filter(volunteer => volunteer.unit==prop) ); 
  }
  const [list ,setList] = useState([])
    return (
        <>
        <div>
        <div onClick={()=>handleClick(1)}  > Unit 1</div>
        <div onClick= {()=>handleClick(2)}  > Unit 2</div>
        <div onClick={()=>handleClick(3)}  > Unit 3</div>

        </div>
        <div>
          {list.map((item) =>(<ListItem volunteer={item}/>))}
        </div>
        


        
        </>

      );
}
 
export default VolunteerList;