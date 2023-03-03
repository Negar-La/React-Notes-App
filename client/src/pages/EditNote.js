import { Link, useNavigate, useParams } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { useState } from "react";
import useCreateDate from "../components/useCreateDate";
import styled from "styled-components";
import DeleteModal from "../components/DeleteModal";

const EditNote = ({notes, setNotes}) => {

   const {id} = useParams();    //  console.log(id);
  const note = notes.find((item) => {
    return item.id === id
  });     // console.log(note);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  const date = useCreateDate();
  const navigate = useNavigate()

  const [modalIsOpen, setModalIsOpen] = useState(false);

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


  return (
    <section>
        <Header>
            <Link to='/' style={{ color: '#FFF' }} ><button><IoIosArrowBack/></button></Link>
            <SaveBtn onClick={handleForm} >Save</SaveBtn>
            <DeleteBtn onClick={(e) => setModalIsOpen(true)} ><RiDeleteBin6Line/></DeleteBtn>
            <DeleteModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} notes={notes} setNotes={setNotes}/>
        </Header>
        <form onSubmit={handleForm}>
            <input type='text' placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value) } autoFocus/>
            <textarea rows='28' placeholder="Note details..." value={details} onChange={(e) => setDetails(e.target.value) } ></textarea>
        </form>
    </section>
  )
} 

const DeleteBtn = styled.button`
    background: var(--color-danger);
`;

const SaveBtn = styled.button`
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.4);
    background: var(--color-primary);
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default EditNote