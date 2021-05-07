import React, { Component } from 'react';
import axios from 'axios';
import GetDeck from './GetFlashcardDeck/getFlashcardDeck'
import FlashcardDisplay from './FlashcardDisplay/FlashcardDisplay';
import CreateFlashCard from './CreateFlashcard/CreateFlashcard';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';



class App extends Component{

    state = {
        word : '',
        definition: '',
        collection : [],
        cards : [],
        collections : [],


    }

    componentDidMount(){
        this.getAllCollections();
            console.log(this.state.collections)
        }

    async getAllCollections(){
        let collections = await axios.get('http://127.0.0.1:8000/collection/')
        this.setState({
            collections : collections.data
        })
    }

    async addCollection(collection){  
        await axios.post ('http://127.0.0.1:8000/collection/', collection);
        this.getAllCollections();
    }

    async addCard(card){
        await axios.post('http://127.0.0.1:8000/flashcard/', card);
        this.getDeck(card.collection)
    }

     async getAllCards(){
        let cards = await axios.get('http://127.0.0.1:8000/flashcard/');
        this.setState({
            cards : cards.data
        })
    }
    // async changeCard(id, updatedCollection){
    //     let updatedTerm = prompt('What is the term you want to change to?')
    //     let updatedDefintion = prompt('What is the defintion you want to change to?')
    //     await axios.put(`http://127.0.0.1:8000/flashcard/${id}/`,{
    //         flashcard_term : updatedTerm,
    //         flashcard_defintion
    //     })
    // }

    async getDeck(id){
        let collection = await axios.get(`http://127.0.0.1:8000/flashcard/${id}/`)
        this.setState({
            collection : collection.data
        })
        console.log(collection.data)
        console.log(collection)
        let deck = collection.data.map(collection => {
        return collection
        })
        this.setState({
            cards: deck
        })
        console.log(this.state.cards)
        console.log(this.state.cards.length)
    }
    
    mapCollections(){
        let collectionArray = this.state.collections.map(collection => {
            return collection
        })
        console.log(collectionArray)
        return collectionArray.map(collection => 
            <GetDeck
            collection = {collection}
            getDeck = {(id) => this.getDeck(id)}
            mapDecks ={this.mapCollections.bind(this)}
            /> 
            )
    }

    renderDeck(){
        if(this.state.cards.length > 0) {
            console.log(this.state.cards.length)
            return this.state.cards.map(mappedCards => {
                return <FlashcardDisplay deck = {mappedCards} />
            });
        }
    }


    render(){

        return(
        <Container>
            <CreateFlashCard
            collections= {this.state.collections}
            mapDecks ={this.mapCollections.bind(this)}
            addCard = {this.addCard.bind(this)}
            addCollection = {this.addCollection.bind(this)}
            />
                           <Row>
                <Col>
                <div>
            {this.mapCollections()}
            </div>
                </Col>
                <Col>
                <div>
            Deck Length: {this.state.cards.length}
            {this.renderDeck()}
           
             
            </div>
                </Col>
                 </Row>
        </Container>
        )
    }
}
export default App