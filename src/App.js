import React from 'react';
import Addcard from "./component/Addcard";
import Addnote from './component/Addnote';
import Navbar from "./component/Navbar"


class App extends React.Component{
 state={
      sendNotes:[ ]
 }
 addNote=(sendNotes)=>{
   sendNotes.id=5+ Math.floor((Math.random()*100));
 console.log(sendNotes);
 let sendNote=[...this.state.sendNotes,sendNotes]
 this.setState({
   sendNotes:sendNote
 })
 }
deleteNote=(id)=>{
 let newList=this.state.sendNotes.filter((note)=>{
    return note.id!==id
   
 })
 this.setState({
  sendNotes:newList
})
}
 
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Addnote addNote={this.addNote}/>
        <Addcard sendNotes={this.state.sendNotes} deleteNote={this.deleteNote}/>
      </div>
    );
  }
}

export default App;
