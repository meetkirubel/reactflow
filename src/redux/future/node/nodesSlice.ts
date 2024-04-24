import { ExtractedItem, TNode, TinitialState } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TinitialState = {
  nodes: [
    {
      id: "1",
      position: { x: 0, y: 50 },
      data: { label: "Node Test" },
      type: "customNode",
    },
  ],
};

export const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {

    extractNodes: (
      state: TinitialState,
      action: PayloadAction<ExtractedItem[] | []>
    ) => {
      const old: any = state.nodes;
      const { payload } = action;
      const node = payload.map((data, id) => ({
        id: `${id + 1 + old.length}`,
        position: { x: 100, y: (id + 0.5 + old.length) * 100 },
        data: { label: data.text },
        type: "customNode",
      }));
      return { ...state, nodes: [...old, ...node] };
    },

    addNode: (state: TinitialState, action: PayloadAction<string>) => {
      const { payload } = action;
      const old = state.nodes;
      const node = {
        id: `${1 + old.length}`,
        position: { x: 400, y: Math.random() * 300 },
        data: { label: payload },
        type: "customNode",
      };
      return { nodes: [...old, node] };
    },

    copyNode: (state: TinitialState, action: PayloadAction<string>) => {
      const { payload } = action;
      const old: any = state.nodes;
      const [node] = old.filter((state: TNode) => state.id === payload);
      const nodeID = Number(node.id);
      const copy = {
        ...node,
        id: `${nodeID + 1 + old.length}`,
        position: { x: Math.random() * 300, y: Math.random() * 330 },
      };
      console.log(copy);
      return { ...state, nodes: [...old, copy] };
    },

    deleteNode: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const oldNode = state.nodes;
      const newNode = oldNode?.filter((node) => node.id !== payload);
      return { nodes: newNode };
    },
  },
});

export const { addNode, deleteNode, extractNodes, copyNode } =
  nodesSlice.actions;

export default nodesSlice.reducer;



