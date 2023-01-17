import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container">
        <h1 className="text">Increment and decrement </h1>
      </div>
      <div className="wrap">
        <h2>{counter}</h2>
        <div className="flex">
          <button onClick={() => dispatch(increment(7))}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
      </div>
    </div>
  );
}

export default App;
