import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CaseStudies1() {
  const [activeTab, setActiveTab] = useState<"automation" | "finance">("automation");

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      
      <main className="max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <div className="px-4 md:px-10 pt-[88px]">
          <h1 className="text-5xl md:text-[75px] font-black leading-tight md:leading-6 text-[#141414] mb-[68px]">
            Case Studies
          </h1>
          
          {/* Tabs */}
          <div className="border-b border-[#E0E0E0] mb-[63px]">
            <div className="flex gap-8 px-4">
              <button
                onClick={() => setActiveTab("automation")}
                className={`py-4 pb-[13px] font-bold text-sm leading-[21px] border-b-[3px] transition-all ${
                  activeTab === "automation"
                    ? "text-[#141414] border-[#141414]"
                    : "text-[#757575] border-transparent hover:text-[#141414]"
                }`}
              >
                Automation
              </button>
              <button
                // onClick={() => setActiveTab("finance")}
                onClick={()=> window.location.href="/case-studies"}
                className={`py-4 pb-[13px] font-bold text-sm leading-[21px] border-b-[3px] transition-all ${
                  activeTab === "finance"
                    ? "text-[#141414] border-[#141414]"
                    : "text-[#757575] border-transparent hover:text-[#141414]"
                }`}
              >
                Trading & Finance
              </button>
            </div>
          </div>
        </div>

        {activeTab === "automation" ? <AutomationContent /> : <FinanceContent />}
      </main>

      <Footer />
    </div>
  );
}

function AutomationContent() {
  return (
    <>
      {/* Main Title */}
      <div className="px-4 md:px-10 mb-[88px]">
        <h2 className="text-2xl md:text-[30px] font-bold leading-[34px] text-[#141414] text-center max-w-[790px] mx-auto mb-[88px]">
          AI-Powered Licensing & Credential Automation for Healthcare Professionals
        </h2>

        <p className="text-lg md:text-xl leading-[25px] text-[#484848] text-center max-w-[888px] mx-auto px-4">
          Ethrah AI streamlines healthcare professional verification and licensing across 43+ countries through AI-powered automation — reducing costs, eliminating delays, and ensuring global compliance.
        </p>
      </div>

      {/* Quick Insights */}
      <div className="px-4 md:px-10 mb-[157px]">
        <h3 className="text-xl md:text-[25px] font-bold leading-[21px] text-black text-center mb-[26px]">
          Quick Insights
        </h3>

        <div className="flex justify-center mb-[80px] md:mb-[160px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dc31077d70492b996f8e2f2c0545ef18aa1ee6a2?width=1024"
            alt="Quick Insights"
            className="w-full max-w-[512px] h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center max-w-[971px] mx-auto mb-[50px]">
          <InsightCard
            label="Challenge"
            text="Manual credential verification processes causing delays, errors, and inefficiencies"
          />
          <InsightCard
            label="Solution"
            text="AI-powered automation platform with OCR, NLP, RPA, and ML integration"
          />
          <InsightCard
            label="Key Technologies"
            text="AI-OCR, Natural Language Processing, Robotic Process Automation, Machine Learning, API Integration"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center max-w-[971px] mx-auto">
          <InsightCard
            label="Validation"
            text="250+ checkpoints, 1M+ records"
          />
          <InsightCard
            label="Impact: Reach"
            text="Expansion from 6 to 43 countries"
          />
          <InsightCard
            label="Impact: Speed"
            text="Processing time reduced from weeks to micro second"
          />
        </div>
      </div>

      {/* The Challenge */}
      <div className="px-4 md:px-10 mb-[157px]">
        <h3 className="text-xl md:text-[25px] font-bold leading-[21px] text-black text-center mb-[51px]">
          The Challenge
        </h3>

        <p className="text-lg md:text-xl leading-[25px] text-[#484848] text-center max-w-[888px] mx-auto mb-[80px] md:mb-[129px] px-4">
          Healthcare regulatory authorities face mounting pressure to process credential verifications efficiently while maintaining rigorous standards. The traditional manual approach creates significant bottlenecks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[35px] max-w-[955px] mx-auto mb-[80px] md:mb-[305px]">
          <ChallengeCard
            title="Administrative Burden"
            items={[
              "Incomplete or inaccurate applicant information",
              "Multiple website navigation requirements",
              "Extensive back-and-forth communications",
              "Manual document review consuming resources"
            ]}
          />
          <ChallengeCard
            title="Process Complexity"
            items={[
              "Inadequate applicant knowledge of requirements",
              "Lack of clarity on eligibility criteria",
              "Third-party consultant costs (50-100% markup)",
              "Non-eligible candidates applying unnecessarily"
            ]}
          />
          <ChallengeCard
            title="Operational Inefficiency"
            items={[
              "Delayed processing impacting time-to-practice",
              "High risk of human error at scale",
              "Inability to scale for 65M+ global clinicians",
              "Quality sacrificed for speed"
            ]}
          />
        </div>

        <div className="max-w-[955px] mx-auto">
          <ChallengeCard
            title="Market Context"
            items={[
              "18M projected healthcare worker shortage by 2030",
              "GCC population up 10x, workforce only 61% — led by UAE trends",
              "75% of workers from just 2 countries — led by UAE trends",
              "Need to double medical workforce by 2030"
            ]}
          />
        </div>
      </div>

      {/* The Solution */}
      <div className="px-4 md:px-10 mb-[157px]">
        <h3 className="text-xl md:text-[25px] font-bold leading-[21px] text-black text-center mb-[51px]">
          The Solution
        </h3>

        <p className="text-lg md:text-xl leading-[25px] text-[#484848] text-center max-w-[888px] mx-auto mb-[80px] md:mb-[154px] px-4">
          An intelligent credential automation platform that leverages cutting-edge AI technologies to transform the healthcare professional licensing workflow. The system validates credentials against 250+ checkpoints across 1M+ database records, ensuring thorough verification while dramatically reducing processing time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[24px] max-w-[1029px] mx-auto">
          <TechCard
            title="AI-OCR"
            description="Automatically parses and extracts data from certificates, transcripts, and identification documents"
          />
          <TechCard
            title="Natural Language Processing"
            description="Cross-checks information against regulatory guidelines with contextual understanding"
          />
          <TechCard
            title="Robotic Process Automation"
            description="Securely transmits validated data through encrypted channels to relevant authorities"
          />
          <TechCard
            title="Machine Learning"
            description="Validates 250+ checkpoints against 1M+ database for compliance verification"
          />
        </div>

        <div className="max-w-[1029px] mx-auto mt-[19px]">
          <TechCard
            title="API Integration"
            description="Acquires data from educational institutions, certification bodies, and employment records"
          />
        </div>
      </div>

      {/* AI Tech Stack */}
      <div className="px-4 md:px-10 mb-[157px]">
        <h3 className="text-xl md:text-[25px] font-bold leading-[21px] text-black text-center mb-[84px]">
          AI Tech Stack
        </h3>

        <div className="relative w-full max-w-[802px] h-[400px] md:h-[734px] mx-auto hidden md:block">
          {/* Central circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[170px] h-[170px] rounded-full bg-black flex items-center justify-center">
            <p className="text-white text-[19px] font-bold leading-[25px] text-center px-4">
              AI-Powered Credential Automation
            </p>
          </div>

          {/* Surrounding circles */}
          <TechStackCircle
            title="ML"
            subtitle="250+ Checkpoints validation vs 1M+D8"
            style={{ left: "92px", top: "5px" }}
          />
          <TechStackCircle
            title="RPA"
            subtitle="Credential Automation"
            style={{ left: "512px", top: "0px" }}
          />
          <TechStackCircle
            title="API Integration"
            subtitle="Multi-source Data Acquisition"
            style={{ left: "0px", top: "297px" }}
          />
          <TechStackCircle
            title="AI-OCR"
            subtitle="Doc parsing & data extraction"
            style={{ left: "295px", top: "523px" }}
          />
          <TechStackCircle
            title="NLP"
            subtitle="Regulatory guide cross checking"
            style={{ left: "591px", top: "297px" }}
          />

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 802 734">
            <line x1="167" y1="80" x2="316" y2="235" stroke="black" strokeWidth="1" />
            <line x1="400" y1="320" x2="540" y2="320" stroke="black" strokeWidth="1" />
            <line x1="175" y1="370" x2="316" y2="370" stroke="black" strokeWidth="1" />
            <line x1="380" y1="598" x2="316" y2="420" stroke="black" strokeWidth="1" />
            <line x1="620" y1="370" x2="480" y2="370" stroke="black" strokeWidth="1" />
          </svg>
        </div>

        {/* Mobile-friendly tech stack list */}
        <div className="md:hidden space-y-4 max-w-md mx-auto">
          <div className="p-4 rounded-lg border-2 border-black bg-black text-white text-center">
            <p className="font-bold text-lg">AI-Powered Credential Automation</p>
          </div>
          <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
            <p className="font-bold mb-1">ML</p>
            <p className="text-sm">250+ Checkpoints validation vs 1M+D8</p>
          </div>
          <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
            <p className="font-bold mb-1">RPA</p>
            <p className="text-sm">Credential Automation</p>
          </div>
          <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
            <p className="font-bold mb-1">API Integration</p>
            <p className="text-sm">Multi-source Data Acquisition</p>
          </div>
          <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
            <p className="font-bold mb-1">AI-OCR</p>
            <p className="text-sm">Doc parsing & data extraction</p>
          </div>
          <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
            <p className="font-bold mb-1">NLP</p>
            <p className="text-sm">Regulatory guide cross checking</p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-4 md:px-10 mb-[157px]">
        <h3 className="text-2xl md:text-[30px] font-bold leading-[34px] text-[#141414] text-center mb-[27px]">
          How It Works
        </h3>

        <p className="text-base leading-[21px] text-[#737373] text-center max-w-[712px] mx-auto mb-[80px] md:mb-[185px] px-4">
          A streamlined four-step process that guides healthcare professionals from initial application to credential approval
        </p>

        <div className="max-w-[1029px] mx-auto">
          <div className="flex gap-4 md:gap-[89px] justify-center mb-[64px]">
            <StepNumber number="1" />
            <StepNumber number="2" />
            <StepNumber number="3" />
            <StepNumber number="4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[24px]">
            <WorkflowCard
              title="Pre-Eligibility Evaluation"
              description="Deep assessment of applicant credentials against regulatory requirements to filter non-eligible candidates upfront"
            />
            <WorkflowCard
              title="Bridge to Eligibility"
              description="Personalized guidance to help applicants address deficiencies and meet requirements efficiently"
            />
            <WorkflowCard
              title="Seamless Primary Source Verification"
              description="Automated data sharing with verification agencies and trusted sources for credential authentication"
            />
            <WorkflowCard
              title="Immediate Credential Evaluation Report"
              description="Comprehensive report delivered to applicants and authorities with verification results and recommendations"
            />
          </div>
        </div>
      </div>

      {/* Credential Automation Workflow */}
      <div className="px-4 md:px-10 mb-[157px]">
        <h3 className="text-xl md:text-[25px] font-bold leading-[21px] text-black text-center mb-[60px] md:mb-[92px]">
          Credential Automation Workflow
        </h3>

        <div className="max-w-[968px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-[84px] md:gap-y-[26px]">
          <VerificationItem text="Evaluation of professional qualifications to verify compliance with relevant regulatory authority standards" />
          <VerificationItem text="Evaluation of professional experience to confirm adherence to regulatory authority guidelines" />
          <VerificationItem text="Credential review of health licenses to confirm adherence to regulatory authority standards" />
          <VerificationItem text="Validation of good standing certificates for conformity with regulatory authority standards" />
          <VerificationItem text="Detailed evaluation framework comprising over 250 compliance checkpoints per applicant" />
          <VerificationItem text="Continuous improvement through data-driven machine learning processes" />
        </div>
      </div>

      {/* Eligibility Verification */}
      <div className="px-10 mb-[157px]">
        <h3 className="text-[25px] font-bold leading-[21px] text-black text-center mb-[51px]">
          Eligibility Verification
        </h3>
        
        <p className="text-xl leading-[25px] text-[#484848] text-center max-w-[888px] mx-auto">
          Multi-dimensional verification process ensuring comprehensive credential validation across all critical dimensions
        </p>
      </div>

      {/* Outcomes & Impact */}
      <div className="px-4 md:px-10 mb-[157px]">
        <h3 className="text-xl md:text-[25px] font-bold leading-[21px] text-black text-center mb-[40px] md:mb-[67px]">
          Outcomes & Impact
        </h3>

        <div className="max-w-[968px] mx-auto space-y-6 md:space-y-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[84px]">
            <ImpactCard
              metric="6 to 43 countries"
              title="Enhanced Global Reach"
              description="Expansion from 6 to 43 healthcare professional-providing nations"
            />
            <ImpactCard
              metric="Weeks to Microseconds"
              title="Processing Speed"
              description="Dramatically faster time-to-licensure for qualified professionals"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[84px]">
            <ImpactCard
              metric="50-100% Savings"
              title="Cost Reduction"
              description="Elimination of third-party consultant fees for applicants"
            />
            <ImpactCard
              metric="250+ Checkpoints"
              title="Quality Assurance"
              description="Consistent, thorough evaluation across all applications"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[84px]">
            <ImpactCard
              metric="65M+ Capacity"
              title="Scalability"
              description="Ability to handle global healthcare workforce without quality degradation"
            />
            <ImpactCard
              metric="Automated"
              title="Error Reduction"
              description="Minimized human error through intelligent automation"
            />
          </div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="px-4 md:px-10 mb-[157px]">
        <h3 className="text-xl md:text-[25px] font-bold leading-[21px] text-black text-center mb-[51px]">
          Market Opportunity
        </h3>

        <p className="text-lg md:text-xl leading-[25px] text-[#484848] text-center max-w-[888px] mx-auto mb-[60px] md:mb-[102px] px-4">
          Significant addressable market with immediate opportunities in the GCC region and substantial global expansion potential
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[106px] max-w-[1024px] mx-auto">
          <MarketTable
            title="GCC Region Target"
            rows={[
              { label: "UAE", value: "92,000 applicants" },
              { label: "Saudi Arabia", value: "97,750 applicants" },
              { label: "Other GCC", value: "28,750 applicants" },
              { label: "Total", value: "218,500 applicants" }
            ]}
          />
          <MarketTable
            title="Revenue Projection"
            rows={[
              { label: "GCC Region", value: "AED 19.32 Million" },
              { label: "Rest of World", value: "AED 25.41 Million" },
              { label: "Total Addressable Market", value: "AED 44.7 Million" }
            ]}
          />
        </div>
      </div>

      {/* Implementation Status */}
      <div className="px-4 md:px-10 mb-[157px]">
        <h3 className="text-xl md:text-[25px] font-bold leading-[21px] text-black text-center mb-[51px]">
          Implementation Status
        </h3>

        <p className="text-lg md:text-xl leading-[25px] text-[#484848] text-center max-w-[888px] mx-auto mb-[80px] md:mb-[146px] px-4">
          Currently in development phase, seeking partnerships with healthcare regulatory authorities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[24px] max-w-[1029px] mx-auto">
          <StatusCard label="Current Phase" value="Development" />
          <StatusCard label="Next Step" value="Partnering with Regulators & Offering an Open Public Platform" />
          <StatusCard label="Deployment" value="Platform integration with government systems" />
          <StatusCard label="Strategy" value="Phased rollout starting with GCC region" />
        </div>
      </div>

      {/* Trading & Finance Preview */}
      <div className="px-4 md:px-10 mb-[157px] border-t border-black pt-[51px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[96px] max-w-[1087px] mx-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7a99c2764a7a12d9ea5cef679871eef084b54442?width=1024"
            alt="Maritime Operations"
            className="w-full md:w-[512px] h-auto md:h-[512px]"
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-[30px] font-bold leading-[34px] text-[#141414] mb-8 md:mb-[87px]">
              Transforming maritime operations through real-time AI insights.
            </h3>

            <p className="text-base md:text-xl leading-[21px] text-[#484848] mb-[16px]">
              Ethrah AI's intelligent ship tracking solution revolutionizes fleet management with real-time, AI-powered insights. By combining live tracking, manual data input, and advanced analytics, it transforms complex maritime data into actionable intelligence — helping ship owners worldwide enhance efficiency, reduce operational costs, and achieve complete transparency across their fleets.
            </p>

            <button className="w-fit px-4 h-8 rounded-lg bg-[#F2F2F2] text-[#141414] font-medium text-sm leading-[21px] mt-8 md:mt-[47px]">
              View Full Case Study →
            </button>
          </div>
        </div>

        <p className="text-base leading-[21px] text-[#737373] text-center mt-12 md:mt-[86px]">
          Transforming licensing workflows through intelligent automation.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-12 md:py-20 px-4 md:px-10 mb-[60px] md:mb-[114px]">
        <div className="max-w-[808px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black leading-tight md:leading-[45px] text-[#141414] mb-6 md:mb-8 tracking-[-1px]">
            Ready to Transform Your Business With AI?
          </h2>

          <button className="h-12 px-5 rounded-lg bg-[#141414] text-[#FAFAFA] font-bold text-base leading-6">
            Book Free Consultation
          </button>
        </div>
      </div>
    </>
  );
}

function FinanceContent() {
  return (
    <>
      {/* Main Title */}
      <div className="px-4 md:px-10 mb-[88px]">
        <h2 className="text-2xl md:text-[30px] font-bold leading-[34px] text-[#141414] text-center max-w-[790px] mx-auto mb-[88px]">
          AI-Powered Trading & Finance Solutions
        </h2>

        <p className="text-lg md:text-xl leading-[25px] text-[#484848] text-center max-w-[888px] mx-auto px-4">
          Ethrah AI's intelligent ship tracking solution revolutionizes fleet management with real-time, AI-powered insights. By combining live tracking, manual data input, and advanced analytics, it transforms complex maritime data into actionable intelligence.
        </p>
      </div>

      {/* Preview Section */}
      <div className="px-4 md:px-10 mb-[157px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[96px] max-w-[1087px] mx-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7a99c2764a7a12d9ea5cef679871eef084b54442?width=1024"
            alt="Maritime Operations"
            className="w-full md:w-[512px] h-auto md:h-[512px]"
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-[30px] font-bold leading-[34px] text-[#141414] mb-8 md:mb-[87px]">
              Transforming maritime operations through real-time AI insights.
            </h3>

            <p className="text-base md:text-xl leading-[21px] text-[#484848] mb-[16px]">
              Ethrah AI's intelligent ship tracking solution revolutionizes fleet management with real-time, AI-powered insights. By combining live tracking, manual data input, and advanced analytics, it transforms complex maritime data into actionable intelligence — helping ship owners worldwide enhance efficiency, reduce operational costs, and achieve complete transparency across their fleets.
            </p>

            <button className="w-fit px-4 h-8 rounded-lg bg-[#F2F2F2] text-[#141414] font-medium text-sm leading-[21px] mt-8 md:mt-[47px]"
            onClick={()=> window.location.href="/case-studies/maritime"}>
              View Full Case Study →
            </button>
          </div>
        </div>

        <p className="text-base leading-[21px] text-[#737373] text-center mt-12 md:mt-[86px]">
          Transforming maritime operations through real-time AI insights.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-12 md:py-20 px-4 md:px-10 mb-[60px] md:mb-[114px]">
        <div className="max-w-[808px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black leading-tight md:leading-[45px] text-[#141414] mb-6 md:mb-8 tracking-[-1px]">
            Ready to Transform Your Business With AI?
          </h2>

          <button className="h-12 px-5 rounded-lg bg-[#141414] text-[#FAFAFA] font-bold text-base leading-6">
            Book Free Consultation
          </button>
        </div>
      </div>
    </>
  );
}

// Helper Components
function InsightCard({ label, text }: { label: string; text: string }) {
  return (
    <div className="w-full md:w-[295px] p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
      <p className="text-[#737373] font-medium text-base leading-5 mb-1">{label}</p>
      <p className="text-black font-medium text-sm leading-[21px]">{text}</p>
    </div>
  );
}

function ChallengeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
      <h4 className="text-black font-bold text-base leading-5 mb-3">{title}</h4>
      <ul className="space-y-0">
        {items.map((item, i) => (
          <li key={i} className="text-black text-sm leading-[21px]">{item}</li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
      <h4 className="text-black font-bold text-base leading-[27px] mb-1">{title}</h4>
      <p className="text-black text-sm leading-[21px]">{description}</p>
    </div>
  );
}

function TechStackCircle({ title, subtitle, style }: { title: string; subtitle: string; style: React.CSSProperties }) {
  return (
    <div className="absolute w-[152px] h-[152px] rounded-full border-4 border-black bg-white flex items-center justify-center" style={style}>
      <div className="text-center px-4">
        <p className="text-black font-bold text-[19px] leading-5">{title}</p>
        <p className="text-black font-medium text-[17px] leading-5 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

function StepNumber({ number }: { number: string }) {
  return (
    <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-black flex items-center justify-center">
      <span className="text-[#FFFEFE] font-bold text-lg leading-5">{number}</span>
    </div>
  );
}

function WorkflowCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
      <h4 className="text-black font-bold text-base leading-[27px] text-center mb-1">{title}</h4>
      <p className="text-black text-sm leading-[21px]">{description}</p>
    </div>
  );
}

function VerificationItem({ text }: { text: string }) {
  return (
    <div className="p-4 rounded-lg border-l-4 border-black bg-[#FAFAFA]">
      <p className="text-black font-medium text-sm leading-[21px]">{text}</p>
    </div>
  );
}

function ImpactCard({ metric, title, description }: { metric: string; title: string; description: string }) {
  return (
    <div>
      <div className="p-6 rounded border border-black bg-black mb-[-1px]">
        <h4 className="text-white font-bold text-base leading-5 text-center">{metric}</h4>
      </div>
      <div className="p-6 rounded border border-[#DBDBDB] bg-[#FAFAFA]">
        <h5 className="text-black font-bold text-base leading-5 text-center mb-1">{title}</h5>
        <p className="text-black font-medium text-sm leading-5 text-center">{description}</p>
      </div>
    </div>
  );
}

function MarketTable({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return (
    <div className="p-6 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
      <h4 className="text-black font-medium text-base leading-5 mb-6">{title}</h4>
      {rows.map((row, i) => (
        <div key={i}>
          {i > 0 && <div className="h-px bg-[#484848] my-4" />}
          <div className="flex justify-between">
            <span className="text-black text-sm leading-[21px]">{row.label}</span>
            <span className="text-black text-sm leading-[21px]">{row.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatusCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
      <p className="text-[#484848] text-base leading-[27px] mb-1">{label}</p>
      <p className="text-black text-sm leading-[21px]">{value}</p>
    </div>
  );
}
