//Home.js 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { useState } from 'react';
import pic1 from './images/pic1.png';
import  pic2 from './images/pic2.png';
import  pic3 from './images/pic3.png';
import  pic4 from './images/pic4.png';
import  pic5 from './images/pic5.png';
import  pic6 from './images/pic6.png';


const Home = () => { 
    const [isHover ,setIsHover]=useState(false);
    const boxStyle = {
        backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)',
    };
    const handleMouseEnter=()=>{setIsHover(true)};
    const onMouseLeave=()=>{setIsHover(false)};
    return( 
        <>
        <div className="App"> 
        
            <h1 className='App'>Home For Web Designs & Templates</h1> 
            <div className="Segment">
                <img className = "Sample" src={pic1} Headphone/>
                <img className = "Sample" src={pic2}/>
                <img className = "Sample" src={pic3}/>
                <img className = "Sample" src={pic4}/>
            </div>
            <div className='Segment'>
            <img className = "Sample" src={pic5}/>
            <img className = "Sample" src={pic6}/>
            </div>
            
        </div> 
        <div className=' App'>

        </div>
        </>
    ) 
} 

export default Home;
