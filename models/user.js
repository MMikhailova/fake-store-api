import { v4 as newId } from 'uuid';

const users = [   {
    id: newId(),
    email: 'test@gmail.com',
    password:'Hbjjbdjs12'
    }]
  

class User{
    constructor(email, password) {
        this.id = newId();
        this.email = email;
        this.password = password;
    }
    static getUserByEmail = (email) => { 
        return users.find((user)=>user.email===email)
    };
    addUser = () => {
        users.push(this)
    };
    

    
    


}
export default User;
