import React from 'react';
import './index.scss';


class PasswordForm extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            nameTrue : false,
            passwordTrue: false,
            errorMsg: "please SignUp",
            confirmation: false
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

        let fullName = document.querySelector("input[name='name']").value;
        let password = document.querySelector("input[name='password']").value;
        let userName = fullName.split("@")[0];
        let status = false;

        let passWordConditions = [
            ["0123456789","numbers"],
            ["!§$%&?","specialCase"],
            ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","bigCase"]
        ]

        this.setState({
            confirmation: true
        }) 


        
        if(fullName.includes("@")){
        
            if(password === userName){
                this.setState({
                    errorMsg: "Password includes Username",
                    confirmation: false
                })
            }
            else if(password.length < 8){
                this.setState({
                    errorMsg: "Password shound at least have 8 characters",
                    confirmation: false
                })   
            }

            passWordConditions.map(condition => {

                status = false;
                
                for(let index = 0; index < condition[0].length; index++){
                    if(password.includes(condition[0].charAt(index))){                  
                        status = true;
                    }
                }
                 
                if (!status){
                    this.setState({
                        errorMsg: condition[1] + " is missing",
                        confirmation: false
                    }) 
                }
            }) 
        }

        else{
            this.setState({
                errorMsg: "no @",
                confirmation: false
            })
        }

        if(!fullName){
            this.setState({
                errorMsg: "no Username",
                confirmation: false
            })
        }        
    }

    render(){
        return(

            <article>
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

            {this.state.confirmation?
            <section>
                Congratulation, you are part of our pyramide scheme.
            </section>:
            ""

            }


         
            </article>
        )
    }

}

export default PasswordForm;