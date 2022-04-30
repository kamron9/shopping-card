import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
   constructor(){
     super();
     this.state = {
       count:0,
       name:'',
       status:'',
       data:[
         {id:1, name:'sardor', status:'qassob'},
         {id:2, name:'bekzod', status:'artist'},
         {id:3, name:'asad', status:'programmist'},
         {id:4, name:'jamshid', status:'rejjisor'},
       ]
     }
   }
  render() {
    // functioin delete
    const onDelete=(id)=>{
     const newData= this.state.data.filter(value=>value.id!==id)
      this.setState({data:newData})
    }
    const changeName =(e)=>{
      this.setState({name:e.target.value})
    }
    const changeStatus =(e)=>{
      this.setState({status:e.target.value})
    }
    const onAdd=()=>{
      let info = {
        name:this.state.name,
        status:this.state.status,
        id:this.state.data.length+1
      }
      let newData = [...this.state.data, info]
      this.setState({data:newData})
      this.setState({name:''})
      this.setState({status:''})
    }
    const onEdit =(name, status)=>{
      this.setState({name:name})
      this.setState({status: status})
    }
    return (
      <div className='container'>
      <div>
        <input type="text" value={this.state.name} onChange={changeName} placeholder="name"/>
        <input type="text" value={this.state.status} onChange={changeStatus} placeholder="status"/>
        <button onClick={onAdd}>add</button>
      </div>
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>status</th>
              <th colSpan={2}>action</th>
            </tr>
          </thead>
        {
          this.state.data.map(({id,name,status})=>{
            return(
              <tbody key={id}>
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{status}</td>
                  <td><button onClick={()=>onDelete(id)}>delete</button></td>
                  <td><button onClick={()=>onEdit(name, status)}>edit</button></td>
                </tr>
             </tbody>
            )
          })
        }
        </table>
      </div>
    )
  }
}
