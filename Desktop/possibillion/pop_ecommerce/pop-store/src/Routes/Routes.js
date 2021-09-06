import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Login from "../Components/auth/Login";
import Register from "../Components/auth/Register";
import ChangePassword from "../Components/main/ChangePassword";
import EditProfile from "../Components/main/EditProfile";
import Profile from "../Components/main/Profile";
import PrivateRoute from "./Privateroute";
import Dashboard from "../Components/main/Dashboard";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { isAutheticated } from "../Components/auth/authhelper";
import { API } from "../API";
import Products from "../Components/main/Commerce/Products/Products";
import AddProducts from "../Components/main/Commerce/Products/AddProducts";
import Editproducts from "../Components/main/Commerce/Products/Editproducts";
import Catagory from "../Components/main/Commerce/Catagory/Catagory";
import AddCatagory from "../Components/main/Commerce/Catagory/AddCatagory";
import EditCatagory from "../Components/main/Commerce/Catagory/EditCatagory";
import Base from "../Components/Base";
import Subcategory from "../Components/main/Commerce/Subcategory/Subcategory";
import Addsubcategory from "../Components/main/Commerce/Subcategory/Addsubcategory";
import EditSubcategory from "../Components/main/Commerce/Subcategory/EditSubcategory";
import Client from "../Components/main/Commerce/Clients/Client";
import ViewClient from "../Components/main/Commerce/Clients/ViewClient";
import FeaturedProducts from "../Components/main/Commerce/Products/FeaturedProducts";
import Addfeatured from "../Components/main/Commerce/Products/Addfeatured";
import Editfeatured from "../Components/main/Commerce/Products/Editfeatured";
import Coupon from "../Components/main/Commerce/Coupon/Coupon";
import Addcoupon from "../Components/main/Commerce/Coupon/Addcoupon";
import New from "../Components/main/Commerce/Orders/New";
import Vieworder from "../Components/main/Commerce/Orders/Vieworder";
import Processing from "../Components/main/Commerce/Orders/Processing";
import Delivered from "../Components/main/Commerce/Orders/Delivered";
import Cancelled from "../Components/main/Commerce/Orders/Cancelled";
import Returned from "../Components/main/Commerce/Orders/Returned";
import Dispatched from "../Components/main/Commerce/Orders/Dispatched";
import Tax from "../Components/main/Commerce/Configration/Tax";
import Edittax from "../Components/main/Commerce/Configration/Edittax";
import Addtax from "../Components/main/Commerce/Configration/Addtax";
import Page from "../Components/main/Commerce/Configration/Page";
import Pageadd from "../Components/main/Commerce/Configration/Pageadd";
import Editpage from "../Components/main/Commerce/Configration/Editpage";
import Gst from "../Components/main/Commerce/Configration/Gst";
import Socialmedia from "../Components/main/Commerce/Configration/Socialmedia";
import Address from "../Components/main/Commerce/Configration/Address";
import Logo from "../Components/main/Commerce/Configration/Logo";
import Shipping from "../Components/main/Commerce/Configration/Shipping";
import Addshipping from "../Components/main/Commerce/Configration/Addshipping";
import Editshipping from "../Components/main/Commerce/Configration/Editshipping";
import Email from "../Components/main/Commerce/Data/Email";
import Addemail from "../Components/main/Commerce/Data/Addemail";
import Contact from "../Components/main/Commerce/Data/Contact";
import Contactrequest from "../Components/main/Commerce/Data/Contactrequest";
import Viewcontact from "../Components/main/Commerce/Data/Viewcontact";
import Editcoupon from "../Components/main/Commerce/Coupon/Editcoupon";
import Config_email from "../Components/main/Commerce/Configration/Config_email";

const { token } = isAutheticated();

export default function Routes() {
  setInterval(async () => {
    let idToken = sessionStorage.getItem("id_token");
    let refresh_token = sessionStorage.getItem("refresh_token");
    let params = new URLSearchParams({ refresh_token });
    refresh_token &&
      (await axios
        .post(`${API}/api/client/refreshToken`, params, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${idToken}`,
          },
        })
        .then((response) => {
          console.log("cognito data", response);
          let data = response.data.data;
          sessionStorage.setItem("access_token", data.AccessToken);
          sessionStorage.setItem("id_token", data.IdToken);
        })
        .catch((err) => {
          console.log(err);
        }));
  }, 3000000);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>

        <Base>
          {/* BASE STARTING HERE */}
          <PrivateRoute
            path="/dashboard"
            exact
            component={Dashboard}
          ></PrivateRoute>
          <PrivateRoute
            path="/notification"
            exact
            component={Notification}
          ></PrivateRoute>
          <PrivateRoute
            path="/profile"
            exact
            component={Profile}
          ></PrivateRoute>
          <PrivateRoute
            path="/edit/profile"
            exact
            component={EditProfile}
          ></PrivateRoute>
          <PrivateRoute
            path="/change/password"
            exact
            component={ChangePassword}
          ></PrivateRoute>
          <PrivateRoute
            component={Products}
            exact
            path="/comproducts"
          ></PrivateRoute>
          <PrivateRoute
            component={FeaturedProducts}
            exact
            path="/featuredProducts"
          ></PrivateRoute>
          <PrivateRoute
            component={Addfeatured}
            exact
            path="/featuredProduct/add/:id"
          ></PrivateRoute>
          <PrivateRoute
            component={Editfeatured}
            exact
            path="/featuredProduct/edit/:id"
          ></PrivateRoute>

          <PrivateRoute
            component={AddProducts}
            exact
            path="/comproducts/add"
          ></PrivateRoute>
          <PrivateRoute
            component={Editproducts}
            exact
            path="/comproducts/edit/:productId"
          ></PrivateRoute>
          <PrivateRoute
            component={Catagory}
            exact
            path="/comcatagory"
          ></PrivateRoute>
          <PrivateRoute
            component={AddCatagory}
            exact
            path="/comcatagory/add"
          ></PrivateRoute>
          <PrivateRoute
            component={EditCatagory}
            exact
            path="/comcatagory/edit/:catagoryId"
          ></PrivateRoute>
          <PrivateRoute
            component={Subcategory}
            exact
            path="/comsubcatagory"
          ></PrivateRoute>
          <PrivateRoute
            component={Addsubcategory}
            exact
            path="/comsubcatagory/add"
          ></PrivateRoute>
          <PrivateRoute
            component={EditSubcategory}
            exact
            path="/comsubcatagory/edit/:catagoryId"
          ></PrivateRoute>
          <PrivateRoute
            component={Coupon}
            exact
            path="/comcoupon"
          ></PrivateRoute>
          <PrivateRoute
            component={Addcoupon}
            exact
            path="/coupon/add"
          ></PrivateRoute>
          <PrivateRoute
            component={Editcoupon}
            exact
            path="/coupon/:id"
          ></PrivateRoute>

          <PrivateRoute component={Client} exact path="/clients"></PrivateRoute>

          <PrivateRoute
            component={ViewClient}
            exact
            path="/client-view/:id"
          ></PrivateRoute>
          <PrivateRoute
            component={Shipping}
            exact
            path="/shipping"
          ></PrivateRoute>
          <PrivateRoute
            component={Addshipping}
            exact
            path="/addShipping"
          ></PrivateRoute>
          <PrivateRoute
            component={Editshipping}
            exact
            path="/editShipping/:id"
          ></PrivateRoute>
          <PrivateRoute component={Tax} exact path="/tax"></PrivateRoute>
          <PrivateRoute
            component={Edittax}
            exact
            path="/tax/:id"
          ></PrivateRoute>

          <PrivateRoute component={Addtax} exact path="/addtax"></PrivateRoute>
          <PrivateRoute component={Page} exact path="/page"></PrivateRoute>
          <PrivateRoute
            component={Pageadd}
            exact
            path="/page/add"
          ></PrivateRoute>
          <PrivateRoute
            component={Editpage}
            exact
            path="/page/edit/:id"
          ></PrivateRoute>
          <PrivateRoute
            component={Socialmedia}
            exact
            path="/socialmedia"
          ></PrivateRoute>
          <PrivateRoute
            component={Address}
            exact
            path="/address"
          ></PrivateRoute>
          <PrivateRoute component={Logo} exact path="/logo"></PrivateRoute>
          <PrivateRoute component={New} exact path="/new-orders"></PrivateRoute>
          <PrivateRoute
            component={Vieworder}
            exact
            path="/view-orders/:id"
          ></PrivateRoute>
          <PrivateRoute
            component={Processing}
            exact
            path="/process-orders"
          ></PrivateRoute>
          <PrivateRoute
            component={Delivered}
            exact
            path="/deliver-orders"
          ></PrivateRoute>
          <PrivateRoute
            component={Dispatched}
            exact
            path="/dispatch-orders"
          ></PrivateRoute>
          <PrivateRoute
            component={Cancelled}
            exact
            path="/cancel-orders"
          ></PrivateRoute>
          <PrivateRoute
            component={Returned}
            exact
            path="/return-orders"
          ></PrivateRoute>

          <PrivateRoute component={Gst} exact path="/gst"></PrivateRoute>
          <PrivateRoute
            component={Socialmedia}
            exact
            path="/socialmedia"
          ></PrivateRoute>
          <PrivateRoute
            component={Address}
            exact
            path="/address"
          ></PrivateRoute>

          <PrivateRoute
            component={Config_email}
            exact
            path="/config_email"
          ></PrivateRoute>

          <PrivateRoute component={Logo} exact path="/logo"></PrivateRoute>

          <PrivateRoute
            component={Email}
            exact
            path="/email-signup"
          ></PrivateRoute>
          <PrivateRoute
            component={Addemail}
            exact
            path="/add-email"
          ></PrivateRoute>
          <PrivateRoute
            component={Contact}
            exact
            path="/contact-request"
          ></PrivateRoute>
          <PrivateRoute
            component={Contactrequest}
            exact
            path="/add-contact"
          ></PrivateRoute>
          <PrivateRoute
            component={Viewcontact}
            exact
            path="/view-contact/:id"
          ></PrivateRoute>
        </Base>
      </Switch>
    </Router>
  );
}
