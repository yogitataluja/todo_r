import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";

function Edittax() {
  const [name, setName] = useState("");
  const [tax, setTax] = useState("");
  const { id } = useParams();
  const { token } = isAutheticated();

  useEffect(() => {
    async function getTax() {
      let tax = await axios.get(`${API}/api/tax/view_tax/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(tax);
      setName(tax.data.tax.name);
      setTax(tax.data.tax.tax)
    }

    getTax();
  }, []);

  async function handleSubmit() {
    let res = await axios.patch(
      `${API}/api/tax/update_tax/${id}`,
      {
        name,
        tax,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res) {
      window.location.href = "/tax";
    }
  }
  return (
    <div class="main-content">
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
                <h4 class="mb-0">Edit New Tax Rate</h4>
                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0);">Potions of Paradise</a>
                    </li>
                    <li class="breadcrumb-item active">Configuration</li>
                    <li class="breadcrumb-item active">Edit New Tax Rate</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="form-group text-right">
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="
                    btn btn-success btn-login
                    waves-effect waves-light
                    mr-3
                  "
                >
                  Save
                </button>

                <a href="#">
                  <button
                    type="button"
                    class="
                    btn btn-success btn-cancel
                    waves-effect waves-light
                    mr-3
                  "
                  >
                    Cancel
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                class="label-100"
                              >
                                Name
                              </label>
                              <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                class="form-control input-field"
                              />
                              <label
                                for="basicpill-phoneno-input"
                                class="label-100"
                              >
                                This name is for your reference.
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-12">
                            <div class="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                class="label-100"
                              >
                                Tax Rate (in %)
                              </label>
                              <input
                                value={tax}
                                onChange={(e) => setTax(e.target.value)}
                                type="text"
                                class="form-control input-field"
                              />
                              <label
                                for="basicpill-phoneno-input"
                                class="label-100"
                              >
                                This tax rate will be applicable to the products
                                you select.
                              </label>
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

export default Edittax;
