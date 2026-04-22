import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

const CoreMembers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default CoreMembers;

