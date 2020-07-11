class FileNode {
    constructor(type, title, parent, children) {
        this.type = type;
        this.title = title;
        this.children = children;
        this.parent = parent;
    }
}

export default FileNode;