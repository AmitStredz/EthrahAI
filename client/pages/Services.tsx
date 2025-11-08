import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export default function Services() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-10 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative w-full max-w-[687px] mx-auto lg:mx-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f9c216a117b4ef2a8352ee46fef665ca8bb0ce6a?width=1374" 
              alt="AI Visualization" 
              className="w-full h-auto aspect-square"
            />
          </div>
          
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-[48px] leading-[60px] font-black text-[#141414] tracking-[-2px]">
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
      <section className="max-w-[1280px] mx-auto px-10 py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-4">
          About ETHRAH AI
        </h2>
        <p className="text-sm leading-6 text-[#141414] max-w-[960px]">
          Ethrah AI is a forward-thinking Dubai-based AI consultancy engineered to deliver transformative solutions for ambitious enterprises. Our specialist team of AI architects, strategists, and innovators operates with singular purpose—crafting exceptional, bespoke AI services that drive measurable business impact. We partner with clients as trusted advisors, combining deep technical expertise with genuine commitment to your success. Our vision is unambiguous: to establish Ethrah AI as the region's premier AI solutions partner, recognized for innovation, reliability, and unwavering client-centricity.
        </p>
      </section>

      {/* Our AI Services & Capabilities */}
      <section className="max-w-[1280px] mx-auto px-10 py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-6">
          Our AI Services & Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          {[
            {
              icon: (
                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.5 9.37109C22.498 7.34353 21.3308 5.49763 19.5 4.62641V4.49609C19.4982 2.51191 18.1971 0.763053 16.2971 0.191119C14.3971 -0.380815 12.3468 0.359167 11.25 2.01266C10.1532 0.359167 8.10286 -0.380815 6.20289 0.191119C4.30292 0.763053 3.00178 2.51191 3 4.49609V4.62641C1.16746 5.49532 -0.000703216 7.34205 -0.000703216 9.37016C-0.000703216 11.3983 1.16746 13.245 3 14.1139V14.2461C3.00178 16.2303 4.30292 17.9791 6.20289 18.5511C8.10286 19.123 10.1532 18.383 11.25 16.7295C12.3468 18.383 14.3971 19.123 16.2971 18.5511C18.1971 17.9791 19.4982 16.2303 19.5 14.2461V14.1139C21.3305 13.2433 22.4977 11.3981 22.5 9.37109Z" fill="#141414"/>
                </svg>
              ),
              title: "AI Consulting",
              description: "Expert guidance on AI adoption and implementation."
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.81055 5.30859C7.32527 5.30859 5.31055 7.32331 5.31055 9.80859C5.31055 12.2939 7.32527 14.3086 9.81055 14.3086C12.2958 14.3086 14.3105 12.2939 14.3105 9.80859C14.308 7.32438 12.2948 5.31118 9.81055 5.30859Z" fill="#141414"/>
                </svg>
              ),
              title: "Custom AI Model Development",
              description: "Tailored AI models to meet specific business needs."
            },
            {
              icon: (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.5 3.75H10.5V0.75C10.5 0.335786 10.1642 0 9.75 0C9.33579 0 9 0.335786 9 0.75V3.75H3C1.34315 3.75 0 5.09315 0 6.75V17.25C0 18.9069 1.34315 20.25 3 20.25H16.5C18.1569 20.25 19.5 18.9069 19.5 17.25V6.75C19.5 5.09315 18.1569 3.75 16.5 3.75Z" fill="#141414"/>
                </svg>
              ),
              title: "AI Integration",
              description: "Seamless integration of AI into existing systems."
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.3021 18.2389L14.608 13.5458C17.4344 10.1526 17.0919 5.13647 13.8306 2.15888C10.5693 -0.818706 5.54283 -0.70447 2.42015 2.4182C-0.702517 5.54087 -0.816752 10.5674 2.16083 13.8287C5.13842 17.09 10.1545 17.4324 13.5477 14.6061L18.2409 19.3002C18.5339 19.5932 19.0091 19.5932 19.3021 19.3002C19.5952 19.0071 19.5952 18.532 19.3021 18.2389Z" fill="#141414"/>
                </svg>
              ),
              title: "AI Strategy & Planning",
              description: "Strategic planning for AI initiatives and roadmaps."
            }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          {[
            {
              title: "AI-Powered Analytics",
              description: "Advanced analytics powered by AI for deeper insights."
            },
            {
              title: "AI Security & Compliance",
              description: "Ensuring security and compliance in AI solutions."
            },
            {
              title: "AI Software Development",
              description: "Developing custom AI-driven software applications."
            },
            {
              title: "Data Management & Engineering",
              description: "Managing and engineering data for optimal AI performance."
            }
          ].map((service, index) => (
            <div key={index} className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3">
              <h3 className="text-base font-bold text-[#141414] leading-5">
                {service.title}
              </h3>
              <p className="text-sm leading-[21px] text-[#757575]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            {
              title: "Cloud AI Solutions",
              description: "Leveraging cloud platforms for scalable AI solutions."
            },
            {
              title: "AI for Customer Experience",
              description: "Enhancing customer experience with AI-powered tools."
            },
            {
              title: "AI for Business Intelligence",
              description: "Improving business intelligence through AI-driven analytics."
            },
            {
              title: "AI for Process Automation",
              description: "Automating business processes with AI for increased efficiency."
            },
            {
              title: "AI Chatbots & Virtual Assistants",
              description: "Developing AI-powered chatbots and virtual assistants."
            }
          ].map((service, index) => (
            <div key={index} className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3">
              <h3 className="text-base font-bold text-[#141414] leading-5">
                {service.title}
              </h3>
              <p className="text-sm leading-[21px] text-[#757575]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-3">
          <div className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3">
            <h3 className="text-base font-bold text-[#141414] leading-5">
              AI Marketing & Sales
            </h3>
            <p className="text-sm leading-[21px] text-[#757575]">
              Transforming marketing and sales strategies with AI.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3">
            <h3 className="text-base font-bold text-[#141414] leading-5">
              AI for Targeted Advertising
            </h3>
            <p className="text-sm leading-[21px] text-[#757575]">
              Optimizing advertising campaigns with AI-driven targeting.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3">
            <h3 className="text-base font-bold text-[#141414] leading-5">
              AI Time Series Forecasting
            </h3>
            <p className="text-sm leading-[21px] text-[#757575]">
              Predicting future trends with AI time series forecasting.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose ETHRAH AI */}
      <section className="max-w-[1280px] mx-auto px-10 py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-6">
          Why Choose ETHRAH AI
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-3">
          {[
            {
              title: "100% AI-Focused Expertise",
              description: "Our team is entirely focused on artificial intelligence, ensuring deep expertise."
            },
            {
              title: "End-to-End Solutions",
              description: "We provide complete AI solutions, from consulting to deployment and support."
            },
            {
              title: "Agile and Transparent Process",
              description: "Our agile approach ensures transparency and adaptability throughout the project."
            },
            {
              title: "Latest Technologies & Tools",
              description: "We utilize the latest AI technologies and tools for optimal results."
            },
            {
              title: "Custom Solutions for Any Industry",
              description: "We tailor AI solutions to meet the unique needs of any industry."
            }
          ].map((item, index) => (
            <div key={index} className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3">
              <h3 className="text-base font-bold text-[#141414] leading-5">
                {item.title}
              </h3>
              <p className="text-sm leading-[21px] text-[#757575]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3 max-w-[200px]">
            <h3 className="text-base font-bold text-[#141414] leading-5">
              Security and Compliance
            </h3>
            <p className="text-sm leading-[21px] text-[#757575]">
              We prioritize security and compliance in all our AI solutions.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-[#E0E0E0] bg-white space-y-3 max-w-[200px]">
            <h3 className="text-base font-bold text-[#141414] leading-5">
              Rapid Prototyping
            </h3>
            <p className="text-sm leading-[21px] text-[#757575]">
              We offer rapid prototyping to quickly demonstrate the value of AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="max-w-[1280px] mx-auto px-10 py-12">
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
