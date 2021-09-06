import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";
import Footer from "../../Footer";

function Products(props) {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);
  const [statusData, setStatusData] = useState({
    status: "",
    id: "",
  });
  const [totalRes, setTotalRes] = useState(0);
  const [paginationVal, setpaginationVal] = useState(10);
  const { token } = isAutheticated();
  const pageNumbers = [];
 const[page,setPage]=useState(1)

  for (let i = 1; i <= Math.ceil(totalRes / paginationVal); i++) {
    pageNumbers.push(i);
  }
  const getProducts = async () => {
    let res = await axios.get(
      `${API}/api/product?page=${page}&limit=${paginationVal}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data)
    setData(res.data.data);
    setTotalRes(res.data.totalResults);
  };
  useEffect( () => {
    getProducts();
  }, [paginationVal,page]);

  console.log(data);
  const getPageContent = async (e) => {
    setActive(Number(e.target.value));
    setPage(e.target.value * 1);

  };
  const handleFeature=async(id)=>{
    let status = window.confirm("Do you want to Unfeature the product");
    if (!status) {
      return;
    }
    let res = await axios.put(`${API}/api/product/updateFeature/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      window.location.reload();
    }
  };
//  const setLimitval = async (e) => {
//    await setpaginationVal(Number(e.target.value));
//     // limitVal = Number(e.target.value);
//     getProducts();
//   };
  const handleDelete = async (id) => {
    let status = window.confirm("Do you want to delete");
    if (!status) {
      return;
    }
    let res = await axios.delete(`${API}/api/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      window.location.reload();
    }
  };

  const handleSuspend = async (id) => {
    let status = window.confirm("Do you want to delete");
    if (!status) {
      return;
    }
    let res = await axios.get(`${API}/api/product/setStatus/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      window.location.reload();
    }
  };

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- start page title --> */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0">Commerce - Products</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Potions of Paradise</Link>
                    </li>
                    <li className="breadcrumb-item">Commerce - Products</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end page title --> */}

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row ml-0 mr-0  mb-10">
                    <div className="col-sm-12 col-md-6">
                      <div className="dataTables_length">
                        <label className="w-100">
                          Show{" "}
                          <select
                            onChange={(e) => setpaginationVal(e.target.value)}
                            className="select-w custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>{" "}
                          entries
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="dropdown d-block">
                        <a href="/comproducts/add">
                          <button
                            type="button"
                            className="btn btn-primary add-btn waves-effect waves-light float-right"
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                            Add New Product
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive table-shoot">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>Thumbnail</th>
                          <th>Name</th>
                          <th>Stock</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.length > 0
                          ? data.map(
                            (item) =>
                              item.title && (
                                <tr key={item._id}>
                                  <td>
                                    <img
                                      src={item.image[0]}
                                      width="110"
                                      height="60"
                                    />
                                  </td>
                                  <td>{item.title}</td>
                                  <td>{item.quantity}</td>
                                  <td>{item.sale_price}</td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-12">
                                      Live
                                    </span>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm  waves-effect waves-light btn-table"
                                      onClick={() => handleSuspend(item._id)}
                                    >
                                      Suspend
                                    </button>
                                    <a href={`/comproducts/edit/${item._id}`}>
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-sm  waves-effect waves-light btn-table ml-2"
                                      >
                                        Edit
                                      </button>
                                    </a>
                                    <button
                                      type="button"
                                      onClick={() => handleDelete(item._id)}
                                      className="btn btn-danger btn-sm  waves-effect waves-light btn-table ml-2"
                                      id="sa-params"
                                    >
                                      Delete
                                    </button>

                                    <>
                                    {item.featured.status === false ?
                                      <a
                                        href={`/featuredProduct/add/${item._id}`}
                                      >
                                        <button
                                          type="button"
                                          className="btn btn-warning btn-sm  waves-effect waves-light btn-table ml-2"
                                          id="sa-params"
                                        >
                                          Feature
                                        </button>
                                      </a>
                                      :
                                      <button
                                      onClick={()=>handleFeature(item._id)}
                                        type="button"
                                        className="btn btn-warning btn-sm  waves-effect waves-light btn-table ml-2"
                                        id="sa-params"
                                      >
                                        UnFeature
                                      </button>
                                    }
                                    </>



                                  </td>
                                </tr>
                              )
                          )
                          : ""}
                      </tbody>
                    </table>
                  </div>

                  <div className="row mt-20">
                    <div className="col-sm-12 col-md-6 mb-20">
                      <div
                        className="dataTables_info"
                        id="datatable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing {paginationVal*(page-1)+1} to {totalRes<(paginationVal*page)?<>{totalRes}</>:<>{paginationVal*page}</>} of {totalRes} entries
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="dataTables_paginate paging_simple_numbers float-right">
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled">
                            <a
                              href="#"
                              aria-controls="datatable"
                              data-dt-idx="0"
                              tabIndex="0"
                              className="page-link"
                            >
                              Previous
                            </a>
                          </li>

                          {pageNumbers.map((page, index) => {
                            return (
                              <li
                                className={`paginate_button page-item ${active === page ? "active" : ""
                                  }`}
                              >
                                <button
                                  key={index}
                                  value={page}
                                  id={page}
                                  aria-controls="datatable"
                                  data-dt-idx="1"
                                  tabIndex="0"
                                  className="page-link "
                                  onClick={(e) => getPageContent(e)}
                                >
                                  {page}
                                </button>
                              </li>
                            );
                          })}

                          <li className="paginate_button page-item next">
                            <a href="#" tabIndex="0" className="page-link">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <!-- end table-responsive --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- container-fluid --> */}
      </div>
      <Footer />
    </div>
  );
}

export default Products;
