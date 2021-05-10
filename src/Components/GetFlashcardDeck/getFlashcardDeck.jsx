import React from 'react'
import { Card } from 'react-bootstrap'

const GetDeck = (props) => {

     function getDeckLength(props){
        console.log(props.cards)
    }
    getDeckLength(props)
    return(
      <div>
        <Card className='deck'>
        {props.collection.collection_name} 
        <button onClick={() => props.getDeck(props.collection.id)}> get the Deck </button>
       </Card>
      </div>  
    );
}

export default GetDeck;