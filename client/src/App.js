import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
// import dummyNotes from './dummy-notes';
import { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const App = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []); 
  // console.log(notes);


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  

  return (
    <Main>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
           <Route path="/" element={<Notes notes={notes} />} />
           <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
           <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </Main>
  );
}

const Main = styled.main`
    background: var(--color-bg-black);
    height: 100vh;
    width: 100vw;
    padding: 2rem 1.6rem;
    overflow-y: scroll;
    position: relative;
    @media screen and (max-width: 650px) {
        padding: 2rem 1rem;
    }
`

export default App;
