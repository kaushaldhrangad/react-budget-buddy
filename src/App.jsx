import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Total from "./components/Total";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { AppProvider } from "./context/AppContext";

function App() {

  return (
    <AppProvider>
      <div className="container">
        <h1  className="mb-11 text-3xl font-bold ">Welcome to Budget Buddy!!</h1>
        <div className="flex justify-center mb-10">
          <Budget />
          <Remaining />
          <Total />
        </div>
        <div className="my-5">
          <ExpenseForm />
        </div>
        <div>
          <ExpenseList />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
