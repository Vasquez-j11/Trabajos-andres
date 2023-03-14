
import './App.css';
import Card from './componentes/Card';
import Card2 from './componentes/Card2';
function App() {
  return (
    <div className="App">
      <Card2 
      img1="hero"
      text1=" You can now listen to millions of songs, audiobooks, and podcasts on any 
      device anywhere you like!"
      img2="icon"
      text2="Annual Plan"
      text3="$59.99/year"
      xxd="Change"
      />
      <Card
        nombre="Juamanueli"
        cargo="El Diavlo"
        comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, excepturi numquam sapiente eveniet modi rem!"
        imagen="zy3"
      />
      <Card
        nombre="EL more"
        cargo="Nengronsis"
        comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, excepturi numquam sapiente eveniet modi rem!"
        imagen="zy2"
      /> 
    </div>
  );
}

export default App;
