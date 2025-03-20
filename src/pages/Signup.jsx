import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter full name" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Create password" />
        </div>
        <button type="submit" className="btn btn-success">Sign Up</button>
      </form>
      <p className="mt-3 text-center">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
}

export default Signup;
