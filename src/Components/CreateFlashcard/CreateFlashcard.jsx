import { Card } from 'react-bootstrap';
import React, { Component } from 'react';

class CreateFlashCard extends Component {
    
    constructor(props){
        super(props);
        this.state = { 
            title: '',
            word: '',
            definition: '',
            collection: '',
            deck: 0,
            didAdd: false,
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleCardSubmit= this.handleCardSubmit.bind(this);
     
    }

 

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCardSubmit(event){
        event.preventDefault();
        let i = this.props.collections.length -1
        const card = {
            word: this.state.word,
            definition: this.state.definition,
            collection: this.props.collections[i].id
        }
        this.props.addCard(card);
        this.setState({
            deck: this.state.deck += 1
        })
      
    }


    handleSubmit(event) {
        event.preventDefault();
        const collection = {
            title: this.state.title,
           

        }
        this.props.addCollection(collection);
        let i = this.props.collections.length -1
        this.setState({
            collection: this.props.collections[i].id,
            deck: 0,
            didAdd: true
        });
       
    }
    renderIntro(){
        if(this.state.didAdd === false){
        return (
         
               
            <Card>
            <p>Create Collection</p>
            <div type='container'>
                 <form onSubmit={this.handleSubmit}>

                        <div>
                        <label>Title/Subject of Collection</label>
                        <input type='text' name="title" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div>
                      <input type='submit' value='Add' />
                      </div>
                </form>
                </div>
                </Card>
        )};
    }

    setDidAdd(){
        this.setState({
            didAdd: false
        })
    }
    
    renderTitle(){
        if(this.state.title === ''){
            return(
            <Card>
                <p>First Create the title/subject for the deck of flashcards.
                 Press ADD button. Then you can add the cards to that collection. Press FINISH if you're done adding cards to this collection.
                </p>
            </Card>
            );

        }
        if(this.state.didAdd === true){
            return (
            <Card id='addCard'>
             <h3>Add new card to: "{this.state.title}"</h3>
                    <h3>Card Count: {this.state.deck} {this.props.collections.collection}</h3>
            <div type='container'>
                 <form onSubmit={this.handleCardSubmit}>

                        <div>
                        <label>Word</label>
                        <input type='text' name="word" value={this.state.word} onChange={this.handleChange} />
                        </div>
                        <div>
                        <label>Definition</label>
                        <input type='text' name="definition" value={this.state.definition} onChange={this.handleChange} />
                        </div>
                        <div>
                      <input type='submit' value='Add' />
                      </div>
                </form>
                </div>
                <button id='finish' onClick={() => this.setDidAdd()}> Finish  </button>
                </Card>
            );

        }
           
    }

    render(){
  
        return (
            <div id='createFlashCard'>
                <hr />
               
                    {this.renderIntro()}

                   {this.renderTitle()}
               
        
            </div>
        );
    }


}
 
export default CreateFlashCard