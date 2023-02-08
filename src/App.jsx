import { useState } from "react";
import Home from "./components/Home";
import News from "./components/home/news/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
