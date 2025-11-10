import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CaseStudies1() {
  const [activeTab, setActiveTab] = useState<"automation" | "finance">(
    "automation"
  );
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />

      <main className="max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <div className="px-4 sm:px-6 md:px-10 pt-[64px] md:pt-[88px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight md:leading-[64px] text-[#141414] mb-8 md:mb-[68px]">
            Case Studies
          </h1>

          {/* Tabs */}
          <div className="border-b border-[#E0E0E0] mb-8 md:mb-[63px]">
            <div className="flex gap-6 md:gap-8 px-2 md:px-4 overflow-x-auto">
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
                onClick={() => navigate("/case-studies?tab=trading")}
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

        <MaritimeContent />
        {/* {activeTab === "automation" ? (
          <AutomationContent />
        ) : (
          <FinanceContent />
        )} */}
      </main>

      <Footer />
    </div>
  );
}

function MaritimeContent() {
  return (
    <>
      {/* Main Title */}
      <div className="flex flex-col items-center justify-center gap-3 mt-16 px-4 lg:px-0">
        <h2 className="text-[30px] font-bold text-[#141414] leading-[34px] text-center max-w-[790px]">
          Real-Time Maritime Vessel Tracking Platform
        </h2>
        <p className="text-xl text-[#484848] leading-[25px] text-center max-w-[888px] mt-3">
          How ETHRAH AI Built an Enterprise-Grade GPS Monitoring System
        </p>
        <p className="text-base text-[#737373] leading-[21px] text-center max-w-[712px] mt-4">
          A major shipping company achieved 98% user adoption and 82%
          administrative reduction in 9 months
        </p>
      </div>

      {/* Key Metrics Section */}
      <section className="bg-[#FEFEFE]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[35px] px-4 lg:px-4">
            {/* Metric 1 */}
            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                82%
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                Reduction in Admin Time
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                From 2.5 hours to 45 minutes daily
              </p>
            </div>

            {/* Metric 2 */}
            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                98%
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                User Adoption
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                Within first 2 weeks
              </p>
            </div>

            {/* Metric 3 */}
            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                $860K+
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                Annual Benefit
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                Fuel, labor, penalties, efficiency
              </p>
            </div>

            {/* Metric 4 */}
            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                72
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                NPS Score
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                Enterprise-class satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="bg-[#FEFEFE] py-16">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <h2 className="text-[25px] font-bold text-[#000] leading-[30px] sm:leading-[21px] text-center mb-8">
            The Challenge: Maritime Operations Without Visibility
          </h2>
          <p className="text-md sm:text-xl text-[#484848] leading-[25px] text-center max-w-[947px] mx-auto mb-12">
            The maritime industry faces unique operational challenges. Ships
            operate in environments with unreliable connectivity, varying crew
            skill levels, and strict regulatory requirements. Traditional
            software solutions fail to address these industry-specific
            constraints.
          </p>

          {/* Quote */}
          <div className="max-w-[742px] mx-auto mb-12 p-4 rounded-lg border-l-4 border-[#000] bg-[#FAFAFA]">
            <p className="text-md sm:text-xl italic text-[#000] sm:leading-[33px]">
              "We were operating blind. By the time we received position reports
              from our vessels, the information was already hours old. We needed
              real-time visibility, but existing solutions weren't built for
              maritime constraints."
            </p>
          </div>

          {/* Challenge Grid with Images */}
          <div className="flex flex-col items-center">
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 p-5 sm:p-10 items-center gap-6">
              <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6">
                <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-4">
                  No Real-Time Visibility
                </h3>
                <p className="text-sm text-[#737373] leading-[21px] text-center">
                  Ship owners relied on periodic manual reports. Information was
                  hours old by the time it reached shore management.
                </p>
              </div>
              <img
                src="/img/1.png"
                alt="No Real-Time Visibility"
                className=""
              />
            </div>

            <div className="grid sm:grid-cols-2 p-5 sm:p-10 items-center gap-6">
              <img
                src="/img/2.png"
                alt="Manual Data Entry"
                className="max-sm:order-last"
              />
              <div className=" rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6">
                <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-4">
                  Manual Data Entry
                </h3>
                <p className="text-sm text-[#737373] leading-[21px] text-center">
                  All operational data manually recorded on paper, then
                  transcribed. Time-consuming and error-prone.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 p-5 sm:p-10 items-center gap-6">
              <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6">
                <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-4">
                  Documentation Chaos
                </h3>
                <p className="text-sm text-[#737373] leading-[21px] text-center">
                  Maritime documents scattered across systems. Finding required
                  documents took 30+ minutes.
                </p>
              </div>
              <img src="/img/3.png" alt="Documentation Chaos" />
            </div>

            <div className="grid sm:grid-cols-2 p-5 sm:p-10 items-center gap-6">
              <img
                src="/img/4.png"
                alt="Communication Barriers"
                className="max-sm:order-last"
              />
              <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6">
                <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-4">
                  Communication Barriers
                </h3>
                <p className="text-sm text-[#737373] leading-[21px] text-center">
                  Critical messages between vessel and shore took 2-4 hours to
                  transmit.
                </p>
              </div>
            </div>

            {/* Row 3 - Center the last card */}
            <div className="grid sm:grid-cols-2 p-5 sm:p-10 items-center gap-6">
              <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6">
                <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-4">
                  Compliance Vulnerabilities
                </h3>
                <p className="text-sm text-[#737373] leading-[21px] text-center">
                  Without audit trails, proving IMO compliance was difficult.
                  Risk of penalties.
                </p>
              </div>
              <img src="/img/5.png" alt="Compliance Vulnerabilities" />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="bg-[#FEFEFE] py-16">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <h2 className="text-[25px] font-bold text-[#000] leading-[21px] text-center mb-8">
            The Solution: Seven-Component Maritime Platform
          </h2>
          <p className="text-md sm:text-xl text-[#484848] leading-[25px] text-center max-w-[947px] mx-auto mb-12">
            ETHRAH AI developed a comprehensive maritime platform specifically
            designed for the constraints of vessel operations. The solution
            addresses connectivity challenges, user experience, regulatory
            compliance, and security requirements in a single integrated system.
          </p>

          {/* Components Grid 1 */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-[1029px] mx-auto">
            <div className="flex justify-center">
              <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                  1
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                  2
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                  3
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                  4
                </span>
              </div>
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
            {/* Component 1 */}

            <div className="flex sm:flex-col gap-5 items-center">
              <div className="flex justify-center">
                <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                    1
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] p-6 h-full w-full">
                <h3 className="text-base font-bold text-[#000] leading-[27px] mb-3">
                  GPS Tracking with Spoofing Detection
                </h3>
                <ul className="text-sm text-[#000] leading-[21px] space-y-1">
                  <li>Real-time positioning every 60 seconds</li>
                  <li>Multi-layer security validation</li>
                  <li>VPN and speed anomaly detection</li>
                  <li>Backup positioning systems</li>
                </ul>
              </div>
            </div>

            {/* Component 2 */}
            <div className="flex sm:flex-col gap-5 items-center">
              <div className="flex justify-center">
                <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                    2
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] p-6 h-full w-full">
                <h3 className="text-base font-bold text-[#000] leading-[27px] mb-3">
                  Offline-First Synchronization
                </h3>
                <ul className="text-sm text-[#000] leading-[21px] space-y-1">
                  <li>Local database (48+ hours storage)</li>
                  <li>Intelligent queue prioritization</li>
                  <li>Auto-sync on reconnection</li>
                  <li>Conflict resolution mechanisms</li>
                </ul>
              </div>
            </div>

            {/* Component 3 */}
            <div className="flex sm:flex-col gap-5 items-center h-full">
              <div className="flex justify-center">
                <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                    3
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] p-6 h-full w-full">
                <h3 className="text-base font-bold text-[#000] leading-[27px] mb-3">
                  Digital Noon Reports
                </h3>
                <ul className="text-sm text-[#000] leading-[21px] space-y-1">
                  <li>IMO-compliant digital forms</li>
                  <li>Automated calculations</li>
                  <li>82% time reduction</li>
                  <li>Complete report history</li>
                </ul>
              </div>
            </div>

            {/* Component 4 */}
            <div className="flex sm:flex-col gap-5 items-center">
              <div className="flex justify-center">
                <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                    4
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] p-6 h-full w-full">
                <h3 className="text-base font-bold text-[#000] leading-[27px] mb-3">
                  Centralized Document Management
                </h3>
                <ul className="text-sm text-[#000] leading-[21px] space-y-1">
                  <li>Cloud storage with encryption</li>
                  <li>OCR scanning support</li>
                  <li>Expiration alerts</li>
                  <li>Complete audit trails</li>
                </ul>
              </div>
            </div>

            {/* Component 5 */}
            <div className="flex sm:flex-col gap-5 items-center">
              <div className="flex justify-center">
                <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                    5
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] p-6 h-full w-full">
                <h3 className="text-base font-bold text-[#000] leading-[27px] mb-3">
                  Integrated Communication
                </h3>
                <ul className="text-sm text-[#000] leading-[21px] space-y-1">
                  <li>Real-time chat and audio calls</li>
                  <li>File attachment support</li>
                  <li>Offline message queuing</li>
                  <li>Priority flagging system</li>
                </ul>
              </div>
            </div>

            {/* Component 6 */}
            <div className="flex sm:flex-col gap-5 items-center">
              <div className="flex justify-center">
                <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                    6
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] p-6 h-full w-full">
                <h3 className="text-base font-bold text-[#000] leading-[27px] mb-3">
                  Live Operational Dashboard
                </h3>
                <ul className="text-sm text-[#000] leading-[21px] space-y-1">
                  <li>Real-time vessel positioning</li>
                  <li>Speed and fuel indicators</li>
                  <li>Historical trend analysis</li>
                  <li>Predictive calculations</li>
                </ul>
              </div>
            </div>

            {/* Component 7 */}
            <div className="flex sm:flex-col gap-5 items-center h-full">
              <div className="flex justify-center">
                <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-[#000] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#FFFEFE] text-center leading-5">
                    7
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] p-6 h-full w-full">
                <h3 className="text-base font-bold text-[#000] leading-[27px] mb-3">
                  Role-Based Access Control
                </h3>
                <ul className="text-sm text-[#000] leading-[21px] space-y-1">
                  <li>6 customizable user roles</li>
                  <li>Granular permissions</li>
                  <li>Admin-level overrides</li>
                  <li>Complete audit logging</li>
                </ul>
              </div>
            </div>
          </div>

          {/* </div> */}
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-[#FEFEFE] py-16">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <h2 className="text-[25px] font-bold text-[#000] leading-[21px] text-center mb-4">
            Transforming Maritime Operations: Results
          </h2>
          <p className="text-xl text-[#484848] leading-[25px] text-center max-w-[888px] mx-auto mb-12">
            Operational Improvements
          </p>

          {/* Results Table */}
          <div className="max-w-[1029px] mx-auto overflow-x-auto">
            <table className="min-w-[700px] sm:min-w-full w-full border-collapse">
              <thead>
                <tr className="border border-[#DBDBDB] bg-[#FAFAFA]">
                  <th className="text-sm sm:text-base md:text-xl font-bold text-[#000] leading-[21px] text-left p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    Metric
                  </th>
                  <th className="text-sm sm:text-base md:text-xl font-bold text-[#000] leading-[21px] text-left p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    Before
                  </th>
                  <th className="text-sm sm:text-base md:text-xl font-bold text-[#000] leading-[21px] text-left p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    After
                  </th>
                  <th className="text-sm sm:text-base md:text-xl font-bold text-[#000] leading-[21px] text-left p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    Improvement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-[#DBDBDB] bg-[#FAFAFA]">
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    Noon Report Time
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    2.5 hours
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    45 minutes
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-bold text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    82% reduction
                  </td>
                </tr>
                <tr className="border border-[#DBDBDB] bg-[#FAFAFA]">
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    Document Search
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    30+ minutes
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    &lt;10 seconds
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-bold text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    99% faster
                  </td>
                </tr>
                <tr className="border border-[#DBDBDB] bg-[#FAFAFA]">
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    Position Updates
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    2x daily
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    Every minute
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-bold text-[#000] leading-[23px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    1,440x more frequent
                  </td>
                </tr>
                <tr className="border border-[#DBDBDB] bg-[#FAFAFA]">
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    Response Time
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    2-4 hours
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-medium text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    &lt;5 minutes
                  </td>
                  <td className="text-sm sm:text-base md:text-xl font-bold text-[#000] leading-[21px] p-4 sm:p-6 md:p-7 whitespace-nowrap">
                    98% improvement
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Financial Impact Section */}
      <section className="bg-[#FEFEFE] sm:py-16">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <h2 className="text-[25px] font-bold text-[#000] leading-[21px] text-center mb-16">
            Financial Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[665px] mx-auto">
            {/* Row 1 */}
            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[42px] text-center mt-10 mb-8">
                $180,000
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                Fuel Optimization
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                Data-driven route planning and performance analysis
              </p>
            </div>

            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                $60,000
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                Labor Reduction
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                Automation eliminated 1 FTE shore management position
              </p>
            </div>

            {/* Row 2 */}
            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                $300-500K
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                Penalty Avoidance
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                Zero port state control deficiencies vs. 40% before
              </p>
            </div>

            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                $120,000
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                Operational Efficiency
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                Faster coordination, fewer delays, better decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Adoption Section */}
      <section className="bg-[#FEFEFE] py-16">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <h2 className="text-[25px] font-bold text-[#000] leading-[21px] text-center mb-16">
            User Adoption
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1155px] mx-auto">
            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                98%
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                User Adoption
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                Within 2 weeks
              </p>
            </div>

            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                87%
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                Daily Active Users
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center invisible">
                Placeholder
              </p>
            </div>

            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                72
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                NPS Score
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                Enterprise-class
              </p>
            </div>

            <div className="rounded-2xl border border-[#DBDBDB] bg-[#FAFAFA] p-6 flex flex-col items-center">
              <div className="text-[40px] font-bold text-[#000] leading-[21px] text-center mt-10 mb-8">
                94%
              </div>
              <h3 className="text-base font-bold text-[#141414] leading-5 text-center mb-2">
                Training Success
              </h3>
              <p className="text-sm text-[#737373] leading-[21px] text-center">
                After 1 session
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="bg-[#FEFEFE] py-16">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <h2 className="text-[25px] font-bold text-[#000] leading-[21px] text-center mb-16">
            Key Learnings & Industry Insights
          </h2>

          <div className="max-w-[929px] mx-auto space-y-8">
            {/* Learning 1 */}
            <div className="rounded-lg border-l-4 border-[#000] bg-[#FAFAFA] p-4">
              <h3 className="text-xl font-bold text-[#000] leading-[33px] mb-3">
                Industry-Specific Solutions Win
              </h3>
              <p className="text-md sm:text-xl font-light text-[#000] leading-[33px]">
                The maritime industry has unique constraints that don't exist in
                other sectors: unreliable connectivity, varying crew technical
                skill levels, strict regulatory requirements, and safety
                criticality. Generic fleet management solutions fail because
                they don't account for these maritime realities. Companies that
                invest in deep domain expertise build dramatically better
                solutions than those attempting to adapt off-the-shelf
                platforms.
              </p>
            </div>

            {/* Learning 2 */}
            <div className="rounded-lg border-l-4 border-[#000] bg-[#FAFAFA] p-4">
              <h3 className="text-xl font-bold text-[#000] leading-[33px] mb-3">
                Connectivity is a Feature, Not an Edge Case
              </h3>
              <p className="text-md sm:text-xl font-light text-[#000] leading-[33px]">
                In maritime operations, connectivity is assumed absent—not as an
                exception, but as the norm. This fundamentally changes
                architecture. Offline-first functionality isn't a nice-to-have;
                it's essential. This architectural principle extends beyond
                maritime to developing markets, field operations, emergency
                response, and any application where connectivity cannot be
                guaranteed.
              </p>
            </div>

            {/* Learning 3 */}
            <div className="rounded-lg border-l-4 border-[#000] bg-[#FAFAFA] p-4">
              <h3 className="text-xl font-bold text-[#000] leading-[33px] mb-3">
                Regulatory Compliance Drives Adoption
              </h3>
              <p className="text-md sm:text-xl font-light text-[#000] leading-[33px]">
                The features with highest user adoption weren't the most
                technically sophisticated—they were features directly addressing
                urgent regulatory compliance needs (digital noon reports,
                document management, audit trails). Users are motivated by
                urgent pain (regulatory compliance risk) more than potential
                future benefits. Applications that solve immediate regulatory
                problems gain rapid adoption.
              </p>
            </div>

            {/* Learning 4 */}
            <div className="rounded-lg border-l-4 border-[#000] bg-[#FAFAFA] p-4">
              <h3 className="text-xl font-bold text-[#000] leading-[33px] mb-3">
                Security Must Be Built In From the Beginning
              </h3>
              <p className="text-md sm:text-xl font-light text-[#000] leading-[33px]">
                GPS spoofing detection wasn't added as a feature after launch—it
                was table-stakes from conception. In security-sensitive
                industries, users prioritize security over convenience every
                time. Security should be designed into architecture from the
                beginning, not bolted on as an afterthought. This principle
                applies to healthcare, finance, supply chain, and any industry
                handling critical or sensitive data.
              </p>
            </div>

            {/* Learning 5 */}
            <div className="rounded-lg border-l-4 border-[#000] bg-[#FAFAFA] p-4">
              <h3 className="text-xl font-bold text-[#000] leading-[33px] mb-3">
                Phased Implementation Dramatically Reduces Risk
              </h3>
              <p className="text-md sm:text-xl font-light text-[#000] leading-[33px]">
                The four-phase approach (MVP, Advanced Features, Optimization,
                Launch) proved invaluable. Rather than attempting to deliver all
                features simultaneously, phasing allowed continuous user
                feedback and course correction. Issues identified in Phase 1
                were addressed before Phase 2. Phase 3 optimization prevented
                problems in production. Agile, iterative development is
                fundamentally a risk management strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maritime Operations Section */}
      <section className="bg-[#FEFEFE] py-16">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <h2 className="text-[30px] font-bold text-[#000] sm:leading-[21px] text-center mb-8">
            Maritime Operations, Reimagined
          </h2>
          <p className="text-lg sm:text-xl text-[#484848] leading-[25px] text-center max-w-[947px] mx-auto">
            The maritime industry demands specialized solutions. ETHRAH AI
            combines deep industry knowledge with enterprise-grade technology to
            deliver platforms that work in the real world—even when connectivity
            doesn't.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-b border-[#000] border-opacity-50 bg-[#FDFDFD]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="max-w-[808px] mx-auto py-20 px-10 flex flex-col justify-end items-start gap-8">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex flex-col items-center w-full max-w-[720px] mx-auto">
                <h2 className="text-4xl font-black text-[#141414] leading-[45px] tracking-[-1px] text-center mb-2">
                  Ready to Transform Your Maritime Operations?
                </h2>
              </div>
            </div>
            <p className="text-xl text-[#484848] leading-[25px] text-center w-full">
              Let's discuss how we can build a custom solution for your specific
              needs.
            </p>
            <div className="flex justify-center items-start w-full">
              <button className="h-12 min-w-[84px] max-w-[480px] px-5 bg-[#141414] text-[#FAFAFA] text-base font-bold leading-6 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Study Section */}
      <section className="border-t border-b border-[#000] border-opacity-50 bg-[#FDFDFD] py-16">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1034px] mx-auto">
            <div>
              <h3 className="text-[30px] font-bold text-[#141414] leading-[34px] mb-6">
                AI-Powered Licensing & Credential Automation for Healthcare
                Professionals
              </h3>
              <p className="text-md sm:text-xl text-[#484848] leading-[23px] mb-8">
                Accelerating healthcare licensing with AI-powered automation,
                ETHRAH AI's credential solution streamlines and secures
                professional verification for regulatory authorities worldwide.
              </p>
              <button
                className="h-8 min-w-[84px] max-w-[480px] px-4 bg-[#F2F2F2] text-[#141414] text-sm font-medium leading-[21px] rounded-lg hover:bg-[#E5E5E5] transition-colors"
                onClick={() =>
                  (window.location.href = "/case-studies/automation")
                }
              >
                View Full Case Study →
              </button>
            </div>
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f288c8134d45eabc80c3598c2265d0dc52dd1999?width=1024"
                alt="AI-Powered Healthcare Licensing"
                className="w-full max-w-[512px] aspect-square rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// function FinanceContent() {
//   return (
//     <>
//       {/* Main Title */}
//       <div className="px-4 md:px-10 mb-[88px]">
//         <h2 className="text-2xl md:text-[30px] font-bold leading-[34px] text-[#141414] text-center max-w-[790px] mx-auto mb-[88px]">
//           AI-Powered Trading & Finance Solutions
//         </h2>

//         <p className="text-lg md:text-xl leading-[25px] text-[#484848] text-center max-w-[888px] mx-auto px-4">
//           Ethrah AI's intelligent ship tracking solution revolutionizes fleet
//           management with real-time, AI-powered insights. By combining live
//           tracking, manual data input, and advanced analytics, it transforms
//           complex maritime data into actionable intelligence.
//         </p>
//       </div>

//       {/* Preview Section */}
//       <div className="px-4 md:px-10 mb-[157px]">
//         <div className="flex flex-col md:flex-row gap-8 md:gap-[96px] max-w-[1087px] mx-auto">
//           <img
//             src="https://api.builder.io/api/v1/image/assets/TEMP/7a99c2764a7a12d9ea5cef679871eef084b54442?width=1024"
//             alt="Maritime Operations"
//             className="w-full md:w-[512px] h-auto md:h-[512px]"
//           />

//           <div className="flex flex-col justify-center">
//             <h3 className="text-2xl md:text-[30px] font-bold leading-[34px] text-[#141414] mb-8 md:mb-[87px]">
//               Transforming maritime operations through real-time AI insights.
//             </h3>

//             <p className="text-base md:text-xl leading-[21px] text-[#484848] mb-[16px]">
//               Ethrah AI's intelligent ship tracking solution revolutionizes
//               fleet management with real-time, AI-powered insights. By combining
//               live tracking, manual data input, and advanced analytics, it
//               transforms complex maritime data into actionable intelligence —
//               helping ship owners worldwide enhance efficiency, reduce
//               operational costs, and achieve complete transparency across their
//               fleets.
//             </p>

//             <button
//               className="w-fit px-4 h-8 rounded-lg bg-[#F2F2F2] text-[#141414] font-medium text-sm leading-[21px] mt-8 md:mt-[47px]"
//               onClick={() => (window.location.href = "/case-studies/maritime")}
//             >
//               View Full Case Study →
//             </button>
//           </div>
//         </div>

//         <p className="text-base leading-[21px] text-[#737373] text-center mt-12 md:mt-[86px]">
//           Transforming maritime operations through real-time AI insights.
//         </p>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-white py-12 md:py-20 px-4 md:px-10 mb-[60px] md:mb-[114px]">
//         <div className="max-w-[808px] mx-auto text-center">
//           <h2 className="text-2xl md:text-4xl font-black leading-tight md:leading-[45px] text-[#141414] mb-6 md:mb-8 tracking-[-1px]">
//             Ready to Transform Your Business With AI?
//           </h2>

//           <button className="h-12 px-5 rounded-lg bg-[#141414] text-[#FAFAFA] font-bold text-base leading-6">
//             Book Free Consultation
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// Helper Components
function InsightCard({ label, text }: { label: string; text: string }) {
  return (
    <div className="w-full md:w-[295px] p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
      <p className="text-[#737373] font-medium text-base leading-5 mb-1">
        {label}
      </p>
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
          <li key={i} className="text-black text-sm leading-[21px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
      <h4 className="text-black font-bold text-base leading-[27px] mb-1">
        {title}
      </h4>
      <p className="text-black text-sm leading-[21px]">{description}</p>
    </div>
  );
}

function TechStackCircle({
  title,
  subtitle,
  style,
}: {
  title: string;
  subtitle: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="absolute w-[152px] h-[152px] rounded-full border-4 border-black bg-white flex items-center justify-center"
      style={style}
    >
      <div className="text-center px-4">
        <p className="text-black font-bold text-[19px] leading-5">{title}</p>
        <p className="text-black font-medium text-[17px] leading-5 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function StepNumber({ number }: { number: string }) {
  return (
    <div className="w-[65px] h-[49px] rounded-lg border border-[#DBDBDB] bg-black flex items-center justify-center">
      <span className="text-[#FFFEFE] font-bold text-lg leading-5">
        {number}
      </span>
    </div>
  );
}

function WorkflowCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex md:flex-col items-center gap-5 ">
      <div className="w-[65px] h-[60px] rounded-lg border border-[#DBDBDB] bg-black flex items-center justify-center">
        <span className="text-[#FFFEFE] font-bold text-lg leading-5">
          {number}
        </span>
      </div>
      <div className="p-6 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] h-full">
        <h4 className="text-black font-bold text-base leading-[27px] text-center mb-1">
          {title}
        </h4>
        <p className="text-black text-sm leading-[21px]">{description}</p>
      </div>
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

function ImpactCard({
  metric,
  title,
  description,
}: {
  metric: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="p-6 rounded border border-black bg-black mb-[-1px]">
        <h4 className="text-white font-bold text-base leading-5 text-center">
          {metric}
        </h4>
      </div>
      <div className="p-6 rounded border border-[#DBDBDB] bg-[#FAFAFA]">
        <h5 className="text-black font-bold text-base leading-5 text-center mb-1">
          {title}
        </h5>
        <p className="text-black font-medium text-sm leading-5 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

function MarketTable({
  title,
  rows,
}: {
  title: string;
  rows: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="p-6 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
      <h4 className="text-black font-medium text-base leading-5 mb-6">
        {title}
      </h4>
      {rows.map((row, i) => (
        <div key={i}>
          {i > 0 && <div className="h-px bg-[#484848] my-4" />}
          <div className="flex justify-between">
            <span className="text-black text-sm leading-[21px]">
              {row.label}
            </span>
            <span className="text-black text-sm leading-[21px]">
              {row.value}
            </span>
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
