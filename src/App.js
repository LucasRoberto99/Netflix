import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import data from "./data.json";

function App() {
  return (
    <>
      <Header />
      <Content tab={data} />
    </>
  );
}

export default App;
