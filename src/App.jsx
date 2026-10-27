import Header from './components/Header';
import Flower from './components/Flower';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <Flower name="חמנייה" petalColor="gold" centerColor="saddlebrown" />
        <Flower name="ורד" petalColor="red" />
        <Flower name="סחלב" centerColor="purple" />
        <Flower name="נורית" />
      </main>
    </div>
  );
}

export default App;