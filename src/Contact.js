import React , {Component} from 'react';
import axios from 'axios';

class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
           username: '',
           comment: '',
           email: ''
          
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
}

    submitHandler = event => {
    event.preventDefault();
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

}

    render(){
        return(

        //const {username , comment , Topic} = this.state

            <div>
                <h1>Contact Page.</h1>
                <h2>POST a form by using axios</h2>
                <form style={{paddingTop: "50px"}} onSubmit={this.submitHandler}>
            <label>Name:</label><br/>
                
                <input
                type="text" 
                name="username"
                value={this.state.username}
                onChange={this.changeHandler} 
                /><br/>

            <label>Email-id:</label><br/>
                <input
                type="text" 
                name="email"
                value={this.state.email}
                onChange={this.changeHandler} 
                /><br/>
                
                <div>
            <label>Message:</label><br/>

                <input 
                type="text" 
                name="comment"
                value={this.state.comment}
                onChange={this.changeHandler}
                />
                </div><br/>

                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;