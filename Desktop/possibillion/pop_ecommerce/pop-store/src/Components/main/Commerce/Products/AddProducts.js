import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

function AddProducts(props) {
  let EditorRef = useRef();

  const { token } = isAutheticated();
  const [state, setstate] = useState({
    title: "",
    description: "",
    category: "",
    subCategory: "",
    status: "",
    tax:"",
    price: "",
    sale_price: "",
    sku: "",
    quantity: "",
    continue_selling: false,
    track_quantity: false,
  });
  const [Categories, setCategories] = useState([]);
  const [Subcategories, setSubcategories] = useState([]);
  const[tax,setTax]=useState([])
  const [featuredImage, setfeaturedImage] = useState("");
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(`${API}/api/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
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
    fetchData();
    fetchTax()
  }, []);

  console.log(Categories, "categories");
  console.log(image);
  const handleSubmit = async () => {
    if (
      state.title === "" ||
      state.price === "" ||
      state.sale_price === "" ||
      state.quantity === "" ||
      state.sku === "" ||
      state.category === "" ||
      state.status === "" ||
      image.length === 0 ||
      featuredImage === ""||
      state.tax === ""
    ) {
      alert("Please fill required field ");
      return;
    }
    setLoading(true);
    const formdata = new FormData();
    if (image !== null) {
      for (const key of Object.keys(image)) {
        formdata.append("image", image[key]);
      }
    } else {
      formdata.append("image", "");
    }

    if (featuredImage !== null) {
      formdata.append("featuredImage", featuredImage);
    } else {
      formdata.append("featuredImage", "");
    }

    formdata.append("title", state.title);
    formdata.append("description", state.description);
    formdata.append("category", state.category);
    formdata.append("subCategory", state.subCategory);
    formdata.append("tax", state.tax);
    formdata.append("price", state.price);
    formdata.append("sale_price", state.sale_price);
    formdata.append("sku", state.sku);
    formdata.append("quantity", state.quantity);
    formdata.append("continue_selling", state.continue_selling);
    formdata.append("track_quantity", state.track_quantity);

    let res = await axios.post(`${API}/api/product`, formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      window.location = "/comproducts";
    }
    setLoading(false);
  };
  const onCancel = (e) => {
    window.location = "/comproducts";
  };
  const handleCategoryChange=(e)=>{
    const filtered = Categories.filter((item) => {
      return item.category === e.target.value;
    });
    console.log(filtered, "Filter");
    setSubcategories(filtered[0]?.subCategory);
     setstate({
      ...state,
      [e.target.name]: e.target.value,
    });

  }

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(state.subCategory);


    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeEditor = (e) => {
    setstate({
      ...state,
      description: e.target.innerText,
    });
  };
  const handleChangeCheckBox = (e) => {
    console.log(e.target.checked);
    setstate({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  function handleFeaturedImage(e) {
    setfeaturedImage(e.target.files[0]);
  }
  function handleProductImages(e) {
    setImage(e.target.files);
  }

  console.log(featuredImage, image);

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- start page title --> */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0">Add New Product</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Potions of Paradise</Link>
                    </li>
                    <li className="breadcrumb-item active">Commerce</li>
                    <li className="breadcrumb-item active">Add New Product</li>
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
                <button
                  onClick={onCancel}
                  type="button"
                  className="btn btn-success btn-cancel waves-effect waves-light mr-3"
                >
                  Cancel
                </button>
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
                                Title*
                              </label>
                              <input
                                type="text"
                                name="title"
                                className="form-control input-field"
                                onChange={handleChange}
                                placeholder="Title"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mb-30 width-100 row">
                              <label className="col-md-4 control-label">
                                Description(optional)
                              </label>
                              <div className="col-md-13">
                                <textarea
                                  onChange={handleChange}
                                  name="description"
                                  className="form-control input-field"
                                  rows="5"
                                  placeholder="Add description"
                                ></textarea>
                              </div>
                            </div>
                            {/* <div className="form-group">
															<label for="basicpill-phoneno-input" className="label-100">
																Description
															</label>
															<span >
																<div id="summernote-editor" onChange={handleChangeEditor} defaultValue={state.description} ref={EditorRef} className="summernote"></div>
															</span>
														</div> */}
                          </div>
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
                                onChange={(e)=>setstate({...state,tax:e.target.value})}
                                className="form-control  input-field"

                              >
                              <option value="">--select--</option>
                                {tax &&
                                  tax?.map((item) => (
                                    <>

                                      <option>{item.name}&nbsp;{item.tax}%</option>
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
                                Select Category*
                              </label>
                              <select
                                name="category"
                                value={state.category}
                                onChange={handleCategoryChange}
                                className="form-control  input-field"
                              >
                                <option value="">--select--</option>

                                {Categories &&
                                  Categories?.map((item) => (
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
                                Select Sub Category*
                              </label>
                              <select
                                name="subCategory"
                                value={state.subCategory}
                                 onChange={(e)=>setstate({...state,subCategory:e.target.value})}

                                className="form-control  input-field"
                              >
                                <option value="">--select--</option>

                                {Categories &&
                                  Subcategories?.map((item) => (
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
                                Status*
                              </label>
                              <select
                                name="status"
                                value={state.status}
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
                                Price*
                              </label>
                              <input
                                type="text"
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
                                Sale Price*
                              </label>
                              <input
                                name="sale_price"
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
                                SKU*
                              </label>
                              <input
                                name="sku"
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
                              <input
                                name="track_quantity"
                                onChange={handleChangeCheckBox}
                                type="checkbox"
                                className="custom-control-input"
                                id="genre1"
                              />
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
                                Quantity Available*
                              </label>
                              <input
                                name="quantity"
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

export default AddProducts;
