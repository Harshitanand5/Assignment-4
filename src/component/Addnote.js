import React from 'react';
import './common.css';


class Addnote extends React.Component{
    state={
        title:"",
        content:""
    }

 handelChange=(event)=>{
  
   this.setState({
      [event.target.id]:event.target.value
   });
   
 }
 handelSubmit=(event)=>{
     event.preventDefault();
     console.log(this.props);
     this.props.addNote(this.state);
     this.setState({
        title:'',
        content:''
     });
     
 }

    render(){
        return (
            <div className="notes"  >
              <form >
                <input id="title" placeholder="title" onChange={this.handelChange} value={this.state.title}></input>
               <textarea id="content" onChange={this.handelChange} value={this.state.content} ></textarea><br></br>
               <button onClick={this.handelSubmit}>Submit</button>
                </form>
            </div> );
    }
 
}
    
export default Addnote;