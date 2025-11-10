import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

export default function CaseStudiesSection() {
  const [searchParams] = useSearchParams();
  const initialTabParam = searchParams.get("tab");
  const initialTab: "automation" | "trading" =
    initialTabParam === "trading" ? "trading" : "automation";
  const [activeTab, setActiveTab] = useState<"automation" | "trading">(
    initialTab
  );


  const navigate = useNavigate();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "trading" && activeTab !== "trading") {
      setActiveTab("trading");
    }
    if (tab === "automation" && activeTab !== "automation") {
      setActiveTab("automation");
    }
  }, [searchParams, activeTab]);
  return (
    <section className="w-full bg-[#FEFEFE]">
      <div className="max-w-[1280px] mx-auto sm:px-10">
       

        <div className="mb-12">
          <div className="border-b border-[#E0E0E0] px-4">
            <div className="flex gap-8">
              <button
                onClick={() =>  navigate("/case-studies?tab=automation")}
                className={`py-4 px-0 text-sm font-bold leading-[21px] border-b-[3px] transition-colors ${
                  activeTab === "automation"
                    ? "border-[#141414] text-[#141414]"
                    : "border-[#E5E8EB] text-[#757575]"
                }`}
              >
                Automation
              </button>
              <button
                onClick={() =>  navigate("/case-studies?tab=trading")}
                className={`py-4 px-0 text-sm font-bold leading-[21px] border-b-[3px] transition-colors ${
                  activeTab === "trading"
                    ? "border-[#141414] text-[#141414]"
                    : "border-[#E5E8EB] text-[#757575]"
                }`}
              >
                Trading & Finance
              </button>
            </div>
          </div>
        </div>

        {activeTab === "automation" ? (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-[30px] font-bold leading-[34px] text-[#141414]">
                  AI-Powered Licensing & Credential Automation for Healthcare
                  Professionals
                </h3>
                <p className="text-md sm:text-xl leading-[23px] text-[#484848]">
                  Accelerating healthcare licensing with AI-powered automation,
                  ETHRAH AI's credential solution streamlines and secures
                  professional verification for regulatory authorities
                  worldwide.
                </p>
                <button className="h-8 px-4 rounded-lg bg-[#F2F2F2] text-[#141414] text-sm font-medium leading-[21px] hover:bg-[#E5E8EB] transition-colors"
                onClick={()=> navigate("/case-studies/automation")}>
                  View Full Case Study →
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f288c8134d45eabc80c3598c2265d0dc52dd1999?width=1024"
                  alt="Healthcare AI Illustration"
                  className="w-full max-w-[512px] h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7a99c2764a7a12d9ea5cef679871eef084b54442?width=1024"
                  alt="Maritime AI Illustration"
                  className="w-full max-w-[512px] h-auto"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-[30px] font-bold leading-[34px] text-[#141414]">
                  Transforming maritime operations through real-time AI
                  insights.
                </h3>
                <p className="text-md sm:text-xl leading-[23px] text-[#484848]">
                  Ethrah AI's intelligent ship tracking solution revolutionizes
                  fleet management with real-time, AI-powered insights. By
                  combining live tracking, manual data input, and advanced
                  analytics, it transforms complex maritime data into actionable
                  intelligence — helping ship owners worldwide enhance
                  efficiency, reduce operational costs, and achieve complete
                  transparency across their fleets.
                </p>
                <button className="h-8 px-4 rounded-lg bg-[#F2F2F2] text-[#141414] text-sm font-medium leading-[21px] hover:bg-[#E5E8EB] transition-colors"
                onClick={()=> navigate("/case-studies/maritime")}>
                  View Full Case Study →
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-[30px] font-bold leading-[34px] text-[#141414]">
                  Intelligent Algorithmic Trading Platform
                </h3>
                <p className="text-md sm:text-xl leading-[21px] text-[#484848]">
                  Developing a sophisticated trading platform with advanced
                  algorithms for optimized investment strategies.
                </p>
                <button
                  className="h-8 px-4 rounded-lg bg-[#F2F2F2] text-[#141414] text-sm font-medium leading-[21px] hover:bg-[#E5E8EB] transition-colors"
                  onClick={() =>
                    toast({
                      title: "Coming soon",
                      description:
                        "This section is under maintenance and will be available soon.",
                    })
                  }
                >
                  View Full Case Study →
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e1c3258b5a1a24026911ae5217c0a6f5896fcfb8?width=1024"
                  alt="Trading Platform AI Illustration"
                  className="w-full max-w-[512px] h-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
