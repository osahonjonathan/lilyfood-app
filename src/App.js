import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Landing,
  Login,
  Register,
  Dashboard,
  Order,
  Profile,
  SharedLayout,
  ProtectedRoute,
  Food,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="order" element={<Order />} />
          <Route path="profile" element={<Profile />} />
          <Route path=":foodId" element={<Food />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer position="top-center" style={{ marginTop: "1rem" }} />
    </Router>
  );
}

export default App;
