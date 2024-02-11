import "../../../src/index.css";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MetaData from "../../../utils/MetaData";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsByAdmin,
  updateProductByAdmin,
} from "../../features/productsList/productsListApiSlice";
import AlertMessage from "../../../utils/AlertMessage";
import { setMessageEmpty } from "../../features/productsList/productsListSlice";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const params = useParams();

  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];

  const { error, loader, products, message } = useSelector(
    (state) => state.productsList
  );

  const [previewImage, setPreviewImage] = useState([]);
  const [previewOldImage, setPreviewOldImage] = useState([]);

  useEffect(() => {
    dispatch(getAllProductsByAdmin());
  }, [dispatch]);

  // filter solo product
  const [product, setProduct] = useState({});

  useEffect(() => {
    const singleProductDetails = products.find(
      (data) => data._id === params.id
    );
    setProduct(singleProductDetails);

    let productImg = [];
    singleProductDetails?.images?.map((item) => productImg.push(item.url));
    setPreviewOldImage(productImg);
  }, [params, products]);

  // init data of product
  const [input, setInput] = useState({
    name: "",
    price: "",
    description: "",
    seller: "",
    category: "",
    stock: "",
  });

  // getting form values
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // product images
  const [photo, setPhoto] = useState();

  const handlePhotos = (e) => {
    const files = e.target.files;

    // upload
    setPhoto([...files]);

    // preview
    if (files && files.length > 0) {
      let newImagePreview = [];
      Array.from(files).forEach((file) => {
        newImagePreview.push(URL.createObjectURL(file));
      });
      setPreviewImage(newImagePreview);
    }
  };

  // remove images
  const handleRemoveImg = (index) => {
    // upload
    const newPhotos = [...photo];
    newPhotos.splice(index, 1);
    setPhoto(newPhotos);

    // preview
    const newPreviewImg = [...previewImage];
    newPreviewImg.splice(index, 1);
    setPreviewImage(newPreviewImg);
  };

  // update product
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form_data = new FormData();

    form_data.append("name", input.name);
    form_data.append("price", input.price);
    form_data.append("description", input.description);
    form_data.append("seller", input.seller);
    form_data.append("category", input.category);
    form_data.append("stock", input.stock);

    photo?.forEach((item) => {
      form_data.append("products-photo", item);
    });

    dispatch(updateProductByAdmin({ id: params.id, data: form_data }));
  };

  useEffect(() => {
    if (error) {
      AlertMessage({ type: "error", msg: error });
      dispatch(setMessageEmpty());
    }

    if (message) {
      AlertMessage({ type: "success", msg: message });
      dispatch(setMessageEmpty());
      navigate('/admin/products')
      setPhoto([]);
      setPreviewImage([]);
    }
  }, [dispatch, error, message, navigate]);

  // show previous data of product
  useEffect(() => {
    setInput({
      ...product,
    });
  }, [product]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <MetaData title={"Update Product"} />
        <div className="container">
          <div className="wrapper my-5">
            <form
              onSubmit={handleUpdateProduct}
              className="shadow-lg"
              encType="multipart/form-data"
            >
              <h1 className="mb-4">Update Product</h1>
              <div className="form-group">
                <label htmlFor="name_field">Name</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price_field">Price</label>
                <input
                  type="text"
                  id="price_field"
                  className="form-control"
                  name="price"
                  value={input.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description_field">Description</label>
                <textarea
                  className="form-control"
                  id="description_field"
                  rows={8}
                  name="description"
                  value={input.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category_field">Category</label>
                <select
                  name="category"
                  value={input.category}
                  onChange={handleInputChange}
                  className="form-control"
                  id="category_field"
                >
                  <option>-Select a category-</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="stock_field">Stock</label>
                <input
                  name="stock"
                  type="number"
                  id="stock_field"
                  className="form-control"
                  value={input.stock}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="seller_field">Seller Name</label>
                <input
                  name="seller"
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value={input.seller}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Images</label>
                <div className="custom-file">
                  <input
                    type="file"
                    onChange={handlePhotos}
                    className="custom-file-input"
                    id="customFile"
                    multiple
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Images
                  </label>
                </div>{" "}
              </div>
              {previewImage.length > 0 && (
                <>
                  <b>New Images</b>
                  <div className="image-container">
                    <div className="img-area">
                      {previewImage?.map((img, index) => (
                        <div className="item-img" key={index}>
                          <img src={img} alt="" />
                          <div
                            onClick={() => handleRemoveImg(index)}
                            className="cross-btn"
                          >
                            <span>
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <b>Old Images</b>
              <div className="image-container">
                <div className="img-area">
                  {previewOldImage?.map((img, index) => (
                    <div className="item-img shadow-sm" key={index}>
                      <img src={img} alt="" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-danger text-center">
                <h6>New Images will be replace old images</h6>
              </div>

              <button
                id="login_button"
                type="submit"
                className="btn btn-block py-3"
                disabled={loader ? true : false}
              >
                {loader ? "UPDATING . . ." : "UPDATE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
