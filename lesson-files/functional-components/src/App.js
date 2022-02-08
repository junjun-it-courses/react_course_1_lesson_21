import List from './components/List';
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <List items={['Alex', 'Vlad', 'Oleg', 'Ruslan']} />

      <hr/>
        <Card>
            <Card.Title>Lorem</Card.Title>
            <Card.Body>Lorem ipsum dolor sit amet.</Card.Body>
        </Card>
    </div>
  );
}

export default App;
