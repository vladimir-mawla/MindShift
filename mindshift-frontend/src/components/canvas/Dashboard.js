import './dashboard.css';
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import axios from 'axios';
import Pusher from "pusher-js"
import AdminNavbar from '../AdminNavbar/AdminNavbar';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Dashboard extends Component {	
        state = {
            users: [],
        };
	componentDidMount() {
		axios
        .post("http://127.0.0.1:8000/api/v1/users/get_users", {
            company_id: localStorage.getItem("company_id")},{
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				Accept: 'application/json'
			}
        })
        .then((response) => {
            const s = response.data.users;
			this.setState({ users: [...this.state.users, s] })
        })
		var pusher = new Pusher('ccb92aa552693d2a8867', {
			cluster: 'ap2'
		  });
	  
		  var channel = pusher.subscribe('my-channel');
		  channel.bind('my-event', data => {

			this.setState({ users: [data.message[0]] })
		  });
	  }
	render() {
		const results =[];
		this.state.users.map((user) =>(
			user.forEach(u => {
				results.push(
					{ y:u.points, label:u.name }
				)})
		))
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2",
			backgroundColor: "#026483",
			title:{
				text: "Employees' Progress"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y} Points",		
				startAngle: -90,
				dataPoints: results
					
	
				
			}]
		}
		
		return (
		<div className='dashboard-comp'>
			<AdminNavbar />
			<div className="dash">
				<CanvasJSChart options = {options}
				backgroundColor ={'yellow'}
				/>
			</div>

		</div>
		);
	}
}
 
export default Dashboard;
