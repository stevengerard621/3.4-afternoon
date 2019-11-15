import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);
            
            this.state = {

            }
    }

    render(){
        let person = this.props.person
        return(
            <div className='card'>
                <div className='container card-content'>
                    <p className='name'>{person.name.first} {person.name.last}</p>
                    <p className='index'>Index</p>
                    <p className='info'><strong>City: </strong>{person.city}</p>
                    <p className='info'><strong>Country: </strong>{person.country}</p>
                    <p className='info'><strong>Employer: </strong>{person.employer}</p> 
                    <p><strong>Title: </strong>{person.title}</p>
                    <p><strong>Favorite Movie: </strong></p>
                    {person.favoriteMovies.map((e, i) => <p className="favorite-movie" key={e}>{i+1}. {e}</p>)}
                </div>
            </div>
            
        )
    }
}
export default Card;