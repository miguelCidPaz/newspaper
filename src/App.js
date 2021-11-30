import { Component } from "react";
import ProductCard from './components/ProductCard';
import './CSS/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            img: "https://i.blogs.es/2c91fa/instax2/1024_2000.jpeg",
            description: "Una Polaroid venida a mas: la Fujifilm Instax Mini Evo tiene un monton de trucos que invitan a usarla con el smartphone",
            category: "Fotografia y Video",
            joke: "Fotos impresas a golpe de palanquita",
            nComments: 0,
            name: "Javier Pastor",
            lastComment: "Hace un dia"
        }
    }

    render() {
        return (
            <ProductCard content={this.state} />
        )
    }
}

export default App