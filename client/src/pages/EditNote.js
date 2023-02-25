import { Link, useNavigate, useParams } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { useState } from "react";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({notes, setNotes}) => {

   const {id} = useParams();    //  console.log(id);
  const note = notes.find((item) => {
    return item.id === id
  });     // console.log(note);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  const date = useCreateDate();
  const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      //create a new object spreading previous note that we have and then making the changes
      //(title, details and new date)
      const newNote = {...note, title, details, date}

      const newNotes = notes.map(item => {
        if (item.id === id) {
          item = newNote;
        }
        return item
      })
      setNotes(newNotes);
    }
    navigate('/')
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete ?")) {

    //create a new array (newNotes) containing all notes except the note with the current id.
    const newNotes = notes.filter(item => item.id !== id);
    setNotes(newNotes);
    navigate('/')
    }

  }


  return (
    <section>
        <header className="create-note__header">
            <Link to='/' className="btn"><IoIosArrowBack/></Link>
            <button className="btn lg primary" onClick={handleForm} >Save</button>
            <button className="btn danger" onClick={handleDelete} ><RiDeleteBin6Line/></button>
        </header>
        <form className="create-note__form" onSubmit={handleForm}>
            <input type='text' placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value) } autoFocus/>
            <textarea rows='28' placeholder="Note details..." value={details} onChange={(e) => setDetails(e.target.value) } ></textarea>
        </form>
    </section>
  )
} 

export default EditNote