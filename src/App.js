import "./App.css";
import NewRowForm from "./components/RowForm";
import RowTable from "./components/RowTable";
import RowContextProvider from "./contexts/RowContext";

function App() {
  return (
    <div className="App">
      <RowContextProvider>
        <div>
          <NewRowForm />
          <RowTable />
        </div>
      </RowContextProvider>
    </div>
  );
}

export default App;
