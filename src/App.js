import Navbar from './Navbar/Navbar';
import Card from './Card/Card';
import {items} from './Data/item';

function App() {
  return (
    <div>
      <Navbar />
      <Card items={items}/>
    </div>
  );
}

export default App;
