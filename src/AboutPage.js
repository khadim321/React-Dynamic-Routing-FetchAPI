import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    state = {
        user : [
            {id:1, name:"Kahdim"},
            {id:2, name:"Nadeem"},
            {id:3, name:"Arif"},
            {id:4, name:"Hasan"},
            {id:5, name:"Zahid"}
        ]
    }

    render(){
        const myname = this.state.user.map(item=>{
        return <Link to={`/about/`+item.id}><h1>{item.name}</h1></Link>
        })
        return(
        <div>
            <h1>About Page.</h1>
            <h2>GET User List by using axios</h2><br/>
            {myname}
        </div>
        )
    }
}

export default About;