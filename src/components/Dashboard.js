import React from 'react'
import auth from '../Auth'


function Dashboard(props) {
	function logout(){
		sessionStorage.removeItem('token');
   		auth.logout(()=>{
		props.history.push("/");
		});
		
	}
	
	return (
		<div>
			<h1>dashboard</h1>
			{window.sessionStorage.getItem("token")}
			<button onClick={logout}>logout</button>
		</div>
	)
}

export default Dashboard