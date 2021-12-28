import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { createRef } from "react";
import axios from "axios";

const PORT = 8080;

function App() {
  const formRef = createRef();
  const handleSubmit = (event) => {
    const form = formRef.current;
    const tag_number = form.tag_number.value;
    const part_number = form.part_number.value;
    const rack_number = form.rack_number.value;
    const location = form.location.value;
    const message = form.message.value;
    const quantity = form.quantity.value;
    // console.log(description);
    if (
      tag_number === "" ||
      part_number === "" ||
      rack_number === "" ||
      location === "" ||
      quantity === ""
    ) {
      alert("Please fill in all required details");
    }
    // else {
    //   axios.post(`/videos`, {tag_number ,part_number ,rack_number,location,quantity})
    //   redirectHome();
    // }
  };

  return (
    <section className="upload">
      <h1 className="upload__heading">Inventory Form</h1>
      <div className="upload__section">
        <form ref={formRef} className="upload__form">
          <label className="upload__form-label" type="text">
            Tag Number
          </label>
          <input
            name="tag_number"
            className="upload__form-input"
            type="text"
            placeholder="Tag Number"
          />

          <label className="form__label">Part Number</label>
          <input
            className="form__input"
            name="part_number"
            type="text"
            placeholder="Part Number"
          />

          <label className="form__label">Rack Number</label>
          <input
            className="form__input"
            name="rack_number"
            type="text"
            placeholder="Rack Number"
          />

          <label className="form__label">Location</label>
          <input
            className="form__input"
            name="location"
            type="text"
            placeholder="Location"
          />

          <label className="form__label">Quantity</label>
          <input
            className="form__input"
            name="quantity"
            type="text"
            placeholder="Quantity"
          />

          <label className="upload__form-label" type="text">
            Message
          </label>
          <textarea
            name="message"
            className="upload__form-textarea"
            type="text"
            placeholder="Add a message"
          />
          <div className="upload__form-buttons-div"></div>
        </form>
      </div>
    </section>
  );
}

export default App;
