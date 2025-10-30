import "../css/footer.css";
import "../index.css"

function Footer() {
    const date = new Date().getFullYear();
  return (
    <>
      <p className="footer">© {date} Nordindev</p>
    </>
  );
}

export default Footer;