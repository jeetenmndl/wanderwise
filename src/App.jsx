import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Register from "./pages/Register";
import SigninPage from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import useAuth from "./hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import AppLayout from "./components/layouts/AppLayout";
import TripsPage from "./pages/trips/TripsPage";
import AddTripPage from "./pages/trips/AddTripPage";
import EditTripPage from "./pages/trips/EditTripPage";
import TripDetails from "./pages/trips/TripDetails";
import AcceptInvitation from "./pages/AcceptInvitation";
import BaggagePage from "./pages/baggage/BaggagePage";
import BaggageDetails from "./pages/baggage/BaggageDetails";
import ItinerariesPage from "./pages/itineraries/ItinerariesPage";
import ItinerariesDetails from "./pages/itineraries/ItinerariesDetails";
import AddItineraries from "./pages/itineraries/AddItineraries";
import EditItineraries from "./pages/itineraries/EditItineraries";

export default function App() {
  const { token, logout } = useAuth();

  const decodedToken = token ? jwtDecode(token) : null;
  console.log(decodedToken);


  const ProtectedRoutes = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      const userId = decodedToken?.userId;

      if (decodedToken && decodedToken?.exp) {
        const currentTime = Date.now();
        if (decodedToken.exp < currentTime / 1000) {
          logout();
          return <Navigate to="/signin" />
        }
      }

      if (!userId) {
        logout();
        return <Navigate to="/signin" />
      }

      return <AppLayout />

    } catch (error) {
      console.error(error);
      logout();
      return <Navigate to="/signin" />
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* trip pages */}
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/trips/add" element={<AddTripPage />} />
          <Route path="/trips/edit/:id" element={<EditTripPage />} />
          <Route path={"/trips/:id"} element={<TripDetails />} />
          <Route path="/trips/:id/invite/accept" element={<AcceptInvitation />} />

          {/* baggage pages */}
          <Route path="/baggage" element={<BaggagePage />} />
          <Route path="/baggage/:id" element={<BaggageDetails />} />

          {/* itineraries pages */}
          <Route path="/itineraries" element={<ItinerariesPage />} />
          <Route path="/itineraries/add" element={<AddItineraries />} />
          <Route path="/itineraries/:id" element={<ItinerariesDetails />} />
          <Route path="/itineraries/:tripId/edit/:itineraryId" element={<EditItineraries />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

