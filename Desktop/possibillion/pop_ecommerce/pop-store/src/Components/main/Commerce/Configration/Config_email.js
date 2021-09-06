import React from 'react'

const Config_email = () => {
    return (<>
        <div id="layout-wrapper">
            <div class="main-content">

                <div class="page-content">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="row ml-0 mr-0  mb-10">
                                            <div class="col-sm-12 col-md-6">
                                            </div>

                                        </div>
                                        <div class="table-responsive table-shoot">
                                            <table class="table table-centered table-nowrap mb-0">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Updated On</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>Welcome Email</td>
                                                        <td>01 Sept 2021 10:10 a.m.</td>
                                                        <td><span
                                                            class="badge badge-pill badge-soft-success font-size-12">Active</span>
                                                        </td>
                                                        <td>
                                                            <a href="email-template-edit.html">
                                                                <button type="button"
                                                                    class="btn btn-primary btn-sm  waves-effect waves-light btn-table ml-2">
                                                                    Edit</button>
                                                            </a>
                                                            <a href="#">
                                                                <button type="button"
                                                                    class="btn btn-danger btn-sm  waves-effect waves-light btn-table ml-2"
                                                                    id="sa-params">
                                                                    Suspend</button>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* <!-- end table-responsive --> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>     {/* <!-- container-fluid --> */}
                </div>

            </div>
        </div>
    </>)
}

export default Config_email

