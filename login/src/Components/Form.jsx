import React from 'react';
import './Form.css';

function Login(){
  const [username , SetUsername] = React.useState("");

  const [password , SetPassword] = React.useState("");
 
  function handleSubmit(e){
    e.preventDefault();
    SetUsername("");
    SetPassword("");
    console.log(username,password);
  }
    return(
      <div className="App">
      
      <div className="user">
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input type="text" id="usernmae" value={username} onChange={e=>SetUsername(e.target.value)}/>
      

      <div className="Pass">
      <label htmlFor="password">Password   : </label>
      <input type="password" id="password" value={password} onChange={e=>SetPassword(e.target.value)}/>
      </div>

      <div className="submit">
      <input type="submit" id="submit" value="Submit" />
      </div>
      </form>
      </div>
      </div>
    
      
    )
}
export default Login;