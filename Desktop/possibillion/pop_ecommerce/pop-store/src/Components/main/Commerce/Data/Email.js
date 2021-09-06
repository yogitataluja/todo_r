import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";
import Pagination from '../../../pagination'

function Email() {
  const { token } = isAutheticated();
  const [subscribers, setSubscribers] = useState([]);
  const [totalRes, setTotalRes] = useState(0);

  const pageNumbers = [];
  const [active, setActive] = useState(1);
  const[page,setPage] =useState(1);
  const[limitVal,setLimitVal]=useState(10);

  function convertDate(inputFormat) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), monthNames[d.getMonth()], d.getFullYear()].join(
      " "
    );
  }

  useEffect(() => {

    getSubscribedUser();
  }, [page,limitVal]);
  async function getSubscribedUser() {
    let userList = await axios.get(`${API}/api/user/getNewsLetter?page=${page}&limit=${limitVal}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });


    setSubscribers(userList.data.user);
    setTotalRes(userList.data.totalRecords);
  }

  async function handleDelete(id) {
    let deleted = await axios.post(
      `${API}/api/user/delNewsLetter/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (deleted.data) {
      window.location.reload();
    }
  }
  const getPageContent = async (e) => {
    setActive(Number(e.target.value));
    console.log(e.target.value)

  };
  const setLimitval = async (e) => {

    setLimitVal(Number(e.target.value));

  };
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
                <h4 class="mb-0">Data Management - Email Signups</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0);">Potions of Paradise</a>
                    </li>
                    <li class="breadcrumb-item">
                      Data Management - Email Signups
                    </li>
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
                    <div class="col-sm-12 col-md-6">
                      <div class="dataTables_length">
                        <label class="w-100">
                          Show
                          <select
                            onChange={(e) => setLimitval(e)}
                            name=""
                            class="
                                select-w
                                custom-select custom-select-sm
                                form-control form-control-sm
                              "
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          entries
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <div class="dropdown d-block">
                        <a href="/add-email">
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
                            Email Manually
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive table-shoot">
                    <table class="table table-centered table-nowrap mb-0">
                      <thead class="thead-light">
                        <tr>
                          <th>Email</th>
                          <th>Added On</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscribers.map((el) => {
                          return (
                            <tr>
                              <td>{el.newsLetterSignUp.email}</td>
                              <td>{convertDate(el.updatedAt)}</td>
                              <td>
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
          <Pagination totalPosts={totalRes} paginate={getPageContent} postsPerPage={limitVal} active={active} page={page}/>
                  {/* <div class="row mt-20">
                    <div class="col-sm-12 col-md-6 mb-20">
                      <div
                        class="dataTables_info"
                        id="datatable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-6">
                      <div
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
                      </div>
                    </div>
                  </div
                */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
