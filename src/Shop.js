import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Shop extends Component{

    state = {
        contacts:[]
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.setState({contacts: response})
        })
    }


    render(){

       const {contacts} = this.state
        return(
            <div style={{textAlign:"center"}}>
                <h1>Shop Page.</h1><br/>
                <h2>GET Resfull Api by using fetch</h2>

            {contacts.map(contact => (
                <div className="card" key="user.id">
                <div className="card-body">
                    <Link to={`/shop/`+contact.id}>
                    <h5 className="card-title">{contact.name}</h5>
                    </Link>
                    <h5>{contact.email}</h5>
                    <p>{contact.phone}</p>
                    <p>{contact.website}</p>
                </div>
            </div>
            ))}
            </div>
        )
    }
}

export default Shop;