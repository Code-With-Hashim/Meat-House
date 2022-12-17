import logo from "./logo.svg";
import "./App.css";
import { Router } from "./routes/route";
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
