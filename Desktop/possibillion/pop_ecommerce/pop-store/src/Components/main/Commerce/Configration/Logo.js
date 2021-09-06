import React, { useEffect, useState } from "react";
import Footer from "../../Footer";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";
import swal from "sweetalert";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import axios from "axios";

function Logo() {
  const [loading, setLoading] = useState(false);
  const [Headerlogo, setHeaderlogo] = useState("");
  const [Footerlogo, setFooterlogo] = useState("");
  const [Adminlogo, setAdminlogo] = useState("");
  const [display, setDisplay] = useState(true);
  const { token } = isAutheticated();

  useEffect(() => {
    async function getConfiguration() {
      const configDetails = await axios.get(`${API}/api/config`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      configDetails.data.result.map((item) => {
        console.log(item);
        setHeaderlogo(item?.logo[0]?.Headerlogo);
        setFooterlogo(item?.logo[0]?.Footerlogo);
        setAdminlogo(item?.logo[0].Adminlogo);
      });
    }
    getConfiguration();
  }, []);

  async function handelChange(e) {
    setDisplay(false);
    console.log(e.target.name === "Logo for Website Header(148 x 48 px)");
    if (e.target.name === "Logo for Website Header(148 x 48 px)") {
      console.log(e.target.files[0]);
      setHeaderlogo(e.target.files[0]);
    } else if (e.target.name === "Logo for Website Footer(148 x 48 px)") {
      setFooterlogo(e.target.files[0]);
    } else if (e.target.name === "Logo for Admin Header(148 x 48 px)") {
      setAdminlogo(e.target.files[0]);
    }
  }
  async function handelSubmit() {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("Headerlogo", Headerlogo);
    formdata.append("Footerlogo", Footerlogo);
    formdata.append("Adminlogo", Adminlogo);

    let res = await axios.post(`${API}/api/config/logo`, formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      setLoading(false);
      console.log(res);
      swal("Success!", res.data.message, res.data.status);
    }
  }
  console.log(Headerlogo, Footerlogo, Adminlogo);
  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}

            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Logo</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">Potions of Paradise</Link>
                      </li>
                      <li className="breadcrumb-item">Logo</li>
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
                    <div className="row">
                      <div className="col-md-12 col-lg-6 col-xl-6">
                        <h1 className="text-left head-small">Logo</h1>

                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <>
                                  <label
                                    for="basicpill-phoneno-input"
                                    className="label-100 mt-3"
                                  >
                                    Logo for Website Header(148 x 48 px)
                                  </label>
                                  <div>
                                    <input
                                      type="file"
                                      name="Logo for Website Header(148 x 48 px)"
                                      onChange={(e) => handelChange(e)}
                                      className="form-control input-field col-md-6 d-inline-block"
                                      id="basicpill-phoneno-input"
                                    />
                                    {display ? (
                                      <img
                                        style={{ width: "100px" }}
                                        src={Headerlogo}
                                        alt="header logo"
                                      />
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <label
                                    for="basicpill-phoneno-input"
                                    className="label-100 mt-3"
                                  >
                                    Logo for Website Footer(148 x 48 px)
                                  </label>
                                  <input
                                    type="file"
                                    name="Logo for Website Footer(148 x 48 px)"
                                    onChange={(e) => handelChange(e)}
                                    className="form-control input-field col-md-6 d-inline-block"
                                    id="basicpill-phoneno-input"
                                  />{" "}
                                  {display ? (
                                    <img
                                      style={{ width: "100px" }}
                                      src={Footerlogo}
                                      alt="Footer logo"
                                    />
                                  ) : (
                                    ""
                                  )}
                                  <label
                                    for="basicpill-phoneno-input"
                                    className="label-100 mt-3"
                                  >
                                    Logo for Admin Header(148 x 48 px)
                                  </label>
                                  <input
                                    type="file"
                                    name="Logo for Admin Header(148 x 48 px)"
                                    onChange={(e) => handelChange(e)}
                                    className="form-control input-field col-md-6 d-inline-block"
                                    id="basicpill-phoneno-input"
                                  />{" "}
                                  {display ? (
                                    <img
                                      style={{ width: "100px" }}
                                      src={Adminlogo}
                                      alt="Admin logo"
                                    />
                                  ) : (
                                    ""
                                  )}
                                </>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group text-left">
                                <button
                                  type="button"
                                  onClick={handelSubmit}
                                  className="btn btn-success btn-login waves-effect waves-light mr-3 pt-2 pb-2 pr-4 pl-4"
                                >
                                  <ClipLoader loading={loading} size={18} />
                                  {!loading && "Save"}
                                </button>
                                <button
                                  onClick={() => setLoading(false)}
                                  type="button"
                                  className="btn btn-outline-secondary waves-effect waves-light mr-3 pt-2 pb-2 pr-4 pl-4"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
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
        {/* <!-- End Page-content --> */}

        <Footer />
      </div>
    </div>
  );
}

export default Logo;
