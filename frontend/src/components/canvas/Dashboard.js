import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import axios from 'axios';
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
            company_id: localStorage.getItem("company_id")
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
				text: "Employees Progress"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: results
					
	
				
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options}
			/>
		</div>
		);
	}
}
 
export default Dashboard;
