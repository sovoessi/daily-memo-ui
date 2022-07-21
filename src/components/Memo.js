import React from "react";

const Memo = ({ memo, onDelete }) => {
  return (
    <div className='memo' onDoubleClick={() => onDelete(memo.id)}>
      <h3>{memo.date}</h3>
      <p>{memo.tags}</p>
    </div>
  );
};

export default Memo;
