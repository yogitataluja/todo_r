import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";
import ClipLoader from "react-spinners/ClipLoader";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Footer";
function Editproducts(props) {
  const { token } = isAutheticated();
  // const [data, setdata] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [featuredImage, setfeaturedImage] = useState("");
  const [image, setImage] = useState([]);
  const [tax, setTax] = useState([]);
  const { productId } = useParams();
  const [state, setstate] = useState({
    title: "",
    tax: "",
    description: "",
    category: "",
    status: "",
    image: [],
    featuredImage:null,
    price: "",
    sale_price: "",
    sku: "",
    quantity: "",
    continue_selling: false,
    track_quantity: null,
  });

  useEffect(() => {

    async function fetchData() {
      let res = await axios.get(`${API}/api/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.length > 0) {
        setCategories(res.data);
      }
    }
    async function fetchTax() {
      let res = await axios.get(`${API}/api/tax/view_tax`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.tax.length > 0) {
        setTax(res.data.tax);
      }
    }
    fetchProductDetails();
    fetchData();
    fetchTax();
  }, []);
  async function fetchProductDetails() {
    let product = await axios.get(`${API}/api/product/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(product.data.product);
     setImage(product.data.product.image);
     setfeaturedImage(product.data.product.featured.image);
    setstate({
      title: product.data.product.title,
      description: product.data.product.description,
      price: product.data.product.price,
      sale_price: product.data.product.sale_price,
      sku: product.data.product.sku,
      quantity: product.data.product.quantity,
      status: product.data.product.status,
      category: product.data.product.category,
      continue_selling: product.data.product.continue_selling,
      track_quantity: product.data.product.track_quantity,
      image:product.data.product.image,
      featuredImage:product.data.product.featured.image,
      tax:product.data.product.tax.name
    });
  }

  const onCancel = (e) => {
    window.location = "/comproducts";
  };

  const handleSubmit = async () => {
    // const formdata = new FormData();
    // setLoading(true);
    // formdata.append("title", state.title);
    // formdata.append("description", state.description);
    // // formdata.append("category", state.category);
    // formdata.append("tax", state.tax);
    // formdata.append("status", state.status);
    // formdata.append("image", state.image);
    // formdata.append("price", state.price);
    // formdata.append("sale_price", state.sale_price);
    // formdata.append("sku", state.sku);
    // formdata.append("quantity", state.quantity);
    // formdata.append("continue_selling", state.continue_selling);
    // formdata.append("track_quantity", state.track_quantity);
    // console.log(formdata)
    let res = await axios.put(
      `${API}/api/product/${props.match.params.productId}`,
      state,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    if (res) {
      window.location = "/comproducts";
    }
    setLoading(false);
  };
  // useEffect(async () => {
  //   let res = await axios.get(
  //     `${API}/api/product/${props.match.params.productId}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   console.log(res);
  //   setstate({
  //     title: res.data?.data?.title,
  //     description: res.data?.data?.description,
  //     image: res.data?.data?.image,
  //     price: res.data?.data?.price,
  //     sale_price: res.data?.data?.sale_price,
  //     sku: res.data?.data?.sku,
  //     quantity: res.data?.data?.quantity,
  //     track_quantity: res.data?.data?.track_quantity,
  //     continue_selling: res.data?.data?.continue_selling,
  //     tax: res.data?.data?.tax,
  //   });
  // }, []);
  const onFileChange = (e) => {
    setstate({
      ...state,
      image: e.target.files[0],
    });
  };

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeCheckBox = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };
  function handleFeaturedImage(e) {
    setstate({...state,featuredImage:e.target.files[0]});
  }
  function handleProductImages(e) {
setImage(e.target.files)
  }
  console.log(state.image);
  const handleImageDelete=async(url)=>{
    let res = await axios.delete(
      `${API}/api/product/deleteImage/${props.match.params.productId}?url=${url}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchProductDetails()

  }
  const handleFeaturedImageDelete=async()=>{
    let res = await axios.delete(
      `${API}/api/product/deleteFeaturedImage/${props.match.params.productId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchProductDetails()


  }
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- start page title --> */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0">Edit Product</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Potions of Paradise</Link>
                    </li>
                    <li className="breadcrumb-item active">Commerce</li>
                    <li className="breadcrumb-item active">Edit Product</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end page title --> */}

          {/* <!-- Save options Begins--> */}
          <div className="row">
            <div className="col-12">
              <div className="form-group text-right">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-success btn-login waves-effect waves-light mr-3"
                >
                  <ClipLoader loading={loading} size={18} />
                  {!loading && "Save"}
                </button>
                {/* <Link to="/comproducts"> */}
                <button
                  type="button"
                  onClick={onCancel}
                  className="btn btn-success btn-cancel waves-effect waves-light mr-3"
                >
                  Cancel
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          {/* <!-- Save options Ends-->             */}

          {/* <!-- Row 1 Begins -->                */}
          <div className="row">
            {/* <!--Left Column Begins--> */}
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Title
                              </label>
                              <input
                                name="title"
                                onChange={handleChange}
                                type="text"
                                value={state.title}
                                className="form-control input-field"
                                placeholder="Title"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group mb-30 width-100 row">
                            <label className="col-md-4 control-label">
                              Description
                            </label>
                            <div className="col-md-13">
                              <textarea
                                onChange={handleChange}
                                value={state.description}
                                name="description"
                                className="form-control input-field"
                                rows="5"
                                placeholder="Add description"
                              ></textarea>
                            </div>
                          </div>
                          {/* <div className="col-lg-12">
														<div className="form-group">
															<label for="basicpill-phoneno-input" className="label-100">
																Description
															</label>
															<div id="summernote-editor" className="summernote">Product description</div>
														</div>
													</div> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Left Column Ends --> */}

            {/* <!--Right Column Begins --> */}
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Select Tax*
                              </label>
                              <select
                                name="tax"
                                value={state.tax}
                                onChange={(e) =>
                                  setstate({ ...state, tax: e.target.value })
                                }
                                className="form-control  input-field"
                              >
                                <option value="">--select--</option>
                                {tax &&
                                  tax?.map((item) => (
                                    <>
                                      {console.log(tax)}
                                      <option value={item._id}>
                                        {item.name}&nbsp;{item.tax}%
                                      </option>
                                    </>
                                  ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Select Category
                              </label>
                              <select
                                name="category"
                                value={state.category}
                                onChange={handleChange}
                                className="form-control  input-field"
                              >
                                <option value="">--select--</option>
                                {Categories?.map((item) => (
                                  <>
                                    <option>{item.category}</option>
                                  </>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Status
                              </label>
                              <select
                                name="status"
                                value={state.status ? "Active" : "Inactive"}
                                onChange={handleChange}
                                className="form-control  input-field"
                              >
                                <option value="">--select--</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Right Column Ends --> */}
          </div>
          {/* <!-- Row 1 Ends -->           */}

          {/* <!-- Row 2 Begins -->                */}
          <div className="row">
            {/* <!--Left Column Begins--> */}
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Upload Featured Product Image*
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mb-30 width-100 row">
                              <label className="col-md-4 control-label">
                                Upload One Image Only
                                <br />
                                <span className="size">(320 x 180 px)</span>
                              </label>
                              <div className="col-md-8">
                                <input
                                  accept="image/*"
                                  type="file"
                                  className="form-control input-field"
                                  onChange={(e) => handleFeaturedImage(e)}
                                />
                                <div>
                                  <div>
                                    {state.featuredImage!=null &&
                                    <>
                                    <img
                                      src={state.featuredImage}
                                      className="w-50 mt-3"
                                    />
                                    <div className="btn btn-danger ml-5"  onClick={()=>handleFeaturedImageDelete(state.featuredImage)}>
                                      Delete
                                    </div>
                                    </>
}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Upload Product Images*
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mb-30 width-100 row">
                              <label className="col-md-4 control-label">
                                Upload Upto 9 Images
                                <br />
                                <span className="size">(320 x 180 px)</span>
                              </label>
                              <div className="col-md-8">
                                <input
                                  type="file"
                                  multiple
                                  accept="image/*"
                                  className="form-control input-field"
                                  onChange={(e) => handleProductImages(e)}
                                />
                                {image.map((img, index) => {
                                  return (
                                    <div>
                                      <img
                                        key={index}
                                        src={img}
                                        className="w-25 mt-3        "
                                      />
                                      <div className="btn btn-danger" onClick={()=>handleImageDelete(img)}>
                                        Delete
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Left Column Ends --> */}
          </div>
          {/* <!-- Row 2 Ends -->  */}

          {/* <!-- Row 3 Begins -->                */}
          <div className="row">
            {/* <!--Left Column Begins--> */}
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <form>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Price
                              </label>
                              <input
                                type="text"
                                value={state.price}
                                name="price"
                                onChange={handleChange}
                                className="form-control input-field"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Sale Price
                              </label>
                              <input
                                name="sale_price"
                                value={state.sale_price}
                                onChange={handleChange}
                                type="text"
                                className="form-control input-field"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Left Column Ends --> */}
          </div>
          {/* <!-- Row 3 Ends -->  */}

          {/* <!-- Row 4 Begins -->                */}
          <div className="row">
            {/* <!--Left Column Begins--> */}
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <form>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                SKU
                              </label>
                              <input
                                name="sku"
                                value={state.sku}
                                onChange={handleChange}
                                type="text"
                                className="form-control input-field"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="custom-control custom-checkbox mb-2">
                              {state.track_quantity ? (
                                <input
                                  name="track_quantity"
                                  value={state.track_quantity}
                                  onChange={handleChangeCheckBox}
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="genre1"
                                  checked
                                />
                              ) : (
                                <input
                                  name="track_quantity"
                                  value={state.track_quantity}
                                  onChange={handleChangeCheckBox}
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="genre1"
                                />
                              )}

                              <label
                                className="custom-control-label"
                                for="genre1"
                              >
                                Track Quantity
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="custom-control custom-checkbox mb-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="genre1"
                              />
                              <label
                                className="custom-control-label"
                                for="genre1"
                              >
                                Continue sellng when out of stock
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                Quantity Available
                              </label>
                              <input
                                name="quantity"
                                value={state.quantity}
                                onChange={handleChange}
                                type="text"
                                className="form-control input-field"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Left Column Ends --> */}
          </div>
          {/* <!-- Row 4 Ends -->  */}
        </div>
        {/* <!-- container-fluid --> */}
      </div>
      {/* <!-- End Page-content --> */}

      {/* <footer className="footer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<script>document.write(new Date().getFullYear())</script> © TellyTell.
						</div>

					</div>
				</div>
			</footer> */}
      <Footer />
    </div>
  );
}

export default Editproducts;
