import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./App.css";

function App() {

  const [list, setList] = useState([
    { id: 1, sname: "Vinoth", fee: true },
    { id: 2, sname: "Shiva", fee: false },
    { id: 3, sname: "Harish", fee: true },
    { id: 4, sname: "Sripri", fee: false },
    { id: 5, sname: "Lya", fee: false },
    { id: 6, sname: "Mya", fee: true },
    { id: 7, sname: "xya", fee: true },
    { id: 8, sname: "tyaha", fee: true },
    { id: 9, sname: "kaha", fee: true },
  ]);

  const handleDelete = (id) => {
    const newList = list.filter((ls) => ls.id !== id);
    setList(newList);
  };

  const handleCheck = (id) => {
    const newList = list.map((ls) =>
      ls.id === id ? { ...ls, fee: !ls.fee } : ls
    );
    setList(newList);
  };

  return (
    <>
      <Header title="Students List" dep="CSE" year={2025} />

      <Body 
        list={list}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer count={list.length} />
    </>
  );
}

export default App;
  