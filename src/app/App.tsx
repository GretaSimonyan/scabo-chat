import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store.ts";
import viteLogo from '/vite.svg';
import './styles/App.css';
import { decrement, increment } from '../features/counter/counterSlice';
import {Skeleton} from "../shared/ui/Skeleton";
function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <Skeleton width={600} height={24} />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
