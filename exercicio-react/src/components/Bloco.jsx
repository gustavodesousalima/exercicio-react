function Bloco(props) {
  return (
    <>
      <div className={`${props.className}`}>
        {props.children}
      </div>
    </>
  );
}

export default Bloco;