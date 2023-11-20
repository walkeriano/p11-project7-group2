import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Menu from '../src/components/Menu/Menu';

function App() {
  return (
      <BrowserRouter>
      <Menu />
      <Router />
    </BrowserRouter>
  );
}

export default App;
