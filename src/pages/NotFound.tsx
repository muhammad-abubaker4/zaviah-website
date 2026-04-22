import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Error 404</p>
          <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">Page not found</h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            The page you are looking for does not exist or may have been moved.
          </p>
          <Button asChild className="mt-10 rounded-full" size="lg">
            <Link to="/">Back to home</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
