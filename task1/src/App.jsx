import { useRef, useState, useEffect } from "react";
import Squeres from "./Components/Squeres";
import Select from "./Components/Select";
import "./App.scss";

function App() {
  const [mapSqueres, setMapSqueres] = useState(null);
  const squereRef = useRef([]);
  const [steps, setSteps] = useState([])

  const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const squereArray = (array) => {
    for (let i = 0; i < rand(5, 10); i++) {
      array.push(rand(1, 9));
    }
    return array;
  };

  useEffect(() => {
    const squeres = JSON.parse(localStorage.getItem("squeres"));
    if(squeres){
      squereRef.current = squeres
      setMapSqueres(squeres);
    }
  }, []);
  
  const handleClickAdd = () => {
    let array = [];
    squereArray(array);
    squereRef.current = [...squereRef.current, array];
    setMapSqueres(squereRef.current);
    localStorage.setItem("squeres", JSON.stringify(squereRef.current));
setSteps([...steps, squereRef.current])
  };

  const handleClickReset = () => {
    squereRef.current = [];
    setMapSqueres(squereRef.current);
    localStorage.setItem("squeres", JSON.stringify(squereRef.current));
    setSteps([...steps, squereRef.current])
  }

  const handleClickBack = () => {
    squereRef.current = squereRef.current.slice(0, -1)
    setMapSqueres(squereRef.current)
    setSteps([...steps, squereRef.current])
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* {console.log(steps, squereRef.current, mapSqueres)} */}
        <Squeres  mapSqueres={mapSqueres}/>
        <div className="buttons">
          <button onClick={handleClickAdd}>Add</button>
          <button onClick={handleClickReset}>Reset</button>
          <button onClick={handleClickBack}>Back</button>
          <Select steps={steps} setMapSqueres={setMapSqueres}/>
        </div>
      </header>
    </div>
  );
}

export default App;
