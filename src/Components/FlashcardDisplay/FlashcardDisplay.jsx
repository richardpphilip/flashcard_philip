import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';


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
        <Button variant ="secondary" size="sm"  onClick ={() => props.changeCard(props.deck.id, props.deck.collection_name)}>Edit</Button>
        
        </Card>
        </div>
      
  

    );
}

export default FlashcardDisplay;