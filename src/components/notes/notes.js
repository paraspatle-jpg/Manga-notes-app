import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Notes = (props) => {
  const items = props.data.map((note) => (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Button
            variant="success"
            onClick={() => props.handleDelete(note.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </Button>
          <Button
            variant="success"
            onClick={() => props.handleChange(note.id, note.title)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <ul style={{ listStyleType: "none" }}>
      <li>{items}</li>
    </ul>
  );
};

export default Notes;
