import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Search from "../../../utils/Search";
import { useSelector } from "react-redux";

const Header = () => {
  const { user, loader } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);


  return (
    <>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to={"/"}>
              <img src={logo} />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to={"/cart"} className="text-decoration-none">
            <span id="cart">Cart</span>
            <span className="ml-2 mr-3" id="cart_count">
              {cartItems?.length}
            </span>
          </Link>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                <Link className="dropdown-item" to="/my-orders">
                  Orders
                </Link>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                <Link to="/logout" className="dropdown-item text-danger">
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loader && (
              <Link to="/login" className="btn ml-4" id="login_btn">
                Login
              </Link>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
