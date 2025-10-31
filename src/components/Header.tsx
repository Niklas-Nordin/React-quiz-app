import "../css/header.css"

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">React quiz</h1>
      <img
        className="react-logo"
        src="./react.svg"
        alt="React logo"
      />
    </div>
  );
}

export default Header;
