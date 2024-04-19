import React, { useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { isEqual } from 'lodash'; // Assuming lodash is installed

import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { useSelectorApp } from "@/redux/store";
import { TNode, TinitialState } from "@/types/type";

const initialEdges: Edge[] = [];

const Main: React.FC = () => {
  const initialNodes: TinitialState | null = useSelectorApp(
    (state) => state.Nodes.nodes
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    console.log(initialNodes)
  const [edges, setEdges, onEdgesChenge] = useEdgesState(initialEdges);
  const onConnect = useCallback((Connection: Connection) => {
    const edge = { ...Connection, animated: true, id: uuidv4() };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  console.log(initialNodes)

  useEffect(()=>{
    setNodes(initialNodes)
   },[initialNodes])

  return (
    <main className="main overflow-y-hidden my-8 mr-20">
      <div className="container border h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChenge}
          onConnect={onConnect}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </main>
  );
};

export default Main;
