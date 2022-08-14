import AddEntry from "./components/AddEntry";
import Table from "./components/Table";
import "./scss/App.scss";

export const App = () => {
  return (
    <div className="app">
      <AddEntry />
      <Table />
    </div>
  );
};
