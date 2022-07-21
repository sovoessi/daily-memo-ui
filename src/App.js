import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AddMemo from "./components/AddMemo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";

import Memos from "./components/Memos";

function App() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const getMemos = async () => {
      const memosFromServer = await fetchMemos();
      setMemos(memosFromServer);
    };
    getMemos();
  }, []);

  // Fetch Memos from server
  const fetchMemos = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}`);
    const data = await res.json();
    return data;
  };

  // Fetch Memos from server
  // const fetchMemo = async (id) => {
  //   const res = await fetch(`REACT_APP_API_URL/${id}`);
  //   const data = await res.json();
  //   return data;
  // };

  // Create memo
  const addMemo = async (memo) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memo),
    });

    const data = await res.json();
    setMemos([data, ...memos]);
    // console.log(memo);
    // const id = Math.floor(Math.random() *1000) + 1;
    // const newMemo = { id, ...memo}
    // setMemos((prevMemo) => {
    //   return [newMemo, ...prevMemo];
    // });
  };

  // Delete memo
  const deleteMemo = (id) => {
    setMemos(memos.filter((mem) => mem.id !== id));
  };

  return (
    <Router>
      <div className='container'>
        <Header />
        <AddMemo onAdd={addMemo} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {memos.length > 0 ? (
                  <Memos memos={memos} onDelete={deleteMemo} />
                ) : (
                  "No memos available"
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
