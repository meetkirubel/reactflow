import { useSelectorApp } from "@/redux/store";
import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { v4 as uuidv4 } from "uuid";
import AddSingelNode from "./AddSingelNode";
import CustomNode from "./CustomNode";

const initialEdges: Edge[] = [];

const Main = () => {
  const nodeTypes = {
    customNode: CustomNode,
  };
  const initialNodes = useSelectorApp((state) => state.Nodes.nodes);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChenge] = useEdgesState(initialEdges);

  const onConnect = useCallback((Connection: Connection) => {
    const edge = { ...Connection, animated: true, id: uuidv4() };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);


  useEffect(() => {
    setNodes(initialNodes);
  }, [initialNodes]);

  return (
    <main className="h-full min-h-screen">
      <AddSingelNode/>
      <div className="border h-full w-[96%]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChenge}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </main>
  );
};

export default Main;
