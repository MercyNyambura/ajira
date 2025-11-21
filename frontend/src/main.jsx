import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./styles/app.css";

createRoot(document.getElementById("root")).render(<App />);