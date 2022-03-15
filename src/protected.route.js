import React from 'react'
// import auth from './Auth'
import {Route,Redirect} from 'react-router-dom'

export const ProtectedRoute=({component: Component,...rest}) =>{
	return (
		<Route {...rest}
			render={props=>{
				// if(auth.isAuthenticated())
				if(window.sessionStorage.getItem("token")!=null)
				{
					return <Component{...props}/>;
				}
				else{
					return <Redirect to={{
						pathname:"/",
						state:{
							from:props.location
						}
					}} />;
				}
				
			}}

		/>
	);
};

