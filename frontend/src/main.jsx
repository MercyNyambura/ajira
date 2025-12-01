import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);