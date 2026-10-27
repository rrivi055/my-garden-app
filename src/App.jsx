import Header from './components/Header';
import Flower from './components/Flower';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <Flower name="חמנייה" petalColor="gold" centerColor="saddlebrown" />
      </main>
    </div>
  );
}

export default App;