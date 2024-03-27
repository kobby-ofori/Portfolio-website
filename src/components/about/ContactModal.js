import { useState } from "react";
import "./ContactModal.css";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
// import { myServiceId, myTemplateId, mypublicKey } from "../../utils/Utils";

const ContactModal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Error: Please fill all the fields");
      return; 
    }

    const serviceId = process.env.REACT_APP_MY_SERVICE_ID;
    const templateId = process.env.REACT_APP_MY_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_MY_PUBLIC_KEY;

    const templateParams = {
      to_email: "Elijah Ofori",
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        console.log("SUCCESS!");
        setShow(false);
        setName("");
        setEmail("");
        setMessage("");
        alert("Form sent successfully");
      },
      (error) => {
        console.log(error);
        alert("FAILED...", error.text);
      }
    );
  };

  return (
    <>
      <button className="launch-modal-btn" onClick={handleShow}>
        Reach out
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header-style" closeButton>
          <Modal.Title className="modal-title">Reach Out</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-style">
          <form className="form-style" onSubmit={handleSubmit}>
            <label>Name</label>
            <br />
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <label>Email</label>
            <br />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="...@gmail.com"
            />
            <br />
            <br />
            <label>Message</label>
            <br />
            <textarea
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <button className="launch-modal-btn" type="submit">
              Send
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactModal;
