import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';


const FlashcardDisplay = (props) => {

   const [isFront, setSide] = useState(false);


   useEffect(() =>{
       console.log('Use Effect running')
       console.log(props.deck.id)
       console.log(props.changeCard.updatedDefinition)
       console.log(props.changeCard.updatedTerm)
   });

   function flipCard(){
    setSide(!isFront)
  
}

    return (
        <div >
        <Card className ='flashcard' onClick={() =>flipCard()}>
        {isFront ? props.deck.flashcard_term : props.deck.flashcard_definition}
        <button onClick ={() => props.changeCard(props.deck.id, props.deck.collection_name)}>edit card</button>
        
        </Card>
        </div>
      
  

    );
}

export default FlashcardDisplay;