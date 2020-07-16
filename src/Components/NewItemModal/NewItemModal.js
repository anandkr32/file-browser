import  React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {NODE_TYPE} from "../../Utils";
import Button from '.././Button';


const NewItemModal = (props) => {
  const [title, setTitle] = useState("");
  const {nodeType, show, closeModal, proceed} = props;
  const header = nodeType === NODE_TYPE.FILE ? 'Enter new file name' : 'Enter new folder name';

  const setStateTitle = (str) => {
    setTitle(str);
  }

  return (
    <Modal show={show}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Body>
          <input type="text" value={title}  onChange={(event) => setStateTitle(event.target.value)}/>
      </Modal.Body>
      <Modal.Footer>
          <Button title="Cancel" onClick={closeModal}/>
          <Button title="Save" isDisabled={!title} onClick={() => proceed(title)}/>
      </Modal.Footer>
    </Modal>
  );
};

export default NewItemModal;
