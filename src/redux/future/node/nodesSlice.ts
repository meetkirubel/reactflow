// import { AllSongsInitialState, Error, Song} from "@/types/songsTypes";
import { ExtractedItem, TinitialState } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

// { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
// { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
// { id: "3", position: { x: 0, y: 200 }, data: { label: "Node 3" } },
const initialState: TinitialState = {
  nodes: [{ id: "1", position: { x: 0, y: 50 }, data: { label: "Node 3" } }],
  extract: false,
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
        id: `${id + 1 + old.length }`,
        position: { x: 0, y: (id + .5 + old.length) * 100 },
        data: { label: data.text },
      }));
      return { ...state, nodes: [...old,...node] };
    },
    addNodes: (
      state: TinitialState,
      action: PayloadAction<ExtractedItem[] | []>
    ) => {
      const old: any = state.nodes;
      const { payload } = action;
      const node = payload.map((data, id) => ({
        id: `${id + 1 + old.length }`,
        position: { x: 0, y: (id + .5 + old.length) * 100 },
        data: { label: data.text },
      }));
      return { ...state, nodes: [...old,...node] };
    },
    deleteNodes: (state: TinitialState, action: PayloadAction<string>) => {
      return { ...state };
    },
  },
});

export const { addNodes, deleteNodes,extractNodes } = nodesSlice.actions;

export default nodesSlice.reducer;
