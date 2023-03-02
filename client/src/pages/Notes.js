import { useState, useEffect } from "react";
import {CiSearch} from 'react-icons/ci';
import {BsPlusLg} from 'react-icons/bs';
import {MdClose} from 'react-icons/md';
import { Link } from 'react-router-dom';
import NoteItem from '../components/NoteItem';
import styled from "styled-components";

const Notes = ({notes}) => {

    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState("");
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note =>{
            if (note.title.toLowerCase().includes(text.toLowerCase())) {
                return note;
            }
        }))
    }

   // for every type and every key-press, we need to run the function handleSearch, so we use useEffect
    useEffect(handleSearch, [text])
    


  return (
    <section>
        <NotesHeader>
           {!showSearch && <h2>My Notes</h2>} 
           {showSearch && 
            <input 
                type='text' 
                autoFocus 
                placeholder='Keyword...'
                value={text}
                onChange={(e) => {setText(e.target.value); handleSearch()}}
            />} 
            <button onClick={() => setShowSearch(!showSearch)} >
                {showSearch ? <MdClose/> : <CiSearch/>}
            </button>
        </NotesHeader>
        <NotesContainer>
            {filteredNotes.length === 0 && <EmptyNotes>No Note Found.</EmptyNotes>}
            { 
            // first we had notes.map but then change it to the state (filteredNotes) that we have.
                filteredNotes.map((note) => {
                    return (
                        <NoteItem key={note.id} note={note}/>
                    )
                })
            }
        </NotesContainer>
        <AddBtn>
          <Link to='/create-note' style={{ color: '#FFF' }}>
             <BsPlusLg/>
          </Link>
        </AddBtn>
      
    </section>
  )
}

const NotesHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.6rem 1.5rem;
    background: var(--color-bg-black);
    z-index: 9;
    input {
        padding: 0.7rem 1rem;
        background: transparent;
        border: 1px solid var(--color-bg-dark);
        border-radius: 0.6rem;
        color: var(--color-white);
        font-size: 1.1rem;
        width: 100%;
        margin-right: 1.5rem;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
        padding: 2rem 1rem;
        position: fixed;
        top: 0;
        left: 0;
 }
`;

const NotesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.4rem;
    padding: 0 10%;
    text-align: justify;
    @media screen and (max-width: 650px) {
        margin-top: 5rem;
        gap: 1rem;
        padding: 0px;
 }
`;

const EmptyNotes = styled.p`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
const AddBtn = styled.button`
    position: fixed;
    bottom: 4rem;
    right: 7rem;
    padding: 1rem;
    @media screen and (max-width: 650px) {
        padding: 1.5rem;
        font-size: 1.5rem;
        bottom: 6%;
        right: 2rem;
 }
`

export default Notes