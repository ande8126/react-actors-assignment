import  { useState } from 'react';


function Contact(){
    const [ words, setWords ] = useState( '1' )

    let handleInput = (event=>{
        console.log( 'in handleInput', event.target.value );
        setWords(event.target.value);
    })
    
    return(
        <div>
            <h2>Contact</h2>
            <input onChange={handleInput} type="text" placeholder="Actor name here"></input>
            <p>{words}</p>
            <p>Phone: 1-800-WE-REACT</p>
            <p>Email: info@ReactActors.com</p>
        </div>
    )
}

export default Contact