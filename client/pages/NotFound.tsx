import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      <main className="max-w-[1280px] mx-auto px-10 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-black text-[#141414] mb-4">404</h1>
          <h2 className="text-2xl font-bold text-[#141414] mb-4">Page Not Found</h2>
          <p className="text-lg text-[#737373] mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-[#141414] text-[#FAFAFA] font-bold rounded-lg hover:bg-[#2a2a2a] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
