import React, {useState} from 'react';
import './App.css';
import Button from './Components/Button';
import NewItemModal from './Components/NewItemModal';
import FileExplorer from './Components/FileExplorer';
import { NODE_TYPE, addNewNode } from "./Utils";


const App = () => {
  const [newNodeTitle, setNewNodeTitle] = useState("");
  const [newNodeType, setNewNodeType] = useState(NODE_TYPE.FILE);
  const [showModal, setShowModal] = useState(false);

  const openModal = (nodeType) => {
    setShowModal(true);
    setNewNodeType(nodeType);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const addNode = (title) => {
    addNewNode(title, newNodeType);
    setShowModal(false);
  }


  return (
    <div className="App">
      <div className="button-container">
          <Button onClick={() => {openModal(NODE_TYPE.FILE)}} title={`+ File`} />
          <Button onClick={() => {openModal(NODE_TYPE.FOLDER)}} title={`+ Folder`} />
      </div>
      <div>
        <NewItemModal
          nodeType={newNodeType}
          show={showModal}
          closeModal={closeModal}
          proceed={addNode}
        />
      </div>
      <FileExplorer/>
    </div>
  );
}

const onSave = () => {

}

export default App;
