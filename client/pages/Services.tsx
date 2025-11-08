import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { PiBrainLight, PiClock, PiMegaphone, PiPuzzlePiece, PiTarget, PiTelevisionSimple } from "react-icons/pi";
import { SlPeople, SlSettings } from "react-icons/sl";
import { PiRobot } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { PiShieldCheck } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline, IoCodeSlashOutline } from "react-icons/io5";
import { PiDatabase } from "react-icons/pi";
import { IoIosCloudOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";

export default function Services() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      
      {/* Hero Section */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative w-full max-w-[687px] mx-auto lg:mx-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f9c216a117b4ef2a8352ee46fef665ca8bb0ce6a?width=1374" 
              alt="AI Visualization" 
              className="w-full h-auto aspect-square"
            />
          </div>
          
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[48px] leading-tight md:leading-[60px] font-black text-[#141414] tracking-[-2px]">
              Transforming Businesses with AI
            </h1>
            <p className="text-base leading-6 text-[#141414] max-w-[437px] mx-auto lg:mx-0">
              Innovate AI provides cutting-edge artificial intelligence solutions tailored to meet the unique needs of your business. From automating processes to enhancing customer experiences, we empower you to achieve more.
            </p>
            <button className="px-4 h-10 bg-[#141414] text-[#FAFAFA] text-sm font-bold leading-[21px] rounded-lg hover:bg-[#2a2a2a] transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* About ETHRAH AI */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-4">
          About ETHRAH AI
        </h2>
        <p className="text-sm leading-6 text-[#141414] max-w-[960px]">
          Ethrah AI is a forward-thinking Dubai-based AI consultancy engineered to deliver transformative solutions for ambitious enterprises. Our specialist team of AI architects, strategists, and innovators operates with singular purpose—crafting exceptional, bespoke AI services that drive measurable business impact. We partner with clients as trusted advisors, combining deep technical expertise with genuine commitment to your success. Our vision is unambiguous: to establish Ethrah AI as the region's premier AI solutions partner, recognized for innovation, reliability, and unwavering client-centricity.
        </p>
      </section>

      {/* Our AI Services & Capabilities */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-6">
          Our AI Services & Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-3">
          {[
            {
              icon: <PiBrainLight />,
              title: "AI Consulting",
              description: "Expert guidance on AI adoption and implementation."
            },
            {
              icon: <SlSettings />,
              title: "Custom AI Model Development",
              description: "Tailored AI models to meet specific business needs."
            },
            {
              icon: <PiRobot />,
              title: "AI Integration",
              description: "Seamless integration of AI into existing systems."
            },
            {
              icon: <IoIosSearch />,
              title: "AI Strategy & Planning",
              description: "Strategic planning for AI initiatives and roadmaps."
            },
            {
              icon:<BsGraphUp />,
              title: "AI-Powered Analytics",
              description: "Advanced analytics powered by AI for deeper insights."
            },
            {
              icon: <PiShieldCheck />,
              title: "AI Security & Compliance",
              description: "Ensuring security and compliance in AI solutions."
            },
            {
              icon:<IoCodeSlashOutline />,
              title: "AI Software Development",
              description: "Developing custom AI-driven software applications."
            },
            {
              icon: <PiDatabase />,
              title: "Data Management & Engineering",
              description: "Managing and engineering data for optimal AI performance."
            },
             {
              icon: <IoIosCloudOutline />,
              title: "Cloud AI Solutions",
              description: "Leveraging cloud platforms for scalable AI solutions."
            },
            {
              icon: <GoPeople />,
              title: "AI for Customer Experience",
              description: "Enhancing customer experience with AI-powered tools."
            },
            {
              icon: <PiTelevisionSimple />,
              title: "AI for Business Intelligence",
              description: "Improving business intelligence through AI-driven analytics."
            },
            {
              icon: <PiPuzzlePiece />,
              title: "AI for Process Automation",
              description: "Automating business processes with AI for increased efficiency."
            },
            {
              icon: <IoChatbubbleEllipsesOutline />,
              title: "AI Chatbots & Virtual Assistants",
              description: "Developing AI-powered chatbots and virtual assistants."
            },
            {
              icon: <PiMegaphone />,
              title: "AI Marketing & Sales",
              description: "Transforming marketing and sales strategies with AI."
            },
            {
              icon: <PiTarget />,
              title: " AI for Targeted Advertising",
              description: " Optimizing advertising campaigns with AI-driven targeting."
            },
            {
              icon: <PiClock />,
              title: " AI Time Series Forecasting",
              description: " Predicting future trends with AI time series forecasting."
            },
          ].map((service, index) => (
            <div key={index} className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3">
              <div className="w-6 h-6 text-[#141414]">
                {service.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#141414] leading-5 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm leading-[21px] text-[#757575]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Why Choose ETHRAH AI */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-6">
          Why Choose ETHRAH AI
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-3">
          {[
            {
              icon: <PiBrainLight />,
              title: "100% AI-Focused Expertise",
              description: "Our team is entirely focused on artificial intelligence, ensuring deep expertise."
            },
            {
              icon: <PiPuzzlePiece />,
              title: "End-to-End Solutions",
              description: "We provide complete AI solutions, from consulting to deployment and support."
            },
            {
              icon: <PiClock />,
              title: "Agile and Transparent Process",
              description: "Our agile approach ensures transparency and adaptability throughout the project."
            },
            {
              icon: <PiShieldCheck />,
              title: "Latest Technologies & Tools",
              description: "We utilize the latest AI technologies and tools for optimal results."
            },
            {
              icon: <PiRobot />,
              title: "Custom Solutions for Any Industry",
              description: "We tailor AI solutions to meet the unique needs of any industry."
            },
            {
              icon: <SlPeople />,
              title: "Security and Compliance",
              description: " We prioritize security and compliance in all our AI solutions."
            },
            {
              icon:<IoCodeSlashOutline />,
              title: "Rapid Prototyping",
              description: "We offer rapid prototyping to quickly demonstrate the value of AI solutions."
            },

          ].map((item, index) => (
            <div key={index} className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3">
              <div className="w-6 h-6 text-[#141414]">
                {item.icon}
              </div>
              <div>
                </div>
              <h3 className="text-base font-bold text-[#141414] leading-5">
                {item.title}
              </h3>
              <p className="text-sm leading-[21px] text-[#757575]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] text-center mb-6">
          How We Work
        </h2>
        
        <div className="max-w-[960px] mx-auto space-y-2">
          {[
            {
              title: "Discovery & Consultation",
              description: "Understanding your business needs and goals."
            },
            {
              title: "Solution Design & Roadmap",
              description: "Designing a tailored AI solution and roadmap."
            },
            {
              title: "Data Preparation & Model Building",
              description: "Preparing data and building custom AI models."
            },
            {
              title: "Testing & Validation",
              description: "Rigorous testing and validation of AI models."
            },
            {
              title: "Deployment & Integration",
              description: "Deploying and integrating AI solutions into your systems."
            },
            {
              title: "Ongoing Support",
              description: "Providing ongoing support and maintenance for AI solutions."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex flex-col items-center pt-3 w-10">
                <div className="w-6 h-6 text-[#141414] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#141414]"></div>
                </div>
                {index < 5 && <div className="w-0.5 h-8 bg-[#E0E0E0] mt-1" />}
              </div>
              <div className="flex-1 py-3">
                <h3 className="text-base font-medium text-[#141414] leading-6">
                  {step.title}
                </h3>
                <p className="text-base text-[#757575] leading-6">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1280px] mx-auto px-10 py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] text-center mb-6">
          FAQ
        </h2>
        
        <div className="max-w-[960px] mx-auto space-y-3">
          {[
            {
              question: "How do I start an AI project with ETHRAH AI?",
              answer: "Contact us for a free consultation and we'll guide you through the process."
            },
            {
              question: "What if I don't have any data yet?",
              answer: "We can help you develop a data collection strategy and work with existing data sources."
            },
            {
              question: "How long does it take to develop an AI solution?",
              answer: "Timeline varies based on project complexity, typically ranging from weeks to months."
            },
            {
              question: "What industries do you serve?",
              answer: "We serve all industries including healthcare, finance, retail, manufacturing, and more."
            },
            {
              question: "What is your pricing model?",
              answer: "We offer flexible pricing models including project-based, retainer, and custom arrangements."
            }
          ].map((faq, index) => (
            <div 
              key={index}
              className="p-[7px_15px] rounded-lg border border-[#E0E0E0] bg-white"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full py-2"
              >
                <span className="text-sm font-medium text-[#141414] leading-[21px] text-left">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#141414] transition-transform ${
                    openFaqIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaqIndex === index && (
                <div className="pb-2">
                  <p className="text-sm leading-[21px] text-[#737373]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1280px] mx-auto px-10 py-20">
        <div className="max-w-[808px] mx-auto text-center space-y-8 bg-white p-20 rounded-lg">
          <h2 className="text-[36px] leading-[45px] font-black text-[#141414] tracking-[-1px]">
            Ready to Transform Your Business With AI?
          </h2>
          <button className="px-5 h-12 bg-[#141414] text-[#FAFAFA] text-base font-bold leading-6 rounded-lg hover:bg-[#2a2a2a] transition-colors">
            Book Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
