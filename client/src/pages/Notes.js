import { useState, useEffect } from "react";
import {CiSearch} from 'react-icons/ci';
import {BsPlusLg} from 'react-icons/bs';
import {MdClose} from 'react-icons/md';
import { Link } from 'react-router-dom';
import NoteItem from '../components/NoteItem';

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
        <header className='notes__header'>
           {!showSearch && <h2>My Notes</h2>} 
           {showSearch && 
            <input 
                type='text' 
                autoFocus 
                placeholder='Keyword...'
                value={text}
                onChange={(e) => {setText(e.target.value); handleSearch()}}
            />} 
            <button className='btn' onClick={() => setShowSearch(!showSearch)} >
                {showSearch ? <MdClose/> : <CiSearch/>}
            </button>
        </header>
        <div className='notes__container'>
            {filteredNotes.length === 0 && <p className="empty__notes">No Note Found.</p>}
            { 
            // first we had notes.map but then change it to the state (filteredNotes) that we have.
                filteredNotes.map((note) => {
                    return (
                        <NoteItem key={note.id} note={note}/>
                    )
                })
            }
        </div>
        <Link to='/create-note' className='btn add__btn'>
            <BsPlusLg/>
        </Link>
    </section>
  )
}

export default Notes