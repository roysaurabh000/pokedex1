import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import HomePage from './pages/HomePage'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PokemonDetail from "./components/PokemonDetail";
import Home from "./pages/Home";
import theme from "./theme";
import { Login } from '@mui/icons-material'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pokemon/:pokemonName",
    element: <PokemonDetail/>
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forget-password",
    element: <ForgetPasswordPage />,
  },
  {
    path: "/landingpage",
    element: <LandingPage />,
  },
 
    
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

