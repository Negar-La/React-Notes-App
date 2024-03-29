import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NoteItem = ({ note }) => {
  const renderTruncatedDetails = () => {
    if (!note.details) return null;

    const truncatedDetails =
      note.details.length > 250
        ? `${note.details.substr(0, 250)}...`
        : note.details;

    return truncatedDetails.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <Note to={`/edit-note/${note.id}`}>
      <h4>
        {note.title.length > 50 ? note.title.substr(0, 50) + "..." : note.title}
      </h4>
      <p>{renderTruncatedDetails()}</p>
      <p>{note.date}</p>
    </Note>
  );
};

const Note = styled(Link)`
  background: var(--color-primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: all 300ms ease;
  color: var(--color-white);

  &:hover {
    opacity: 0.8;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.85;
  }

  &:nth-child(3) {
    grid-column: 1/3;
    background: var(--color-danger);
  }

  &:nth-child(4) {
    grid-row: 3/5;
    background: var(--color-blue);
  }

  &:nth-child(5) {
    background: var(--color-pink);
  }

  &:nth-child(7) {
    grid-column: 1/3;
    background: var(--color-pink);
  }

  @media screen and (max-width: 650px) {
  }
`;

export default NoteItem;
