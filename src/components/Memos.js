import Memo from "./Memo";

const Memos = ({ memos, onDelete }) => {
  return (
    <>
      {memos.map((memo) => (
        <Memo key={memo.id} memo={memo} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Memos;
