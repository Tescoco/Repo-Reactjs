import React, { Component } from 'react'
import Styles from "./Reports.module.css";
import ReportsCards from './ReportsCards';
 

export class Reports extends Component {
  
 
 Report = 0
    constructor(props) {
        super(props)
      const  count = 0
      this.state = {
          count: count,
          margin: null,
            cards: [
                {
                  id: count
                },
              ],
        }
    };
    
    componentDidMount (){
     this.Report =   setInterval(() => {
            const newId = this.state.count + 1
        const newList = [
           ...this.state.cards,{id: newId}
        ]
      this.setState({
           cards: newList,
           count:newId
          });
    }, 2000);   
      const  width = window.innerWidth
if (width < 500) {
  this.setState({
   margin:"13%"
   });
  }
}
  componentWillUnmount(){
    return clearInterval(this.Report)
  }

 
    render() {

 
         return (
            <div className={Styles.container}  style={{alignSelf:"center",marginLeft:this.state.margin}}>
                   {this.state.cards.map((todo, index) => (
            <ReportsCards key={index} index={index} {...todo} />
          ))}
            
              
           </div>
        )
    }
}

export default Reports

