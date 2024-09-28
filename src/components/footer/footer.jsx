import "./footer.modular.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="src/assets/download.svg"
            alt="LogoIpsum"
          />
          <h2>LogoIpsum</h2>
        </div>
        <p className="footer-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
        <nav className="footer-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>
        </nav>
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/256/20/20673.png"
              alt="Facebook Icon"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/521/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
              alt="Instagram Icon"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
              alt="Twitter Icon"
            />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub Icon"
            />
          </a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/062/579/original/planet-earth-icon-free-png.png"
              alt="Earth Icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
