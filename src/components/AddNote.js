import React, { useContext, useState, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

function AddNote() {
  const { addnote, getnote } = useContext(NoteContext);

  const [note, setNote] = useState({ title: "", description: "", tags: "" });

  const style = {
    textDecoration: "underline",
  };

  const handleClick = (e) => {
    e.preventDefault();
    addnote(note);
    setNote({ title: "", description: "", tags: "" });
  };

  const onchange = (e) => {
    const { name, value } = e.target;

    if (name === "description") {
      setNote({ ...note, description: value });
    } else {
      setNote({ ...note, [name]: value });
    }
  };

  useEffect(() => {
    try {
      getnote();
      console.log("rendered");
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2 className="my-3" style={style}>
        Add a note:
      </h2>
      <form action="">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            name="title"
            value={note.title}
            type="text"
            className="form-control"
            id="title"
            placeholder="Add title "
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            value={note.description}
            onChange={onchange}
            className="form-control"
            id="description"
            name="description"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            value={note.tags}
            onChange={onchange}
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            placeholder="Add tags"
          />
        </div>
        <button
          onClick={handleClick}
          //   type="submit"
          className="btn btn-primary "
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;