import Styled from './Footer.module.css';

function Footer(props) {
   return(
    <>
    <div className={Styled.Footer}>
      {props.children}
    </div>
    </>
   )
}

export default Footer;