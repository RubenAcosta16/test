import { useState } from "react";

const styles = {
  background: "#000",
  display: "flex",
  flexDirection: "row",
  
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <form action="">
        <input type="number" placeholder="Numer1" />
        <input type="number" placeholder="Numer2" />
        <input type="number" placeholder="Numer3"/>
        <button>Envist</button>
      </form>
    </>
  );
}

export default App;
