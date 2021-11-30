import { Component } from "react";
import CardImage from "./CardImage";
import CardText from "./CardText";

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.content
    }

    render() {
        console.log(this.state)
        return (
            <section className="body-card">

                <CardText content={this.props.content} />

                <CardImage img={this.props.content.img} />

            </section>
        )
    }
}

export default ProductCard;