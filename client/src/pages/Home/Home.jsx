import { useEffect, useState } from "react";
import MetaData from "../../../utils/MetaData";
import { getAllProducts } from "../../features/products/productApiSlice";
import { useDispatch, useSelector } from "react-redux";
import MainLoader from "../../../utils/MainLoader";
import AlertMessage from "../../../utils/AlertMessage";
import { setMessageEmpty } from "../../features/products/productSlice";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import Ratings from "../../components/Ratings/Ratings";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loader, message, error, resPerPage, productCount } =
    useSelector((state) => state.product);


  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(0)

  const setCurrentPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllProducts({currentPage, pageSize}));
  }, [currentPage, dispatch, pageSize]);

  useEffect(() => {
    if (message) {
      AlertMessage({ type: "success", msg: message });
      dispatch(setMessageEmpty());
    }

    if (error) {
      AlertMessage({ type: "error", msg: error });
      dispatch(setMessageEmpty());
    }
  }, [dispatch, error, message]);

  return (
    <>
      <MetaData title={"Buy best products shop online"} />
      <section id="products" className="container">
        <h3 id="products_heading">Latest Products</h3>
        {loader ? (
          <MainLoader />
        ) : (
          <div className="row">
            {products &&
              products.map((item, index) => {
                return (
                  <div key={index} className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                      <img
                        style={{
                          objectFit: "cover",
                          objectPosition: "top center",
                        }}
                        className="card-img-top mx-auto"
                        src={item?.images[0]?.url}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                          <Link to={`product/${item._id}`}>{item.name}</Link>
                        </h5>
                        <div className="d-flex align-items-center mt-auto">
                          <Ratings value={item.ratings} size="small" />
                          <span id="no_of_reviews">
                            ({item.numOfReviews} Reviews)
                          </span>
                        </div>
                        <p className="card-text">${item.price}</p>
                        <Link
                          to={`product/${item._id}`}
                          id="view_btn"
                          className="btn btn-block"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </section>

      {productCount >= resPerPage && (
        <div className="d-flex justify-content-center my-5">
          <Pagination
            prevPageText={"Previous"}
            nextPageText={"Next"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
            activePage={currentPage}
            itemsCountPerPage={resPerPage}
            totalItemsCount={productCount}
            onChange={setCurrentPageNumber}
          />
        </div>
      )}
    </>
  );
};

export default Home;
