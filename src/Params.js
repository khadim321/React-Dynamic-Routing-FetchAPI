import React, {Component} from 'react'
import axios from 'axios'

class Params extends Component{
    state = {
        user : null
    }
    componentDidMount(){

        let id = this.props.match.params.user_id;
        axios.get("https://jsonplaceholder.typicode.com/users/" + id)
        .then(res => {
            this.setState({
                user : res.data
            })
        })
        .catch(error => {
            console.log(error)
        })

    }
    render(){
        const user = this.state.user ? ( 
            <div className="user">
                <h4 className="center">{this.state.user.name}</h4>
                <p>{this.state.user.email}</p>
                <p>{this.state.user.phone}</p>
                <p>{this.state.user.website}</p>
            </div>
        ) : ( 
            <div className="center">Loding user . ..</div>
         )
        return(
            <div className="container">
                <h1>Params page:</h1>
                {user}
            </div>
        )
    }
}

export default Params;