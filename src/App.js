import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            fullName: '',
            userName: '',
            email:'',
            password: ''
        }
        this.changeFullname =this.changeFullname.bind(this)
        this.changeUsername =this.changeUsername.bind(this)
        this.changeEmail =this.changeEmail.bind(this)
        this.changePassword =this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    changeFullname(e){
        this.setState({
            fullName:e.target.value,
        })
    }

    changeUsername(e){
        this.setState({
            userName:e.target.value,
        })
    }

    changeEmail(e){
        this.setState({
            email:e.target.value,
        })
    }
    changePassword(e){
        this.setState({
            password:e.target.value,
        })
    }
    
    onSubmit(e){
        e.preventDefault();

        const register = {
            fullName:this.state.fullName,
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password,
        }
        axios.post('http://localhost:8000/app/signup', register)
         .then(response => console.log(response.data))

         this.setState({
            fullName:'',
            userName:'',
            email:'',
            password:''
         })
    }

  render() {
    return (
     <>
        <div className='container'>
          <div className="form-div">
            <form action=""  onSubmit={this.onSubmit}>
                <input type="text" placeholder='FullName'
                 onChange={this.changeFullname} 
                 value ={this.state.fullName} 
                 className= 'form-control form-group'/>
                 <input type="text" placeholder='UserName'
                 onChange={this.changeUsername} 
                 value ={this.state.userName} 
                 className= 'form-control form-group'/>
                 <input type="email" placeholder='Email'
                 onChange={this.changeEmail} 
                 value ={this.state.email} 
                 className= 'form-control form-group'/>
                 <input type="password" placeholder='Password'
                 onChange={this.changePassword} 
                 value ={this.state.password} 
                 className= 'form-control form-group'/>
                 <input type="submit" className='btn btn-danger btn-block btn-lg' id='submit'  
                 value = 'submit' />
            </form>
          </div>
        </div>
     </>
    )
  }
}
