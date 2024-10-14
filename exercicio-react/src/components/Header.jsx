function Header(props) {
  return (
    <>
      <div className={`${props.className}`}>
        <nav>
          <a href="">Home</a>
          <a href="">Quem Somos</a>
          <a href="">Instrumentos</a>
          <a href="">Endereço</a>
          <a href="">Contato</a>
        </nav>
      </div>
    </>
  );
}

export default Header;