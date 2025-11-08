import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      <main className="max-w-[1280px] mx-auto px-10 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#141414] mb-4">Privacy Policy</h1>
          <p className="text-lg text-[#737373] mb-8">
            This page is currently under development. Please continue exploring or contact us for more information.
          </p>
          <button className="px-6 py-3 bg-[#141414] text-[#FAFAFA] font-bold rounded-lg hover:bg-[#2a2a2a] transition-colors">
            Contact Us
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
