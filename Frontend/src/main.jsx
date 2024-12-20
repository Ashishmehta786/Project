import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import SignupPage from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./hooks/Query.jsx";
import { Authprovider } from "./contexts/Authcontext.jsx";
import { ThemeProvider } from "@/components/theme-provider";

export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Signup",
    element: <SignupPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </Authprovider>
    </QueryClientProvider>
  </StrictMode>
);
