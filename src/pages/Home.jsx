import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center">
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Discover amazing products and deals!</p>
      <Link to="/signin" className="btn btn-primary m-2">Sign In</Link>
      <Link to="/signup" className="btn btn-success m-2">Sign Up</Link>
    </div>
  );
}

export default Home;
