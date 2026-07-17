import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <nav>
    //   <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>

    //     <li>
    //       <Link to="/projects">Projects</Link>
    //     </li>

    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
          <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    
  );
}

export default Navbar;