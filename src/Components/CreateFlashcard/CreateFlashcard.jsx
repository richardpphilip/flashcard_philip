import { Card } from 'react-bootstrap';
import React, { Component } from 'react';

class CreateFlashCard extends Component {
    
    constructor(props){
        super(props);
        this.state = { 
           collection_name: '',
            flashcard_term: '',
            flashcard_definition: '',
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
        const card = {
            flashcard_term: this.state.flashcard_term,
            flashcard_definition: this.state.flashcard_definition,
            collection_name: this.state.collection + 1
        }
        this.props.addCard(card);
        this.setState({
            deck: this.state.deck += 1
        })
      
    }


    handleSubmit(event) {
        event.preventDefault();
        const collection = {
            collection_name: this.state.collection_name,
           

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
         
               
            <Card className= 'creator' >
            <p>Create Collection</p>
            <div>
                 <form onSubmit={this.handleSubmit}>

                        <div>
                        <label>Collection Name</label>
                        <input type='text' name="collection_name" value={this.state.collection_name} onChange={this.handleChange} />
                        </div>
                        <div>
                      <input type='submit' value='Click here to Add' />
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
        if(this.state.collection_name === ''){
            return(
            <Card>
                <p>Name the collection you would like to add.  After you will be prompted to add individual cards.
                </p>
            </Card>
            );

        }
        if(this.state.didAdd === true){
            return (
            <Card>
             <p>Add new card to: "{this.state.collection_name}"</p>
                    <p>Card Count: {this.state.deck} {this.props.collections.collection}</p>
            <div>
                 <form onSubmit={this.handleCardSubmit}>

                        <div>
                        <label>Flashcard Term</label>
                        <input type='text' name="flashcard_term" value={this.state.flashcard_term} onChange={this.handleChange} />
                        </div>
                        <div>
                        <label>Flashcard Definition</label>
                        <input type='text' name="flashcard_definition" value={this.state.flashcard_definition} onChange={this.handleChange} />
                        </div>
                        <div>
                      <input type='submit' value='Add' />
                      </div>
                </form>
                </div>
                <button  onClick={() => this.setDidAdd()}> Finish  </button>
                </Card>
            );

        }
           
    }

    render(){
  
        return (
            <div >
                <hr />
               
                    {this.renderIntro()}

                   {this.renderTitle()}
               
        
            </div>
        );
    }


}
 
export default CreateFlashCard