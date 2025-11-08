import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CTASection from "@/components/CTASection";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      <main className="max-w-[1280px] mx-auto px-10 py-20">
        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-[#141414] mb-4">Case Studies</h1>
          <p className="text-lg text-[#737373] mb-8">
            This page is currently under development. Please continue exploring or contact us for more information.
          </p>
          <button className="px-6 py-3 bg-[#141414] text-[#FAFAFA] font-bold rounded-lg hover:bg-[#2a2a2a] transition-colors">
            Contact Us
          </button>
        </div> */}
        <div className="max-w-[1280px] mx-auto px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1 flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3809c8e44daac37456f445a7544a38865790bcb2?width=1498"
                alt="AI Brain Illustration"
                className="w-full max-w-[600px] h-auto"
              />
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <div className="space-y-2">
                <h1 className="text-[48px] font-black leading-[60px] tracking-[-2px] text-[#000]">
                  AI Solutions That Grow With You
                </h1>
              </div>

              <p className="text-base leading-6 text-[#000]">
                Ethrah AI delivers end-to-end AI solutions tailored to your
                industry—from strategy to deployment. We handle the complexity
                so you can focus on growth.
              </p>

              <button className="h-10 px-4 rounded-lg bg-[#141414] text-[#FAFAFA] text-sm font-bold leading-[21px] hover:bg-[#2a2a2a] transition-colors">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
        <CaseStudiesSection />
        <HowWeWorkSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
