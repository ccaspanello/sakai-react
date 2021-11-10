import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import {TreeTable, TreeTableSelectionKeys} from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';
import {TreeSelectSelectionKeys, TreeSelectSelectionKeysType} from "primereact/treeselect";
import TreeNode from "primereact/treenode";

export const TreeDemo = () => {

    const [treeNodes, setTreeNodes] = useState<TreeNode[]>([]);
    const [selectedTreeNodeKeys, setSelectedTreeNodeKeys] = useState<TreeSelectSelectionKeysType>();
    const [treeTableNodes, setTreeTableNodes] = useState<TreeNode[]>([]);
    const [selectedTreeTableNodeKeys, setSelectedTreeTableNodeKeys] = useState<TreeTableSelectionKeys>();

    useEffect(() => {
        const nodeService = new NodeService();
        nodeService.getTreeNodes().then(data => setTreeNodes(data));
        nodeService.getTreeTableNodes().then(data => setTreeTableNodes(data));
    }, []);

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Tree</h5>
                    <Tree value={treeNodes} selectionMode="checkbox" selectionKeys={selectedTreeNodeKeys} onSelectionChange={(e) => {
                        if(e.value){
                            setSelectedTreeNodeKeys(e.value)
                        }
                    }}/>
                </div>
            </div>
            <div className="col-12">
                <div className="card">
                    <h5>TreeTable</h5>
                    <TreeTable value={treeTableNodes} header="FileSystem" selectionMode="checkbox" selectionKeys={selectedTreeTableNodeKeys} onSelectionChange={(e) => setSelectedTreeTableNodeKeys(e.value)}>
                        <Column field="name" header="Name" expander/>
                        <Column field="size" header="Size"/>
                        <Column field="type" header="Type"/>
                    </TreeTable>
                </div>
            </div>
        </div>
    )
}
