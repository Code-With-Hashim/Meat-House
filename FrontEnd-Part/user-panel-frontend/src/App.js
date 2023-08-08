import './App.css';
import { Router } from './routes/route';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
