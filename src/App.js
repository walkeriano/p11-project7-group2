
import './App.css';
import { Route,Routes } from "react-router-dom";
import  {SearchBar}  from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;
