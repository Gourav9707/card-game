import React from 'react';
import Nav from "./Nav";
import {getCards} from "../api/api"
import '../App.css';
import Box from '@material-ui/core/Box';
import Cards from "./cards";
import Target from "./Target";


export default function Home(props){
    const [cards,setCards]=React.useState([]);

    const handlelogout=()=>{
        props.dt.history.push("/");
      }

    React.useEffect(()=>{
        getCards().then((data)=>setCards(data.cards))
    },[])

    const handleclick=(type)=>{
        console.log(type);
    }

    function drop(event) {
        event.preventDefault();
        let  data = event.dataTransfer.getData("transfer");
        // event.target.appendChild(document.getElementById(data));
        console.log("drop successfull");
      }
      function allowDrop(event) {
        event.preventDefault();
      }
      function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
      }

      function notAllowDrop(event){
          event.preventDefault();
      }
    return ( 
        <>
        <Nav hist={handlelogout}/>
        <Box
        display="flex"
        m={2}
        p={2}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {cards.map((dt,index)=>(
            <div id={index} draggable="true" onDragStart={drag} onDragOver={notAllowDrop} >
           <Box m={1}>
                <Cards image={dt.image} type={dt.suit} clicked={handleclick}/>
           </Box>
           </div>
        ))}
        </Box>
        <Target drop={()=>drop} allowDrop={()=>allowDrop}/>
        </>
     );
}
 