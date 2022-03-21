import Home from "./views/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/About/About";
import AllServices from "./views/allservices/AllServices";
import Contact from "./views/Contact/Contact";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import ServiceDetails from "./components/custom/serviceDetails/ServiceDetails";
import PrivateRoute from "./components/authentication/PrivateRoute/PrivateRoute";
import Dashboard from "./views/Dashboard/Dashboard";
import DashboardHome from "./views/Dashboard/DashboardHome/DashboardHome";
import MyAppointment from "./views/Dashboard/MyAppointment/MyAppointment";
import ManageAppointment from "./views/Dashboard/ManageAppointment/ManageAppointment";
import AddReview from "./views/Dashboard/AddReview/AddReview";
import ManageTestimonials from "./views/Dashboard/ManageTestimonials/ManageTestimonials";
import Discount from "./views/Dashboard/Discount/Discount";
import MakeAdmin from "./views/Dashboard/makeAdmin/makeAdmin";
import AdminRoute from "./components/authentication/AdminRoute/AdminRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/services"
            element={
              <PrivateRoute>
                <AllServices></AllServices>
              </PrivateRoute>
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/services/:serviceId"
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }
          >
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardHome></DashboardHome>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/appointment"
              element={
                <PrivateRoute>
                  <MyAppointment></MyAppointment>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/manageAppointment"
              element={
                <PrivateRoute>
                  <ManageAppointment></ManageAppointment>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/addreview"
              element={
                <PrivateRoute>
                  <AddReview></AddReview>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/manageReviews"
              element={
                <PrivateRoute>
                  <ManageTestimonials></ManageTestimonials>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/discount"
              element={
                <PrivateRoute>
                  <Discount></Discount>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
