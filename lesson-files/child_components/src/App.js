import Alert from "./components/AlertWindow";
import List from "./components/List";
import AnotherList from "./components/AnotherList";

function App() {
  return (
    <div className="App">
      <Alert>
        <p>Paragraph 1</p>
        <hr />
        <p className="mb-0">Paragraph 2</p>
      </Alert>

        <hr/>

        <List items={[10, 20, 30, 40, 50]}/>

        <hr/>

        <AnotherList items={[10, 20, 30, 40, 50]} />
    </div>
  );
}

export default App;
