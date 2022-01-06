import React, {useEffect} from 'react';
import "../styles/Construction.css"

function Construction() {

    useEffect(() => {
        document.title = "pres.dev"
     }, []);

    return ( 
        <div className='temp'>
        <h1>Under Construction! Check back later...</h1>
        </div>
     );
}

export default Construction;