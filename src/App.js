import "./App.css";
import Header from "./Component/Header";
import Balance from "./Component/Balance";
import { IncomeExpenses } from "./Component/IncomeExpenses";
import { AddTransaction } from "./Component/AddTransaction";
import { TransactionList } from "./Component/TransactionList";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
