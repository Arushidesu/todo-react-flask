import React from 'react';
import axios from 'axios';

class CardList extends React.Component {

    state = {
        pokemon: []
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/todos')
            .then(res => {
                this.setState({
                    pokemon: res.data
                });
                console.log(this.state.pokemon)
            })
    }

    render() {
        return (
            <div>
                Olá
            </div>
        )
    }
}

export default CardList;