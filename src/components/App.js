import React, { useState, useRef } from "react";
import produce from "immer";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Notes from "./components/notes/notes.js";

function App() {
  const initialState = [];
  const inputEl = useRef(null);
  const [data, setData] = useState(initialState);

  const handleDelete = (id) => {
    setData(
      produce((draft) => {
        const i = draft.findIndex((el) => el.id === id);
        draft.splice(i, 1);
      })
    );
  };

  const handleChange = (id, title) => {
    inputEl.current.focus();
    const titleBefore = document.querySelector("#noteinput");
    titleBefore.value = title;
    handleDelete(id);
  };

  const handleClick = () => {
    const title = document.querySelector("#noteinput").value.trim();
    const id = Math.floor(Math.random() * 100);
    if (title) {
      const nextState = produce(data, (draftState) => {
        draftState.push({ title, id });
      });
      document.querySelector("#noteinput").value = "";
      setData(nextState);
    }
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Manga Notes App</Navbar.Brand>
        </Container>
      </Navbar>
      <InputGroup className="mb-3">
        <FormControl
          ref={inputEl}
          id="noteinput"
          placeholder="Enter the name of manga"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="dark" id="button-addon2" onClick={() => handleClick()}>
          Add Note
        </Button>
      </InputGroup>

      <Notes
        data={data}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
