import React from 'react';
import './index.scss';


class PasswordForm extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            nameTrue : false,
            passwordTrue: false,
            errorMsg: "please SignUp"
        }

        this.submitHandler = this.submitHandler.bind(this);

        this.bigCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.special = "!§$%&?";
        this.numbers = "1234567890";

    }


    submitHandler(event){
        event.preventDefault();
        this.checkPassword();
    }

    checkPassword(){

        let name = document.querySelector("input[name='name']").value;
        let password = document.querySelector("input[name='password']").value;


        let passWordConditions = [
            "0123456789",
            "!§$%&?",
        ]




        
        if(name.includes("@")){
        
            passWordConditions.map(condition => {

                for(let index = 0; index < condition.length; index++){

                if(!password.includes(condition.charAt(index))){
                    this.setState({
                        errorMsg: "Ok Boomer"
                    })
                }
                } 

            }) 
        

        }
        else{
            this.setState({
                errorMsg: "no @"
            })
        }


        if(!name){
            this.setState({
                errorMsg: "no Username"
            })
        }





        
    }

    render(){
        return(
            <form className="signForm" onSubmit={this.submitHandler}>
           
            <fieldset>
                <label>userName</label>
                <input name="name"></input>
                <label>password</label>
                <input name="password"></input>
                
                <label className="errorMsg">{this.state.errorMsg}</label>
                <button name="sign">Sign Up</button>
            </fieldset>
           
            </form>
        )
    }

}

export default PasswordForm;