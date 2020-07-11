import FileNode from './FileNode'

let root = null;
let selectedNode = null;

export const initilizeNode = () => {
    root = new FileNode("folder", "root", null, null); 
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
