import React from 'react'
import { Card, Button } from 'react-bootstrap'

const GetDeck = (props) => {

     function getDeckLength(props){
        console.log(props.cards)
    }
    getDeckLength(props)
    return(
      <div>
        <Card className='deck'>
        {props.collection.collection_name} 
        <Button variant ="secondary" size="sm" onClick={() => props.getDeck(props.collection.id)}> get the Deck </Button>
       </Card>
      </div>  
    );
}

export default GetDeck;