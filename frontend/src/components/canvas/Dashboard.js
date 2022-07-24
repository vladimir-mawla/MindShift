import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import axios from 'axios';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Dashboard extends Component {	
	constructor(props) {
        super(props);
        this.state = {
            users: [],

        };

    }
	componentDidMount() {
		axios
        .post("http://127.0.0.1:8000/api/v1/users/get_users", {
            company_id: localStorage.getItem("company_id"),
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				Accept: 'application/json'
			}
        })
        .then((response) => {
            const s = response.data.users;
            // this.state.users(s);
			this.setState({ users: [...this.state.users, s] })
            
        });
	  }
	render() {
		// console.log(this.state.users)
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
			theme: "dark2", // "light1", "dark1", "dark2"
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
		<div>
			<AdminNavbar />
			<CanvasJSChart options = {options}
			/>
		</div>
		);
	}
}
 
export default Dashboard;
