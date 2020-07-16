import * as React from 'react'
import "./style.css";
import { getSelectedNode, isEmptyArray } from "../../Utils";


const renderNoFile = () => (
    <div className="no-files-class">
        No Files/Folders Yet
    </div>
)

const renderFileNavigation = () => {
    const selectedNode = getSelectedNode();
    return (
        <div>
            {selectedNode.children.map(node => {
                const {title} = node;
                return (
                    <div>
                        {title.name}
                    </div>
                )
            })}
        </div>
    )
}

const FileExplorer = (props) => {
    const selectedNode = getSelectedNode();
    const isEmpty = !selectedNode || isEmptyArray(selectedNode.children);
    return (
        <div>
            { isEmpty 
            ? renderNoFile()
            : renderFileNavigation()
            }
            
        </div>
    )
}

export default FileExplorer;