import { Component } from 'react';
import '../CSS/style.css';

class CardImage extends Component {

    render() {
        return (
            <div className="frame-card-image">

                <img src={this.props.img} alt="#" />

            </div>
        )
    }
}

export default CardImage