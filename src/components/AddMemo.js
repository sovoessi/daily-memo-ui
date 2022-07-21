import { useState } from "react";

const AddMemo = ({ onAdd }) => {
  const [date, setDate] = useState("");
  const [tags, setTags] = useState("");
  const [path, setPath] = useState("");
  const [comments, setComments] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!date || !tags) return;
    onAdd({ date, tags, path, comments });

    setDate("");
    setTags("");
    setPath("");
    setComments("");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <form className='add-form' onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          name='date'
          id='date'
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className='form-control'>
        <label htmlFor='tags'>Tags</label>
        <input
          type='text'
          name='tags'
          id='tags'
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />
      </div>
      <div className='form-control'>
        <label htmlFor='path'>Path</label>
        <input
          type='text'
          name='path'
          id='path'
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='comments'>Comments</label>
        <input
          type='text'
          name='comments'
          id='comments'
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <input type='submit' value='Save Memo' className='btn btn-block' />
    </form>
  );
};

export default AddMemo;
