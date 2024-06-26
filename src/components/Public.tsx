import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Abhinav S. Tech!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Mohali City, Abhinav S. Tech provides a
          trained staff ready to meet your tech requirements.
        </p>
        <address className="public__addr">
          Abhinav S. Tech
          <br />
          Sector 58
          <br />
          Mohali City
          <br />
          <a href="tel:+91973780798">(+91) 99737-80798</a>
        </address>
        <br />
        <p>Owner: Abhinav Sinha</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
