import React , {Component} from 'react';
import User from './User';

class Users extends Component{
    state = {
        users:[
            {name:"ramesh", age:24},
            {name:"vinod", age:25},
            {name:"sai", age:23},
            {name:"sandhya", age:24},
            {name:"rohini", age:25},
            {name:"srilekha", age:23},
        ],

        titile:"Users List"
    };
    makeMeYounger =() => {
    const younger = this.state.users.map((user)=>{
         const tempUser = user;
         if(tempUser.age>10){
           tempUser.age -= 10;
         } 
         return tempUser;
    })
    this.setState({
        younger
    });

    }
    makeUsOlder = () => {
        const older = this.state.users.map((user)=>{
           const tempUser = user;
           if(tempUser.age< 90){
           tempUser.age += 10;
           }
           return tempUser;
        })
        this.setState({
            older
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.makeMeYounger}>make us 10 years younger</button>
                <br></br>
                <br></br>
                <button onClick ={this.makeUsOlder}>make us 10 years older</button>
                <br></br>
                
                <h1>{this.state.titile}</h1>
               {
                   this.state.users.map((user)=>{
                         return <User age={user.age}> {user.name}</User>
                   })
               }
               
            </div>
        )
    }
}
export default Users;