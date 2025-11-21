import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="mb-4 text-6xl font-extrabold text-primary">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block rounded-lg bg-primary px-5 py-3 text-white font-medium hover:bg-primary/90 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
