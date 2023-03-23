import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";
function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();


  const increment = () => {
    dispatch(actions.incremenet());
  }

  const decrement = () => {
    dispatch(actions.decremenet());
  }

  const addBy = () => {
    dispatch(actions.addBy(10));
  }


  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>Incrment +</button>
      {/* <br /> */}
      <button onClick={decrement}>Decrment -</button>
      <button onClick={addBy}>Add</button>
    </div>
  );
}

export default App;
