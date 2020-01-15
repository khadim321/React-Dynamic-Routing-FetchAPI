import React, {Component} from 'react'


class User extends Component{
        render(){
            console.log(this.props)
         return(
            <div> 
                <h1>User details:</h1>
                <h4>you requested id: {this.props.match.params.id}</h4>
                <p>details about this person</p>
            </div>

            )
        }
}

export default User;