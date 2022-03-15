import React,{useState} from 'react'
import auth from '../Auth';
import axios from 'axios';


function Login(props) {
	const [username,setUsername]=useState('');
	const [password,setPassword]=useState('');

	function login(){
		var data = new FormData();
		data.append("method","login");
        data.append("email",username);
        data.append("password",password);
         axios.post("http://localhost:8000/login",data)
                .then(function(response){
                	 console.log(response);
                	if(response.data.auth!==true){
                		console.log(response.data);
                		window.sessionStorage.setItem("token", response.data.token);
                		// window.sessionStorage.setItem("user_id", response.data.token);
                		auth.login(()=>{
							props.history.push("/dashboard");
						});

                	}
                	else{
                		alert(response.data.message);
                	}
                }).catch(function(error){
                	if (error.response) {
			          console.log(error.response.data.email);
			          alert(error.response.data.email);
			        }
                });
	}
	return (
		<div>
			<h1>Login</h1>
			 <h5>Current token:</h5>{window.sessionStorage.getItem("token")}<br></br>
			<input type="email" value={username} onChange={(e) => setUsername(e.target.value)}
			 placeholder="Email"/>
			<input type="text" value={password} onChange={(e) => setPassword(e.target.value)}
			  placeholder="password"/>
			<button onClick={login}>Login</button>
		</div>
	)
}

export default Login