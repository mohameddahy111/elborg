import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [name, setName] = useState("");
  const [exp, setExp] = useState("");
  const [noWork, setNoWork] = useState("");
  const [cards, setCardes] = useState(
    localStorage.list ? JSON.parse(localStorage.list) : []
  );
  const mid = {
    name,
    exp,
    noWork,
  };
  const handilSubmit = () => {
    const list = [...cards];
    list.push({ ...mid });
    localStorage.setItem("list", JSON.stringify(list));
    setCardes(list);
  };
  const deleteItem = (e) => {
    const list = cards.filter(x => x.name !== e)
    localStorage.setItem("list", JSON.stringify(list));
    setCardes(list);

  }
  const printPage=()=>{
    window.print()
  }
  return (
    <div className="app">
      <button onClick={()=>printPage()}>
        print
      </button>
      <form className="input" onSubmit={() => handilSubmit()}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">exp</label>
          <input
            type="text"
            name="exp"
            onChange={(e) => setExp(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="no">NO.work</label>
          <input
            type="text"
            name="no"
            onChange={(e) => setNoWork(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="list ">
        {cards.map((x, index) => (
          <Card data={x}  key={index} deleteItem={deleteItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
