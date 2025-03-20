import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="container">
      <h2>Sign In</h2>
      <form>
        <div className="mb-3 text-start">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Signin;
