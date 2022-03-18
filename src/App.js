import "./App.css";
import Header from "./Component/Header";
import Balance from "./Component/Balance";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance/>
      </div>
    </div>
  );
}

export default App;
