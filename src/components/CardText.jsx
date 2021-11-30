import { Component } from "react";

class CardText extends Component {

    render() {
        return (
            <div className="card-text">
                <p className="description-card">{this.props.content.description}</p>
                <div>
                    <p className="category-card">{this.props.content.category}</p>
                    <button>Leer mas ▼</button>
                </div>

                <p className="joke-card">{this.props.content.joke}</p>
                <div>
                    <button>💬</button>
                    <p className="comments-card">- {this.props.content.name} -</p>
                    <p>HACE UN DIA</p>
                </div>

            </div>
        )
    }
}

export default CardText