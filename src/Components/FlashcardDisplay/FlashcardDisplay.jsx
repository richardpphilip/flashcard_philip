import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';


const FlashcardDisplay = (props) => {

   const [isFront, setSide] = useState(false);


   useEffect(() =>{
       console.log('Use Effect running')
   });

   function callTwoFunctions(){
    setSide(!isFront)
    if(isFront === true){
        document.getElementById('flashCard').style.backgroundColor = 'yellow';
    }
    if(isFront === false){
        document.getElementById('flashCard').style.backgroundColor = 'brown';
    }
}

    return (
       <div>
        <Card onClick={() => callTwoFunctions()}>
        {isFront ? props.deck.flashcard_term : props.deck.flashcard_definition}
        
        </Card>
        </div>
      
  

    );
}

export default FlashcardDisplay;