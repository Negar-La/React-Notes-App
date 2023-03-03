import { Link, useNavigate } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io';
import { useState } from "react";
import {v4 as uuid} from 'uuid';
import useCreateDate from "../components/useCreateDate";
import styled from "styled-components";

const CreateNote = ({setNotes}) => {

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const date =  useCreateDate();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "" || details ==="") {
            window.alert("Please fill out the two required fields")
        } else
        if (title && details) {
            const note = {id: uuid(), title, details, date}
            //add this note to the Notes array
            setNotes(prevNotes => [note, ...prevNotes])
            // console.log(note);
            navigate ('/')    //redirect to HomePage
        }
    }

  return (
    <section>
        <Header >
            <Link to='/' style={{ color: '#FFF' }}>
                <button><IoIosArrowBack/></button> 
            </Link>
            <SaveBtn onClick={handleSubmit} >Save</SaveBtn>
        </Header>
        <form onSubmit={handleSubmit} >
            <input 
                type='text' 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                autoFocus/>
            <textarea 
                rows='28' 
                placeholder="Note details..." 
                value={details} 
                onChange={(e) => setDetails(e.target.value)}>
            </textarea>
        </form>
    </section>
  )
}

const SaveBtn = styled.button`
     background: var(--color-primary);
     padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.4);
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default CreateNote