import axios from "axios";
import { update } from "lodash";
import React, { useEffect, useState } from "react";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";

function Shipping() {
  let [shipping, setShipping] = useState([]);
  const { token } = isAutheticated();
  useEffect(() => {
    async function getShippingMethods() {
      const methods = await axios.get(`${API}/api/shipping/view_Shipping`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(methods);
      setShipping(methods.data.Shipping);
    }
    getShippingMethods();
  }, []);

  async function handleDelete(id) {
    const deleted = await axios.delete(
      `${API}/api/shipping/delete_Shipping/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (deleted) {
      window.location.reload();
    }
  }

  async function handleStatus(id) {
    const rateStatus = await axios.get(
      `${API}/api/shipping/view_Shipping/${id}`
    );

    console.log(rateStatus.data.Shipping);

    if (rateStatus.data.Shipping.status) {
      const updateStatus = await axios.patch(
        `${API}/api/shipping/update_Shipping/${id}`,
        {
          $set: {
            status: false,
          },
        }
      );
      if (updateStatus) {
        window.location.reload();
      }
    } else {
      const updateStatus = await axios.patch(
        `${API}/api/shipping/update_Shipping/${id}`,
        {
          $set: {
            status: true,
          },
        }
      );
      if (updateStatus) {
        window.location.reload();
      }
    }
  }
  return (
    <div className="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div
                class="
                    page-title-box
                    d-flex
                    align-items-center
                    justify-content-between
                  "
              >
                <h4 class="mb-0">Configuration - Shipping</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0);">Potions of Paradise</a>
                    </li>
                    <li class="breadcrumb-item">Configuration - Shipping</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="row ml-0 mr-0 mb-10">
                    <div class="col-sm-12 col-md-6"></div>
                    <div class="col-sm-12 col-md-6">
                      <div class="dropdown d-block">
                        <a href="/addShipping">
                          <button
                            type="button"
                            class="
                                btn btn-primary
                                add-btn
                                waves-effect waves-light
                                float-right
                              "
                          >
                            <i class="fa fa-plus" aria-hidden="true"></i> Add
                            New Shipping Rate
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive table-shoot">
                    <table class="table table-centered table-nowrap mb-0">
                      <thead class="thead-light">
                        <tr>
                          <th>Name</th>
                          <th>Rate</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {shipping.map((el) => {
                          return (
                            <tr>
                              <td>{el.name}</td>
                              <td>{el.rate}</td>
                              <td>
                                {el.status ? (
                                  <span
                                    class="
                                  badge badge-pill badge-success
                                  font-size-12
                                "
                                  >
                                    Live
                                  </span>
                                ) : (
                                  <span
                                    class="
                                  badge badge-pill badge-danger
                                  font-size-12
                                "
                                  >
                                    Suspended
                                  </span>
                                )}
                              </td>
                              <td>
                                <button
                                  onClick={() => handleStatus(el._id)}
                                  type="button"
                                  class="
                                  btn btn-success btn-sm
                                  waves-effect waves-light
                                  btn-table
                                "
                                >
                                  {el.status ? "Suspend" : "Activate"}
                                </button>
                                <a href={`/editShipping/${el._id}`}>
                                  <button
                                    type="button"
                                    class="
                                    btn btn-primary btn-sm
                                    waves-effect waves-light
                                    btn-table
                                    ml-2
                                  "
                                  >
                                    Edit
                                  </button>
                                </a>

                                <button
                                  onClick={() => handleDelete(el._id)}
                                  type="button"
                                  class="
                                    btn btn-danger btn-sm
                                    waves-effect waves-light
                                    btn-table
                                    ml-2
                                  "
                                  id="sa-params"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div class="row mt-20">
                    <div class="col-sm-12 col-md-6 mb-20">
                      {/* <div
                        class="dataTables_info"
                        id="datatable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div> */}
                    </div>

                    <div class="col-sm-12 col-md-6">
                      {/* <div
                        class="
                            dataTables_paginate
                            paging_simple_numbers
                            float-right
                          "
                      >
                        <ul class="pagination">
                          <li
                            class="
                                paginate_button
                                page-item
                                previous
                                disabled
                              "
                          >
                            <a
                              href="#"
                              aria-controls="datatable"
                              data-dt-idx="0"
                              tabindex="0"
                              class="page-link"
                            >
                              Previous
                            </a>
                          </li>

                          <li class="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="datatable"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
                            >
                              1
                            </a>
                          </li>

                          <li class="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="datatable"
                              data-dt-idx="2"
                              tabindex="0"
                              class="page-link"
                            >
                              2
                            </a>
                          </li>

                          <li class="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="datatable"
                              data-dt-idx="3"
                              tabindex="0"
                              class="page-link"
                            >
                              3
                            </a>
                          </li>

                          <li class="paginate_button page-item next">
                            <a href="#" tabindex="0" class="page-link">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
