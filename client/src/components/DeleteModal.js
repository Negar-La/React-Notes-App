import Modal from 'react-modal';
import styled from 'styled-components';
import {CgDanger} from 'react-icons/cg';
import { Link, useParams, useNavigate} from "react-router-dom"


const DeleteModal = ({modalIsOpen, notes, setNotes}) => {

    const {id} = useParams();  
    const navigate = useNavigate()

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '0',
          backgroundColor: 'black',
          borderRadius: '0.8rem',
        },
      };
      Modal.setAppElement();
      
  const handleDelete = () => {
    // if (window.confirm("Are you sure you want to delete ?")) 

    //create a new array (newNotes) containing all notes except the note with the current id.
    const newNotes = notes.filter(item => item.id !== id);
    setNotes(newNotes);
    navigate('/')
  }


    return (
        <Modal   ariaHideApp={false} isOpen={modalIsOpen}  style={customStyles}>
            <Wrapper>
                <CgDanger  size={65}  />
                <label></label>
                <div>
                <button onClick={handleDelete} >Yes, delete it!</button>
                <Link to='/' style={{ color: '#FFF' }} ><button>No, cancel!</button></Link>
                </div>
            </Wrapper>
        </Modal>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    label {
        font-size: 1.5rem;
        &:after {
            content: "Are you sure you want to delete this note ?";
        }
    }
    button {
        padding: 0.8rem;
        margin: 1rem;
    }

    @media screen and (max-width: 600px) {
        padding: 10px;
        label {
            font-size: 1rem;
            &:after {
            content: 'Delete this Note?';
            }
        }
        button {
            padding: 0.8rem;
            margin: 1rem;
            font-size: 1rem;
    }
 }
`

export default DeleteModal;