import './Header.css';
import gardenImg from '../assets/garden.jpg';

function Header() {
  return (
    <header className="header">
      <img src={gardenImg} alt="גינה" className="header-img" />
      <h1 className="header-title">הגינה שלי</h1>
    </header>
  );
}

export default Header;