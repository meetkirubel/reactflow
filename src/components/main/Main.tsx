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
const nodeTypes = {
  customNode: CustomNode,
 };
const initialEdges: Edge[] = [];

const Main = () => {

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

  
  
  const regex = /((\+1)[ - ]?)?(\d{3})[ - ]?(\d{3})[ - ]?(\d{4})/g;

  const phoneNumber = "+1 222-333-4444";
  const match = regex.test(phoneNumber);
  
  if (match) {
    console.log("Valid phone number format");
  } else {
    console.log("Invalid phone number format");
  }




  return (
    <main className="min-h-screen">
      <AddSingelNode/>
      <div className="border h-[100vh] w-[100%] ">
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

