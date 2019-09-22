import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Jawaid',   Physics: 20,  Chemistry:15, Biology:17, Maths:10, English:18, Total: 80, Grade:'A'},
            { id: 2, name: 'Khalid',   Physics: 19,  Chemistry:10, Biology:10, Maths:12, English:14, Total: 65, Grade:'B'},
            { id: 3, name: 'Moen',     Physics: 15,  Chemistry:20, Biology:19, Maths:18, English:20, Total: 92, Grade:'A+'},
            { id: 4, name: 'Waqar',    Physics: 13,  Chemistry:10, Biology:12, Maths:11, English:12, Total: 58, Grade:'C'},
         ]
      }
   }
   renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, Physics, Chemistry, Biology, Maths, English, Total, Grade  } = student //destructuring
         return (
           
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{Physics}</td>
               <td>{Chemistry}</td>
               <td>{Biology}</td>
               <td>{Maths}</td>
               <td>{English}</td>
               <td>{Total}</td>
               <td>{Grade}</td>
 
            </tr>
         )
      })
   }
renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }


   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            {/* <h1>React Dynamic Table</h1> */}
             <h1 id='title'>Student Mark Sheet</h1>
            <table id='students'>
              <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table //exporting a component make it reusable and this is the beauty of react