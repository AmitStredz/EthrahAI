import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export default function Index() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-10 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative w-full max-w-[512px] mx-auto lg:mx-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/183d1650c996956939041777a7d7038370a9440c?width=1024" 
              alt="AI Visualization" 
              className="w-full h-auto aspect-square"
            />
          </div>
          
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-[48px] leading-[60px] font-black text-[#000] tracking-[-2px]">
              AI Solutions That Grow With You
            </h1>
            <p className="text-base leading-6 text-[#000] max-w-[437px] mx-auto lg:mx-0">
              Ethrah AI delivers end-to-end AI solutions tailored to your industry—from strategy to deployment. We handle the complexity so you can focus on growth.
            </p>
            <button className="px-4 h-10 bg-[#141414] text-[#FAFAFA] text-sm font-bold leading-[21px] rounded-lg hover:bg-[#2a2a2a] transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Trusted by Businesses Section */}
      <section className="max-w-[1280px] mx-auto px-10 py-12">
        <h2 className="text-[35px] leading-[23px] font-bold text-[#141414] text-center mb-8">
          Trusted by Businesses for
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[960px] mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.75 0C4.36522 0 0 4.36522 0 9.75C0 15.1348 4.36522 19.5 9.75 19.5C15.1348 19.5 19.5 15.1348 19.5 9.75C19.4943 4.36758 15.1324 0.0056839 9.75 0ZM9.75 18C5.19365 18 1.5 14.3063 1.5 9.75C1.5 5.19365 5.19365 1.5 9.75 1.5C14.3063 1.5 18 5.19365 18 9.75C17.9948 14.3042 14.3042 17.9948 9.75 18ZM15.75 9.75C15.75 10.1642 15.4142 10.5 15 10.5H9.75C9.33579 10.5 9 10.1642 9 9.75V4.5C9 4.08579 9.33579 3.75 9.75 3.75C10.1642 3.75 10.5 4.08579 10.5 4.5V9H15C15.4142 9 15.75 9.33579 15.75 9.75Z" fill="#141414"/>
            </svg>
            <span className="text-base font-bold text-[#141414] leading-5">Fast Deployment</span>
          </div>
          
          <div className="flex items-center gap-3 p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
            <svg width="24" height="24" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9 9.75H7.5V3.75H8.25C9.90685 3.75 11.25 5.09315 11.25 6.75C11.25 7.16421 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75C12.7474 4.26579 10.7342 2.25258 8.25 2.25H7.5V0.75C7.5 0.335786 7.16421 0 6.75 0C6.33579 0 6 0.335786 6 0.75V2.25H5.25C2.76472 2.25 0.75 4.26472 0.75 6.75C0.75 9.23528 2.76472 11.25 5.25 11.25H6V17.25H4.5C2.84315 17.25 1.5 15.9069 1.5 14.25C1.5 13.8358 1.16421 13.5 0.75 13.5C0.335786 13.5 0 13.8358 0 14.25C0.0025835 16.7342 2.01579 18.7474 4.5 18.75H6V20.25C6 20.6642 6.33579 21 6.75 21C7.16421 21 7.5 20.6642 7.5 20.25V18.75H9C11.4853 18.75 13.5 16.7353 13.5 14.25C13.5 11.7647 11.4853 9.75 9 9.75ZM5.25 9.75C3.59315 9.75 2.25 8.40685 2.25 6.75C2.25 5.09315 3.59315 3.75 5.25 3.75H6V9.75H5.25ZM9 17.25H7.5V11.25H9C10.6569 11.25 12 12.5931 12 14.25C12 15.9069 10.6569 17.25 9 17.25Z" fill="#141414"/>
            </svg>
            <span className="text-base font-bold text-[#141414] leading-5">Flexible Pricing</span>
          </div>
          
          <div className="flex items-center gap-3 p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
            <svg width="24" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.7891 10.3089C12.8529 8.93489 13.7738 6.37158 13.056 3.99831C12.3383 1.62505 10.1513 0.00162411 7.67188 0.00162411C5.19246 0.00162411 3.00545 1.62505 2.28771 3.99831C1.56997 6.37158 2.4908 8.93489 4.55469 10.3089C2.7364 10.9791 1.18354 12.2192 0.127813 13.8442C-0.0231933 14.0687 -0.0416409 14.357 0.0795349 14.5989C0.200711 14.8407 0.442732 14.9986 0.712906 15.012C0.98308 15.0254 1.23954 14.8923 1.38406 14.6636C2.76764 12.5356 5.13364 11.2518 7.67188 11.2518C10.2101 11.2518 12.5761 12.5356 13.9597 14.6636C14.1886 15.0038 14.6482 15.0971 14.9917 14.8731C15.3351 14.6491 15.435 14.1908 15.2159 13.8442C14.1602 12.2192 12.6074 10.9791 10.7891 10.3089ZM3.54688 5.62891C3.54688 3.35073 5.3937 1.50391 7.67188 1.50391C9.95005 1.50391 11.7969 3.35073 11.7969 5.62891C11.7969 7.90708 9.95005 9.75391 7.67188 9.75391C5.39477 9.75132 3.54946 7.90601 3.54688 5.62891ZM23.2475 14.882C22.9006 15.1082 22.436 15.0105 22.2097 14.6636C20.8277 12.5342 18.4604 11.2505 15.9219 11.2539C15.5077 11.2539 15.1719 10.9181 15.1719 10.5039C15.1719 10.0897 15.5077 9.75391 15.9219 9.75391C17.5832 9.75234 19.0814 8.75432 19.723 7.22189C20.3645 5.68945 20.0242 3.9217 18.8595 2.73702C17.6948 1.55234 15.9331 1.18196 14.39 1.79734C14.1395 1.90562 13.85 1.86932 13.634 1.70255C13.4181 1.53578 13.3097 1.26487 13.3511 0.995156C13.3925 0.725441 13.5771 0.499487 13.8331 0.405156C16.5078 -0.661527 19.5561 0.463913 20.8959 3.01273C22.2357 5.56155 21.4343 8.71061 19.0391 10.3089C20.8574 10.9791 22.4102 12.2192 23.4659 13.8442C23.6922 14.1911 23.5944 14.6557 23.2475 14.882Z" fill="#141414"/>
            </svg>
            <span className="text-base font-bold text-[#141414] leading-5">Partnership Approach</span>
          </div>
          
          <div className="flex items-center gap-3 p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]">
            <svg width="24" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.6772 2.87437C14.8652 1.04415 12.3995 0.00998664 9.82406 0H9.75C4.36522 0 0 4.36522 0 9.75V15C0 16.2426 1.00736 17.25 2.25 17.25H3.75C4.99264 17.25 6 16.2426 6 15V11.25C6 10.0074 4.99264 9 3.75 9H1.53375C1.82903 5.80748 3.94481 3.07411 6.9614 1.98803C9.97799 0.901952 13.3506 1.65933 15.6131 3.93094C16.9677 5.29247 17.8009 7.08662 17.9672 9H15.75C14.5074 9 13.5 10.0074 13.5 11.25V15C13.5 16.2426 14.5074 17.25 15.75 17.25H18C18 18.4926 16.9926 19.5 15.75 19.5H10.5C10.0858 19.5 9.75 19.8358 9.75 20.25C9.75 20.6642 10.0858 21 10.5 21H15.75C17.8211 21 19.5 19.3211 19.5 17.25V9.75C19.5099 7.17412 18.4942 4.70022 16.6772 2.87437ZM3.75 10.5C4.16421 10.5 4.5 10.8358 4.5 11.25V15C4.5 15.4142 4.16421 15.75 3.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V10.5H3.75ZM15.75 15.75C15.3358 15.75 15 15.4142 15 15V11.25C15 10.8358 15.3358 10.5 15.75 10.5H18V15.75H15.75Z" fill="#141414"/>
            </svg>
            <span className="text-base font-bold text-[#141414] leading-5">24/7 Support</span>
          </div>
        </div>
      </section>

      {/* Solutions for Every Business Size */}
      <section className="max-w-[1280px] mx-auto px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-[35px] leading-[28px] font-bold text-[#141414] mb-2">
            Solutions for Every Business Size
          </h2>
          <p className="text-sm leading-[21px] text-[#737373] max-w-[650px] mx-auto">
            Whether you're starting out or scaling up, we have an AI solution designed for your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-[960px] mx-auto">
          <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] space-y-3">
            <svg width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18 3H14.25V2.25C14.25 1.00736 13.2426 0 12 0H7.5C6.25736 0 5.25 1.00736 5.25 2.25V3H1.5C0.671573 3 0 3.67157 0 4.5V16.5C0 17.3284 0.671573 18 1.5 18H18C18.8284 18 19.5 17.3284 19.5 16.5V4.5C19.5 3.67157 18.8284 3 18 3ZM6.75 2.25C6.75 1.83579 7.08579 1.5 7.5 1.5H12C12.4142 1.5 12.75 1.83579 12.75 2.25V3H6.75V2.25ZM18 4.5V8.40094C15.4685 9.77885 12.6322 10.5005 9.75 10.5C6.86794 10.5005 4.03165 9.7792 1.5 8.40187V4.5H18ZM18 16.5H1.5V10.0913C4.06868 11.3477 6.8905 12.0006 9.75 12C12.6096 12.0001 15.4313 11.3469 18 10.0903V16.5ZM7.5 8.25C7.5 7.83579 7.83579 7.5 8.25 7.5H11.25C11.6642 7.5 12 7.83579 12 8.25C12 8.66421 11.6642 9 11.25 9H8.25C7.83579 9 7.5 8.66421 7.5 8.25Z" fill="#141414"/>
            </svg>
            <div>
              <h3 className="text-base font-bold text-[#141414] leading-5 mb-1">
                Small Business Solutions
              </h3>
              <p className="text-sm leading-[21px] text-[#737373]">
                Streamline operations and boost efficiency with AI solutions designed for small businesses. Automate tasks, gain insights, and scale your business with ease.
              </p>
            </div>
          </div>
          
          <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] space-y-3">
            <svg width="24" height="24" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M21.75 18H20.25V7.5C20.25 6.67157 19.5784 6 18.75 6H12.75V1.5C12.7504 0.946535 12.4459 0.437843 11.958 0.176616C11.47 -0.0846117 10.8779 -0.0559231 10.4175 0.25125L2.9175 5.25C2.49962 5.5288 2.24905 5.99828 2.25 6.50062V18H0.75C0.335786 18 0 18.3358 0 18.75C0 19.1642 0.335786 19.5 0.75 19.5H21.75C22.1642 19.5 22.5 19.1642 22.5 18.75C22.5 18.3358 22.1642 18 21.75 18ZM18.75 7.5V18H12.75V7.5H18.75ZM3.75 6.50062L11.25 1.5V18H3.75V6.50062Z" fill="#141414"/>
            </svg>
            <div>
              <h3 className="text-base font-bold text-[#141414] leading-5 mb-1">
                Enterprise Solutions
              </h3>
              <p className="text-sm leading-[21px] text-[#737373]">
                Transform your enterprise with AI-powered solutions that drive innovation and growth. Optimize processes, enhance decision-making, and achieve your strategic goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="max-w-[1280px] mx-auto px-10 py-12 relative">
        <div className="text-center mb-8">
          <h2 className="text-[35px] leading-[28px] font-bold text-[#141414] mb-2">
            Our Products
          </h2>
          <p className="text-sm leading-[21px] text-[#737373]">
            Explore our ready-to-deploy products designed for immediate impact.
          </p>
        </div>
        
        <div className="absolute right-0 top-0 w-[476px] h-[400px] hidden lg:block">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/3ffb59a5b0ed13e2f24da774df96fc97895ec538?width=952" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="max-w-[608px] space-y-8">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#141414] leading-[34px]">
              AI-Powered Licensing & Credential Automation for Healthcare Professionals
            </h3>
            <p className="text-sm leading-[21px] text-[#737373]">
              Accelerating healthcare licensing with AI-powered automation, Ethrah AI's credential sol..
            </p>
            <button className="px-4 h-8 bg-[#EDEDED] text-[#141414] text-sm font-medium leading-[21px] rounded-lg hover:bg-[#e0e0e0] transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#141414] leading-5">
              Intelligent Algorithmic Trading Platform
            </h3>
            <p className="text-sm leading-[21px] text-[#737373]">
              Developing a sophisticated trading platform with advanced algorithms for optimized investment strategies.
            </p>
            <button className="px-4 h-8 bg-[#EDEDED] text-[#141414] text-sm font-medium leading-[21px] rounded-lg hover:bg-[#e0e0e0] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Solving Your Business Challenges */}
      <section className="max-w-[1280px] mx-auto px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-[35px] leading-[28px] font-bold text-[#141414] mb-2">
            Solving Your Business Challenges
          </h2>
          <p className="text-sm leading-[21px] text-[#737373]">
            See how our AI solutions turn common business problems into opportunities for growth.
          </p>
        </div>
        
        <div className="max-w-[960px] mx-auto space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] space-y-3">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.75 0C4.36522 0 0 4.36522 0 9.75C0 15.1348 4.36522 19.5 9.75 19.5C15.1348 19.5 19.5 15.1348 19.5 9.75C19.4943 4.36758 15.1324 0.0056839 9.75 0ZM9.75 18C5.19365 18 1.5 14.3063 1.5 9.75C1.5 5.19365 5.19365 1.5 9.75 1.5C14.3063 1.5 18 5.19365 18 9.75C17.9948 14.3042 14.3042 17.9948 9.75 18ZM15.75 9.75C15.75 10.1642 15.4142 10.5 15 10.5H9.75C9.33579 10.5 9 10.1642 9 9.75V4.5C9 4.08579 9.33579 3.75 9.75 3.75C10.1642 3.75 10.5 4.08579 10.5 4.5V9H15C15.4142 9 15.75 9.33579 15.75 9.75Z" fill="#141414"/>
              </svg>
              <div>
                <h3 className="text-base font-bold text-[#141414] leading-5 mb-1">
                  Inefficient Processes
                </h3>
                <p className="text-sm leading-[21px] text-[#737373]">
                  Automate repetitive tasks and streamline workflows.
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] space-y-3">
              <svg width="24" height="24" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 9.75H7.5V3.75H8.25C9.90685 3.75 11.25 5.09315 11.25 6.75C11.25 7.16421 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75C12.7474 4.26579 10.7342 2.25258 8.25 2.25H7.5V0.75C7.5 0.335786 7.16421 0 6.75 0C6.33579 0 6 0.335786 6 0.75V2.25H5.25C2.76472 2.25 0.75 4.26472 0.75 6.75C0.75 9.23528 2.76472 11.25 5.25 11.25H6V17.25H4.5C2.84315 17.25 1.5 15.9069 1.5 14.25C1.5 13.8358 1.16421 13.5 0.75 13.5C0.335786 13.5 0 13.8358 0 14.25C0.0025835 16.7342 2.01579 18.7474 4.5 18.75H6V20.25C6 20.6642 6.33579 21 6.75 21C7.16421 21 7.5 20.6642 7.5 20.25V18.75H9C11.4853 18.75 13.5 16.7353 13.5 14.25C13.5 11.7647 11.4853 9.75 9 9.75Z" fill="#141414"/>
              </svg>
              <div>
                <h3 className="text-base font-bold text-[#141414] leading-5 mb-1">
                  High Operational Costs
                </h3>
                <p className="text-sm leading-[21px] text-[#737373]">
                  Reduce expenses with AI-driven optimization.
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] space-y-3">
              <svg width="24" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.7891 10.3089C12.8529 8.93489 13.7738 6.37158 13.056 3.99831C12.3383 1.62505 10.1513 0.00162411 7.67188 0.00162411C5.19246 0.00162411 3.00545 1.62505 2.28771 3.99831C1.56997 6.37158 2.4908 8.93489 4.55469 10.3089C2.7364 10.9791 1.18354 12.2192 0.127813 13.8442C-0.0231933 14.0687 -0.0416409 14.357 0.0795349 14.5989C0.200711 14.8407 0.442732 14.9986 0.712906 15.012C0.98308 15.0254 1.23954 14.8923 1.38406 14.6636C2.76764 12.5356 5.13364 11.2518 7.67188 11.2518C10.2101 11.2518 12.5761 12.5356 13.9597 14.6636C14.1886 15.0038 14.6482 15.0971 14.9917 14.8731C15.3351 14.6491 15.435 14.1908 15.2159 13.8442C14.1602 12.2192 12.6074 10.9791 10.7891 10.3089Z" fill="#141414"/>
              </svg>
              <div>
                <h3 className="text-base font-bold text-[#141414] leading-5 mb-1">
                  Poor Customer Experience
                </h3>
                <p className="text-sm leading-[21px] text-[#737373]">
                  Personalize interactions and improve satisfaction.
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] space-y-3">
              <svg width="24" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.6772 2.87437C14.8652 1.04415 12.3995 0.00998664 9.82406 0H9.75C4.36522 0 0 4.36522 0 9.75V15C0 16.2426 1.00736 17.25 2.25 17.25H3.75C4.99264 17.25 6 16.2426 6 15V11.25C6 10.0074 4.99264 9 3.75 9H1.53375C1.82903 5.80748 3.94481 3.07411 6.9614 1.98803C9.97799 0.901952 13.3506 1.65933 15.6131 3.93094C16.9677 5.29247 17.8009 7.08662 17.9672 9H15.75C14.5074 9 13.5 10.0074 13.5 11.25V15C13.5 16.2426 14.5074 17.25 15.75 17.25H18C18 18.4926 16.9926 19.5 15.75 19.5H10.5C10.0858 19.5 9.75 19.8358 9.75 20.25C9.75 20.6642 10.0858 21 10.5 21H15.75C17.8211 21 19.5 19.3211 19.5 17.25V9.75C19.5099 7.17412 18.4942 4.70022 16.6772 2.87437Z" fill="#141414"/>
              </svg>
              <div>
                <h3 className="text-base font-bold text-[#141414] leading-5 mb-1">
                  Lack of Data Insights
                </h3>
                <p className="text-sm leading-[21px] text-[#737373]">
                  Gain actionable insights from your data.
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] space-y-3">
              <svg width="24" height="24" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.5 15.75C19.5 16.1642 19.1642 16.5 18.75 16.5H0.75C0.335786 16.5 0 16.1642 0 15.75V0.75C0 0.335786 0.335786 0 0.75 0C1.16421 0 1.5 0.335786 1.5 0.75V9.59719L6.25594 5.4375C6.52266 5.20401 6.91644 5.18915 7.2 5.40187L12.7134 9.53719L18.2559 4.6875C18.454 4.49149 18.7443 4.4214 19.0099 4.5055C19.2756 4.58959 19.4727 4.81402 19.5218 5.08828C19.5709 5.36254 19.464 5.64143 19.2441 5.8125L13.2441 11.0625C12.9773 11.296 12.5836 11.3108 12.3 11.0981L6.78656 6.96469L1.5 11.5903V15H18.75C19.1642 15 19.5 15.3358 19.5 15.75Z" fill="#141414"/>
              </svg>
              <div>
                <h3 className="text-base font-bold text-[#141414] leading-5 mb-1">
                  Stagnant Growth
                </h3>
                <p className="text-sm leading-[21px] text-[#737373]">
                  Identify new opportunities and drive innovation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-lg border border-[#DBDBDB] bg-[#FAFAFA] space-y-3 max-w-[200px]">
            <svg width="24" height="24" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.5 0H1.5C0.671573 0 0 0.671573 0 1.5V7.00969C0 15.4106 7.10812 18.1978 8.53125 18.6712C8.8352 18.7746 9.1648 18.7746 9.46875 18.6712C10.8938 18.1978 18 15.4106 18 7.00969V1.5C18 0.671573 17.3284 0 16.5 0Z" fill="#141414"/>
            </svg>
            <div>
              <h3 className="text-base font-bold text-[#141414] leading-5 mb-1">
                Security Risks
              </h3>
              <p className="text-sm leading-[21px] text-[#737373]">
                Protect your business with advanced AI security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="max-w-[1280px] mx-auto px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-[35px] leading-[28px] font-bold text-[#000] mb-2">
            How We Work
          </h2>
          <p className="text-sm leading-[21px] text-[#737373] max-w-[451px] mx-auto">
            Our streamlined 5-step process ensures a smooth journey from idea to implementation, focused on clarity and collaboration.
          </p>
        </div>
        
        <div className="max-w-[960px] mx-auto space-y-2">
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.3011 18.2389L14.6071 13.5458C17.4334 10.1526 17.091 5.13647 13.8296 2.15888C10.5683 -0.818706 5.54185 -0.70447 2.41918 2.4182C-0.703494 5.54087 -0.817729 10.5674 2.15986 13.8287C5.13744 17.09 10.1535 17.4324 13.5468 14.6061L18.2399 19.3002C18.5329 19.5932 19.0081 19.5932 19.3011 19.3002C19.5942 19.0071 19.5942 18.532 19.3011 18.2389Z" fill="#141414"/>
                </svg>
              ),
              title: "Discovery & Consultation",
              description: "Understanding your business needs and goals."
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.6195 13.4062C20.4455 13.5043 20.2397 13.529 20.0475 13.4748C19.8554 13.4206 19.6928 13.292 19.5957 13.1175L13.0632 1.5H11.252V2.25C11.252 2.66421 10.9162 3 10.502 3C10.0877 3 9.75195 2.66421 9.75195 2.25V1.5H7.9407L1.4082 13.1175C1.20524 13.4799 0.74689 13.6092 0.384453 13.4062C0.0220163 13.2033 -0.107262 12.7449 0.0957031 12.3825L6.21945 1.5H0.751953C0.33774 1.5 0.00195312 1.16421 0.00195312 0.75C0.00195312 0.335786 0.33774 0 0.751953 0H20.252C20.6662 0 21.002 0.335786 21.002 0.75C21.002 1.16421 20.6662 1.5 20.252 1.5H14.7845L20.9082 12.3825C21.0063 12.5564 21.0309 12.7623 20.9767 12.9544C20.9225 13.1466 20.7939 13.3092 20.6195 13.4062Z" fill="#141414"/>
                </svg>
              ),
              title: "Solution Design & Roadmap",
              description: "Designing a tailored AI solution and roadmap."
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 0C3.95344 0 0 2.30625 0 5.25V14.25C0 17.1938 3.95344 19.5 9 19.5C14.0466 19.5 18 17.1938 18 14.25V5.25C18 2.30625 14.0466 0 9 0Z" fill="#141414"/>
                </svg>
              ),
              title: "Data Preparation & Model Building",
              description: "Preparing data and building custom AI models."
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.2806 6.21937C13.4215 6.36005 13.5006 6.55094 13.5006 6.75C13.5006 6.94906 13.4215 7.13995 13.2806 7.28063L8.03063 12.5306C7.88995 12.6715 7.69906 12.7506 7.5 12.7506C7.30094 12.7506 7.11005 12.6715 6.96937 12.5306L4.71938 10.2806C4.42632 9.98757 4.42632 9.51243 4.71938 9.21937C5.01243 8.92632 5.48757 8.92632 5.78063 9.21937L7.5 10.9397L12.2194 6.21937C12.3601 6.07854 12.5509 5.99941 12.75 5.99941C12.9491 5.99941 13.1399 6.07854 13.2806 6.21937Z" fill="#141414"/>
                </svg>
              ),
              title: "Testing & Validation",
              description: "Rigorous testing and validation of AI models."
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.501 8.24609C22.5057 10.0322 21.9262 11.7709 20.851 13.197C20.6899 13.4114 20.4266 13.5235 20.1605 13.4912C19.8943 13.4588 19.6655 13.2869 19.5605 13.0402C19.4554 12.7935 19.4899 12.5095 19.651 12.2952C20.5311 11.1291 21.0053 9.707 21.001 8.24609C21.001 4.51817 17.9789 1.49609 14.251 1.49609C10.5231 1.49609 7.50098 4.51817 7.50098 8.24609C7.50098 8.66031 7.16519 8.99609 6.75098 8.99609C6.33676 8.99609 6.00098 8.66031 6.00098 8.24609Z" fill="#141414"/>
                </svg>
              ),
              title: "Deployment & Integration",
              description: "Deploying and integrating AI solutions into your systems."
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.6772 2.87437C14.8652 1.04415 12.3995 0.00998664 9.82406 0H9.75C4.36522 0 0 4.36522 0 9.75V15C0 16.2426 1.00736 17.25 2.25 17.25H3.75C4.99264 17.25 6 16.2426 6 15V11.25C6 10.0074 4.99264 9 3.75 9H1.53375C1.82903 5.80748 3.94481 3.07411 6.9614 1.98803C9.97799 0.901952 13.3506 1.65933 15.6131 3.93094C16.9677 5.29247 17.8009 7.08662 17.9672 9H15.75C14.5074 9 13.5 10.0074 13.5 11.25V15C13.5 16.2426 14.5074 17.25 15.75 17.25H18C18 18.4926 16.9926 19.5 15.75 19.5H10.5C10.0858 19.5 9.75 19.8358 9.75 20.25C9.75 20.6642 10.0858 21 10.5 21H15.75C17.8211 21 19.5 19.3211 19.5 17.25V9.75C19.5099 7.17412 18.4942 4.70022 16.6772 2.87437Z" fill="#141414"/>
                </svg>
              ),
              title: "Ongoing Support",
              description: "Providing ongoing support and maintenance for AI solutions."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex flex-col items-center pt-3 w-10">
                <div className="w-6 h-6 text-[#141414]">
                  {step.icon}
                </div>
                {index < 5 && <div className="w-0.5 h-8 bg-[#E0E0E0] mt-1" />}
              </div>
              <div className="flex-1 py-3">
                <h3 className="text-base font-medium text-[#141414] leading-6 mb-0">
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
        <div className="text-center mb-8">
          <h2 className="text-[35px] leading-[28px] font-bold text-[#141414] mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm leading-[21px] text-[#737373]">
            Have questions? We have answers. Here are some common queries from our clients.
          </p>
        </div>
        
        <div className="max-w-[960px] mx-auto space-y-3">
          {[
            {
              question: "How much does an AI solution cost?",
              answer: "The cost of an AI solution varies depending on complexity and customization. We offer flexible pricing plans to fit different budgets. Contact us for a personalized quote."
            },
            {
              question: "Is my business ready for AI?",
              answer: "Most businesses can benefit from AI solutions. We'll assess your needs during our consultation."
            },
            {
              question: "How long does implementation take?",
              answer: "Implementation timelines vary based on project scope, typically ranging from weeks to months."
            },
            {
              question: "What about data security and privacy?",
              answer: "We prioritize data security and comply with all relevant regulations to protect your information."
            }
          ].map((faq, index) => (
            <div 
              key={index}
              className="p-[7px_15px] rounded-lg border border-[#DBDBDB] bg-[#FAFAFA]"
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
      <section className="max-w-[1280px] mx-auto px-10 py-20 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/4953b8e8e7da6717153979b220041dd03c982554?width=1326" 
            alt="" 
            className="w-[663px] h-[663px] object-contain blur-sm"
          />
        </div>
        
        <div className="relative max-w-[808px] mx-auto text-center space-y-8">
          <h2 className="text-[36px] leading-[45px] font-black text-[#141414] tracking-[-1px]">
            Ready to Transform Your Business With AI?
          </h2>
          <button className="px-5 h-12 bg-[#141414] text-[#FAFAFA] text-base font-bold leading-6 rounded-lg hover:bg-[#2a2a2a] transition-colors">
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Bottom Logo */}
      <div className="max-w-[1280px] mx-auto px-10 pb-8">
        <div className="flex items-center gap-4">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/897d2bbc34a197ac4270c40a2597b22431c2e8d8?width=302" 
            alt="ETHRAH AI" 
            className="h-4 w-[151px]"
          />
          <div className="w-px h-[23px] bg-border" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
