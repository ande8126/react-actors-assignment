import  { useState } from 'react';


function Contact(){
    const [ words, setWords ] = useState( '' );
    const [ fName, setFName ] = useState( '' );
    const [ lName, setLName ] = useState( '' );

    let handleFirst = ( name ) =>{
        setFName( name.target.value );
    }

    let handleLast = ( name ) =>{
        setLName( name.target.value );
    }

    let handleImpression = ( event ) =>{
        console.log( 'in handleInput', event.target.value );
        setWords( event.target.value );
    }

    
    return(
        <div>
            <h2>Contact</h2>
            <input onChange={handleFirst} type="text" placeholder="First name"></input>
            <input onChange={handleLast} type="text" placeholder="Last name"></input>
            <input onChange={handleImpression} type="text" placeholder="Best impression"></input>
            <p>{fName} {lName} {words}</p>
            <p>Phone: 1-800-WE-REACT</p>
            <p>Email: info@ReactActors.com</p>
        </div>
    )
}

export default Contact