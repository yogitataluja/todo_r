import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";
let validator = require("email-validator");

function Addemail() {
  const [email, setEmail] = useState("");
  const { token } = isAutheticated();

  async function addEmail() {
    if (!validator.validate(email)) {
      swal("Opps!", "Please Enter Valid Email Address", "error");
    }
    let subscribeNews = await axios.post(
      `${API}/api/user/subscribeNewsLetter`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (subscribeNews.data) {
      swal("Success !", "Added Email Successfully", "success");
      setTimeout(() => {
        window.location.href = "/email-signup";
      }, 3000);
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
                <h4 class="mb-0">Data Collection - Email Signups</h4>
                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0);">Potions of Paradise</a>
                    </li>
                    <li class="breadcrumb-item">
                      Data Collection - Email Signups
                    </li>
                    <li class="breadcrumb-item">Add Email Manually</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-6 col-xl-6">
                      <h1 class="text-left head-small">Add Email Manually</h1>

                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                class="label-100"
                              >
                                Email
                              </label>
                              <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                class="form-control input-field"
                                id="basicpill-phoneno-input"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-12">
                            <div class="form-group text-left">
                              <button
                                onClick={addEmail}
                                type="button"
                                class="
                                      btn btn-success btn-login
                                      waves-effect waves-light
                                      mr-3
                                    "
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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

export default Addemail;
