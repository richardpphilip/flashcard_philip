import React from 'react'
import { Card } from 'react-bootstrap'

const GetDeck = (props) => {

    return(
      <div>
        <Card id='getDeckCard'>
        {props.collection.collection_name}   {props.collection.id}
        <button onClick={() => props.getDeck(props.collection.id)}> get the Deck </button>
       </Card>
      </div>  
    );
}

export default GetDeck;