import axios from 'axios';
import TreeNodeResponse from "../models/TreeNodeResponse";

export class NodeService {
    getTreeNodes() {
        return axios.get<TreeNodeResponse>('assets/demo/data/treenodes.json')
            .then(res => res.data.root);
    }

	getTreeTableNodes() {
		return axios.get<TreeNodeResponse>('assets/demo/data/treetablenodes.json')
			.then(res => res.data.root);
	}
}
