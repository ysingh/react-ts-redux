import "./App.css";
import { LoginControl, NumberList } from "./components";

const App = () => (
  <>
    <LoginControl />
    <NumberList numbers={[1, 2, 3, 4, 5, 6, 7, 8]} />
  </>
);

export default App;
