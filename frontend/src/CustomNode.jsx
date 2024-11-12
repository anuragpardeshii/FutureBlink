import React from "react";

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
        <div>
        <button className="custom-node-add-btn">+</button>
        </div>
      <div className="custom-node-header">
        <span className="custom-node-title">{data.label}</span>
      </div>
      <div className="custom-node-body">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default CustomNode;
