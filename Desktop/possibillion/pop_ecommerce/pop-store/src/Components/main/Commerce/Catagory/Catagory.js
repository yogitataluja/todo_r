import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";
import Footer from "../../Footer";
import { MdDelete, MdEdit } from "react-icons/md";

function Catagory(props) {
  const { token } = isAutheticated();
  const [data, setdata] = useState([]);
  const [active, setActive] = useState(true);
  const [featuredCount, setFeaturedCount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(`${API}/api/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res, "res");
      let count = res.data.filter((item) => item.featured).length;
      setFeaturedCount(count);
      setdata(res.data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    let status = window.confirm("Do you want to delete");
    if (!status) {
      return;
    }
    let res = await axios.delete(`${API}/api/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      window.location.reload();
    }
  };

  const deleteSubcategory = async (subCatId) => {
    let status = window.confirm("Do you want to delete");
    if (!status) {
      return;
    }
    let res = await axios.delete(`${API}/api/category/${subCatId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      window.location.reload();
    }
  };
  const handleSuspend = async (catId) => {
    console.log(catId);
    let fetchCategory = await axios.get(`${API}/api/category/${catId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (fetchCategory.data.status) {
      let updated = await axios.patch(
        `${API}/api/category/${catId}`,
        {
          status: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(updated);
      if (updated) {
        window.location.reload();
        setTimeout(() => {
          window.stop();
        }, 2000);
      }
    }
  };
  const handleActive = async (catId) => {
    console.log(catId);
    let fetchCategory = await axios.get(`${API}/api/category/${catId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!fetchCategory.data.status) {
      let updated = await axios.patch(
        `${API}/api/category/${catId}`,
        {
          status: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (updated) {
        window.location.reload();
        setTimeout(() => {
          window.stop();
        }, 2000);
      }
    }
  };
  const handleFeatured = async (catId) => {
    console.log(catId);
    if (featuredCount < 4) {
      let fetchCategory = await axios.get(`${API}/api/category/${catId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!fetchCategory.data.featured) {
        let updated = await axios.patch(
          `${API}/api/category/${catId}`,
          {
            featured: true,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(updated);
        if (updated) {
          window.location.reload();
          setTimeout(() => {
            window.stop();
          }, 2000);
        }
      } else {
        let fetchCategory = await axios.get(`${API}/api/category/${catId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (fetchCategory.data.featured) {
          let updated = await axios.patch(
            `${API}/api/category/${catId}`,
            {
              featured: false,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (updated) {
            window.location.reload();
            setTimeout(() => {
              window.stop();
            }, 2000);
          }
        }
      }
    } else {
      let fetchCategory = await axios.get(`${API}/api/category/${catId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (fetchCategory.data.featured) {
        let updated = await axios.patch(
          `${API}/api/category/${catId}`,
          {
            featured: false,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (updated) {
          window.location.reload();
          setTimeout(() => {
            window.stop();
          }, 2000);
        }
      } else {
        swal("Failed!", "Only 4 Featured Categories Are Allowed", "error");
      }
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
                <h4 className="mb-0">
                  {props.heading ? props.heading : "Commerce - Categories"}
                </h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Potions of Paradise</Link>
                    </li>
                    <li className="breadcrumb-item">{props.heading}</li>
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
                    <div className="col-sm-12 col-md-6">&nbsp;</div>
                    <div className="col-sm-12 col-md-6">
                      <div className="dropdown d-block">
                        <a
                          href={
                            props.addNewUrl
                              ? props.addNewUrl
                              : "/comcatagory/add"
                          }
                        >
                          <button
                            type="button"
                            className="btn btn-primary add-btn waves-effect waves-light float-right"
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                            Add New
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive table-shoot">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>Category Name</th>
                          {props.tableHeading ? (
                            <th>{props.tableHeading}</th>
                          ) : null}
                          {props.tableHeading ? "" : <th>Status</th>}
                          <th>Featured</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.length > 0
                          ? data.map((item) => (
                              <tr key={item._id}>
                                <td>{item.category}</td>
                                {props.tableHeading ? (
                                  <td>
                                    {item.subCategory.map((subcat, index) => {
                                      return (
                                        <tr
                                          style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                          }}
                                          key={index}
                                        >
                                          {subcat.category}
                                        </tr>
                                      );
                                    })}
                                  </td>
                                ) : null}
                                {props.tableHeading ? (
                                  ""
                                ) : (
                                  <td>
                                    {item.status ? "Active" : "Suspended"}
                                  </td>
                                )}
                                {props.tableHeading ? (
                                  ""
                                ) : (
                                  <td>
                                    {item.featured ? "Featured" : "Unfeatured"}
                                  </td>
                                )}
                                {props.tableHeading ? (
                                  <td>
                                    {item.subCategory.map((subcat, index) => {
                                      return (
                                        <div className="d-flex" key={index}>
                                          <MdDelete
                                            className="mt-1 mr-3 text-danger h4"
                                            onClick={() =>
                                              deleteSubcategory(subcat._id)
                                            }
                                          />
                                          <Link
                                            to={`/comsubcatagory/edit/${subcat._id}`}
                                          >
                                            <MdEdit className="mt-1 text-primary h4 cursor-pointer" />
                                          </Link>
                                        </div>
                                      );
                                    })}
                                  </td>
                                ) : (
                                  <td>
                                    <Link to={`/comcatagory/edit/${item._id}`}>
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-sm  waves-effect waves-light btn-table ml-2"
                                      >
                                        Edit
                                      </button>
                                    </Link>

                                    <button
                                      onClick={() => handleDelete(item._id)}
                                      type="button"
                                      className="btn btn-danger btn-sm  waves-effect waves-light btn-table ml-2"
                                      id="sa-params"
                                    >
                                      Delete
                                    </button>
                                    {item.status ? (
                                      <button
                                        onClick={() => handleActive(item._id)}
                                        type="button"
                                        className="btn btn-success btn-sm  waves-effect waves-light btn-table ml-2"
                                        id="sa-params"
                                        disabled
                                      >
                                        Activate
                                      </button>
                                    ) : (
                                      <button
                                        onClick={() => handleActive(item._id)}
                                        type="button"
                                        className="btn btn-success btn-sm  waves-effect waves-light btn-table ml-2"
                                        id="sa-params"
                                      >
                                        Activate
                                      </button>
                                    )}
                                    {item.status ? (
                                      <button
                                        onClick={() => handleSuspend(item._id)}
                                        type="button"
                                        className="btn btn-warning btn-sm  waves-effect waves-light btn-table ml-2"
                                        id="sa-params"
                                      >
                                        Suspend
                                      </button>
                                    ) : (
                                      <button
                                        onClick={() => handleSuspend(item._id)}
                                        type="button"
                                        className="btn btn-warning btn-sm  waves-effect waves-light btn-table ml-2"
                                        id="sa-params"
                                        disabled
                                      >
                                        Suspend
                                      </button>
                                    )}
                                    {item.featured ? (
                                      <button
                                        onClick={() => handleFeatured(item._id)}
                                        type="button"
                                        className="btn btn-danger btn-sm  waves-effect waves-light btn-table ml-2"
                                        id="sa-params"
                                      >
                                        Unfeature
                                      </button>
                                    ) : (
                                      <button
                                        onClick={() => handleFeatured(item._id)}
                                        type="button"
                                        className="btn btn-primary btn-sm  waves-effect waves-light btn-table ml-2"
                                        id="sa-params"
                                      >
                                        Feature
                                      </button>
                                    )}
                                  </td>
                                )}
                              </tr>
                            ))
                          : ""}
                      </tbody>
                    </table>
                  </div>

                  {/* <!-- end table-responsive --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- container-fluid --> */}
      </div>
      {/* <!-- End Page-content --> */}

      {/* <footer className="footer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<script>document.write(new Date().getFullYear())</script> © TellyTell
						</div>

					</div>
				</div>
			</footer> */}
      <Footer />
    </div>
  );
}

export default Catagory;
