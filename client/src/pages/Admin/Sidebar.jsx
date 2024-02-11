import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation()

  return (
    <>
      <div className="sidebar-wrapper">
        <nav id="sidebar">
          <ul className="list-unstyled components">
            <li>
              <Link className={location.pathname === "/dashboard" ? "menu-active" : null } to="/dashboard">
                <i className="fa fa-tachometer"></i> Dashboard
              </Link>
            </li>

            <li>
              <a
                href="#productSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className={`dropdown-toggle ${location.pathname === '/admin/products' || location.pathname === '/admin/create-product' ? "menu-active" : ""}`}

              >
                <i className="fa fa-product-hunt"></i> Products
              </a>
              <ul className="list-unstyled" id="productSubmenu">
                <li>
                  <Link className={location.pathname === "/admin/products" ? "sub-menu-active" : null } to="/admin/products">
                    <i className="fa fa-clipboard"></i> All
                  </Link>
                </li>

                <li>
                  <Link className={location.pathname === "/admin/create-product" ? "sub-menu-active" : null } to="/admin/create-product">
                    <i className="fa fa-plus"></i> Create
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className={location.pathname === "/admin/orders" ? "menu-active" : null } to="/admin/orders">
                <i className="fa fa-shopping-basket"></i> Orders
              </Link>
            </li>

            <li>
              <Link className={location.pathname === "/admin/users" ? "menu-active" : null } to="/admin/users">
                <i className="fa fa-users"></i> Users
              </Link>
            </li>

            <li>
              <Link className={location.pathname === "/admin/reviews" ? "menu-active" : null } to="/admin/reviews">
                <i className="fa fa-star"></i> Reviews
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
