import React, { useState } from "react";
import CreateBox from "./CreateBox";
import Note from "./Note";
import Footer from "./footer";
import Header from "./header";

var App = () => {

  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(id) {
    console.log(id);
    setNotes(notes.filter((note,index) => index!== id))
  }

  return (
    <div>
      <Header />
      <CreateBox addNote={addNote} />
      {notes.map((note, index)=>{
        return (
          <Note title={note.title} content={note.content} key={note.key} delete={deleteNote} index={index}/>
        );
      })}
      <Footer />
    </div>
  );
};

export default App;