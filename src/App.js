import React from "react";
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state ={
      student:[],
      idx:-1
    };
  }
  addStudent=()=>{
      if(this.state.idx===-1){
      let name=document.getElementById('name').value;
      let age=document.getElementById('age').value;
      let grade=document.getElementById('grade').value;  

      let newstud={
        'name' : name,
        'age' : age,
        'grade' : grade
      }
      this.state.student.push(newstud);
      this.setState({
        student : this.state.student,
        idx:-1
      });
      document.getElementById('name').value='';
      document.getElementById('age').value='';
      document.getElementById('grade').value='';
    }
  else{
    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    let grade=document.getElementById('grade').value;  

    let newstud={
      'name' : name,
      'age' : age,
      'grade' : grade
    }
    const editstud=this.state.student;
    editstud[this.state.idx]=newstud;
    this.setState({
      student : editstud,
      idx:-1
    });
    document.getElementById('name').value='';
    document.getElementById('age').value='';
    document.getElementById('grade').value='';
  }
  }
  delstud = i=>{
    let newVal=this.state.student;
    newVal.splice(i,1);
    this.setState({
      student : newVal,
      idx:-1
    });
  }

  editstud = i =>{
    if(this.state.idx!==-1){
      this.setState({
        student:this.state.student,
        idx:-1
      });  
      document.getElementById('name').value='';
      document.getElementById('age').value='';
      document.getElementById('grade').value='';
    }
    else{
    document.getElementById('name').value=this.state.student[i].name;
    document.getElementById('age').value=this.state.student[i].age;
    document.getElementById('grade').value=this.state.student[i].grade;
    this.setState({
      student:this.state.student,
      idx:i
    });
  }
}

  render(){
    var stud = this.state.student;
    return (
      <div>
        <div className="input-box">
          <table>
          <tbody>
          <tr>
            <td>
            Student name:
            </td>
            <td>
            <input type='text' id="name" placeholder="Enter the name"/>
            </td>
          </tr>
          <tr>
            <td>
            Age:
            </td>
            <td>
            <input type='text' id="age" placeholder="Enter the age"/>
            </td>
          </tr>
          <tr>
            <td>
            Grade:
            </td>
            <td>
            <input type='text' id="grade" placeholder="Enter the grade"/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
          <button className="button-28" onClick={this.addStudent}>{this.state.idx===-1?'Add details':'edit details'}</button>
            </td>
          </tr>
          </tbody>
          </table>
        </div>
        
        <table className="studtable">
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Edit option</th>
          </tr>
          </thead>
          <tbody>
          {stud.map((data,i) =>
            <tr key={i} className={this.state.idx!==-1&&(i===this.state.idx)?"mark":''}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.grade}</td>
              <td>
                <button className="button-28" onClick={e => this.delstud(i)}>delete</button>
                <button className="button-28" onClick={e=> this.editstud(i)}>edit</button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    )
  }
  
}
export default App;
