import React from "react";

var note = (props) => {
  return (
    <div className="note">
      <h1>
        {props.title}
      </h1>
      <p>
        {props.content}
      </p>
      <button onClick={()=>{
        props.delete(props.index);
        console.log("Deleted");
      }}>DELETE</button>
    </div>
  );
};

export default note;
