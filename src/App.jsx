import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  return (
    <>
      <div>
        <Logo />
        <Form list={list} setList={setList} />
        <PackingList list={list} setList={setList} />
        <Footer list={list} />
      </div>
    </>
  );
}
export default App;
