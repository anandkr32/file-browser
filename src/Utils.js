import FileNode from './FileNode'

export const NODE_TYPE = {
    FILE: "FILE",
    FOLDER: "FOLDER"
}

let root = null;
let selectedNode = null;

export const initilizeNode = () => {
    root = new FileNode(NODE_TYPE.FOLDER, "root", null, []); 
    selectedNode = root;
}

export const getRootNode = () => {
    return root;
}

export const setSeletedNode = (node) => {
    selectedNode = node;
}

export const getSelectedNode = () => {
    return selectedNode;
}

export const addNewNode = (title, nodeType) => {
    const newNode = new FileNode(nodeType, title, selectedNode, []);
    if(selectedNode && selectedNode.children) {
        selectedNode.children.push(newNode);
    }
    console.log(selectedNode);
}


export const isEmptyArray = (arr) => {
    return !arr || !Array.isArray(arr) || arr.length <= 0
}