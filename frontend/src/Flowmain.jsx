import React from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode"; // Adjust the import path as needed
import "./Flowmain.css";
const initialNodes = [
  {
    id: "1",
    type: "customNode",
    position: { x: 100, y: 50 },
    data: { label: "Add Lead Source", description: "Click to add leads from List or CRM." }
  },
  { id: "2", position: { x: 100, y: 150 }, data: { label: "2" } }
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const nodeTypes = {
  customNode: CustomNode,
};

export default function Flowmain() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="m-auto pt-3 pb-3"
      style={{
        width: `95%`,
        height: `80vh`,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        style={{ width: "100%", height: "100%", backgroundColor: "#f0f0f0" }}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={16} size={0.5} />
      </ReactFlow>
    </div>
  );
}
