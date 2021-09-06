import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="vertical-menu">
      <div className="navbar-brand-box">
        <Link to="/dashboard" className="logo logo-dark">
          <span className="logo-sm">
            {/* <img src="/assets/images/logo-sm.png" alt="" height="40" /> */}
            <b style={{ color: "white" }}>POP</b>
          </span>
          <span className="logo-lg">
            {/* <img src="/assets/images/logo-lights.png" alt="" height="20" /> */}
            <b style={{ color: "white" }}>Potions of Paradise</b>
          </span>
        </Link>

        <Link to="index.html" className="logo logo-light">
          <span className="logo-sm">
            {/* <img src="/assets/images/logo-sm.png" alt="" height="40" /> */}
            <b style={{ color: "white" }}>Potions of Paradise</b>
          </span>
          <span className="logo-lg">
            {/* <img src="/assets/images/logo-light.png" alt="" height="20" /> */}
            <b style={{ color: "white" }}>Potions of Paradise</b>
          </span>
        </Link>
      </div>

      <button
        type="button"
        className="
            btn btn-sm
            px-3
            font-size-16
            header-item
            waves-effect
            vertical-menu-btn
          "
      >
        <i className="fa fa-fw fa-bars"></i>
      </button>

      <div data-simplebar className="sidebar-menu-scroll">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/dashboard">
                <img src="/assets/images/icons/dashboard-icon.png" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="has-arrow">
                <img src="/assets/images/icons/cms-icon.png" />
                <span>Commerce</span>
              </Link>
              <ul className="sub-menu" aria-expanded={false}>
                <li>
                  <a href="/comproducts">Products</a>
                </li>
                {/* <li>
                  <a href="/featuredProducts">Featured Products</a>
                </li> */}
                <li>
                  <a href="/comcatagory">Category</a>
                </li>
                <li>
                  <a href="/comsubcatagory">Sub Category</a>
                </li>
                <li>
                  <a href="/comcoupon">Coupons</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="has-arrow">
                <img src="/assets/images/icons/cms-icon.png" />
                <span>Orders Management</span>
              </Link>
              <ul className="sub-menu" aria-expanded={true}>
                <li>
                  <a href="/new-orders">New</a>
                </li>
                <li>
                  <a href="/process-orders">Processing</a>
                </li>
                <li>
                  <a href="/dispatch-orders">Dispatched</a>
                </li>
                <li>
                  <a href="/deliver-orders">Delivered</a>
                </li>
                <li>
                  <a href="/cancel-orders">Cancelled</a>
                </li>
                <li>
                  <a href="/return-orders">Returned</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/clients">
                <img src="/assets/images/icons/viewer-icon.png" />
                <span>Customers</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="has-arrow">
                <img src="/assets/images/icons/cms-icon.png" />
                <span>Data Collection</span>
              </Link>
              <ul className="sub-menu" aria-expanded={false}>
                <li>
                  <a href="/email-signup">Email Signups</a>
                </li>
                <li>
                  <a href="/contact-request">Contact Requests</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="has-arrow">
                <img src="/assets/images/icons/cms-icon.png" />
                <span>Configuration</span>
              </Link>
              <ul className="sub-menu" aria-expanded={false}>
                <li>
                  <a href="/shipping">Shipping</a>
                </li>
                <li>
                  <a href="/tax">Tax Rates</a>
                </li>
                <li>
                  <a href="/page">Pages</a>
                </li>
                <li>
                  <a href="/socialmedia">Social Media</a>
                </li>
                <li>
                  <a href="/address">Address</a>
                </li>
                <li>
                  <a href="config_email">Email</a>
                </li>
                <li>
                  <a href="/logo">Logo</a>
                </li>
                
              </ul>
            </li>

            {/* <li>
              <Link to="/earning">
                <img src="/assets/images/icons/earning-icon.png" />
                <span>Earnings</span>
              </Link>
            </li>
            <li>
              <Link to="/payment">
                <img src="/assets/images/icons/payment-settings-icon.png" />
                <span>Payment Settings</span>
              </Link>
            </li> */}
            {/* <li>
              <Link to="/notification">
                <img src="/assets/images/icons/notification-icon.png" />
                <span>Notification Settings</span>
              </Link>
            </li>

            <li>
              <Link to="/subscription/settings">
                <img src="/assets/images/icons/subscrption-plans-icon.png" />
                <span>Subscription Settings</span>
              </Link>
            </li> */}

            {/* <li>
              <Link to="/profile">
                <img src="/assets/images/icons/site-preference.png" />
                <span>Profile</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
