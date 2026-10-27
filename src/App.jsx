import Header from './components/Header';
import Flower from './components/Flower';

const flowers = [
  { id: 1, name: 'חמנייה', petalColor: 'gold', centerColor: 'saddlebrown' },
  { id: 2, name: 'ורד', petalColor: 'red', centerColor: 'yellow' },
  { id: 3, name: 'סחלב', petalColor: 'violet', centerColor: 'purple' },
  { id: 4, name: 'נורית', petalColor: 'orange', centerColor: 'black' },
];

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        {flowers.map((flower) => (
          <Flower
            key={flower.id}
            name={flower.name}
            petalColor={flower.petalColor}
            centerColor={flower.centerColor}
          />
        ))}
      </main>
    </div>
  );
}

export default App;