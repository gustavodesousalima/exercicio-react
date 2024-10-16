import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <div className={`${props.className}`}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/quem-somos">Quem Somos</Link>
          <Link to="/instrumentos">Instrumentos</Link>
          <Link to="/endereco">Endereço</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;