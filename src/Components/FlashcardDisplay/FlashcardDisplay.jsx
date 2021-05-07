import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';


const FlashcardDisplay = (props) => {

   const [isFront, setSide] = useState(false);


   useEffect(() =>{
       console.log('Use Effect running')
   });

   function flipCard(){
    setSide(!isFront)
  
}

    return (
       <div>
        <Card onClick={() =>flipCard()}>

        {isFront ? props.deck.flashcard_term : props.deck.flashcard_definition}
        
        </Card>
        </div>
      
  

    );
}

export default FlashcardDisplay;