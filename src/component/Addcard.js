import React from 'react';
import './common.css';


const Addcard = (props) => {

const list=props.sendNotes.map(course=>{
  
  return (
  <div className="add" key={course.id}>
      <div className="cardadd">
        <div className="heading">
              <h5>{course.title}</h5>
        </div>
        <div className="cardcontent">
          <p>{course.content}</p>
        </div>
        <button onClick={()=>{props.deleteNote(course.id)}}>Delete</button>
      </div>
    </div>)
});
console.log(list);
  
return(
  <div className="display-content">
    {list}
  </div>
)


}
export default Addcard;