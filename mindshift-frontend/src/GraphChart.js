import react from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
 
function GraphChart()
{
  const[graph,setGraph]=useState([]);
   
  const[getdata,setGetData]=useState([]);
 
 
  const countryDetail = async () => {
    axios.get("http://127.0.0.1:8000/api/v1/users/get_users")
    
     .then(response => {
        setGetData(response.data.users);
     });
     
   }
   useEffect(() => {
    countryDetail();
  }, []);
 
  
  const selectChart = (e) =>
  {   
    axios.get(`http://localhost:3000/countries`)
     .then(res => {
      const countryData = res.data;
      let countryName = [];
      let budgetName = [];
      countryData.forEach(element => {
        countryName.push(element.Country);
        budgetName.push(element.budget);
       });
        setGraph({
            labels: countryName,
            datasets: [
              {
                label: 'In Billions Dollar',
                backgroundColor:[
                    'green',
                    'red',
                    'blue',
                    '#FFBF00',
                    '#DE3163',
                    'orange',
                    '#40E0D0',
                    '#6495ED',
                    '#CCCCFF',
                    '#FFBF00',
                    '#DE3163',
                    '#9FE2BF',
                    '#CD5C5C'
                 ],
                borderWidth:0,
                data: budgetName
              }
             ]
        });
      });
      
  }
  useEffect(() => {
    selectChart();
  }, []);
   
  return(
     <div className="container">
        <h4 className="text-center text-primary mt-2 mb-3">Graph Chart in ReactJS</h4> 
        <h6 className="text-center text-success mt-2 mb-3">Country By Defence Budget</h6> 
        <div className="row mt-3">
           <div className="col-sm-3">
            
              <div className=""> 
               <table class=" table-bordered graphTable ">
                
                <tr>
                    <th>Country</th>
                    <th>Budget</th>
                </tr> 
                  { getdata.map((name)=>
                    <tr>
                      <td>{name.name}</td>
                      <td>${name.points}</td>
                    </tr>                  
                 )}   
               </table>     
             </div>
           </div>     
           <div className="col-sm-9">
           <Bar
             data={graph}
                options={{
                    title:{
                      display:true,
                      text:'Average Rainfall per month',
                      fontSize:20
                    },
                    legend:{
                      display:true,
                      position:'right'
                    }
                }}
                />
            </div>
             
        </div>     
     </div>    
    )
}
export default GraphChart;