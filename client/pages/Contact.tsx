import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    businessSize: "",
    budgetRange: "",
    projectDescription: "",
    hearAbout: "",
    services: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      
      {/* Hero Section */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 p-10">
          <div className="relative w-full max-w-[322px]">
            <svg width="323" height="279" viewBox="0 0 323 279" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M136.907 13.6097C147.665 -4.53657 174.558 -4.53659 185.315 13.6097L224.541 79.7789C228.369 86.2361 229.797 93.5202 228.972 100.546C227.987 108.939 217.518 109.983 210.398 105.159C196.382 95.6634 179.349 90.0966 160.981 90.0966C113.132 90.0966 74.3418 127.875 74.3418 174.477C74.3418 192.164 79.9296 208.581 89.4796 222.143C96.3404 231.886 98.4312 244.875 91.7016 254.705L82.2868 268.456C77.777 275.044 70.1857 279 62.0566 279H27.9897C6.47518 279 -6.97119 256.317 3.78608 238.171L136.907 13.6097Z" fill="black"/>
              <path d="M243.078 147.442C241.016 141.499 242.765 133.99 249.191 134.406C253.982 134.717 258.598 137.23 261.258 141.717L318.437 238.171C329.194 256.317 315.747 279 294.233 279H133.674C124.083 279 118.363 268.59 123.683 260.818C126.825 256.229 132.814 254.49 138.281 255.931C145.516 257.839 153.126 258.858 160.981 258.858C166.21 258.858 171.331 258.406 176.305 257.542C186.896 255.701 192.44 245.251 195.067 235.09C195.675 232.737 196.142 230.233 196.142 227.807C196.142 219.046 201.389 211.479 208.989 207.923C212.814 206.132 216.879 204.737 220.688 202.915C220.915 202.806 221.142 202.7 221.369 202.595C233.802 196.881 247.423 189.048 247.612 175.66C247.618 175.267 247.621 174.872 247.621 174.477C247.621 165.021 246.024 155.929 243.078 147.442Z" fill="black"/>
            </svg>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/101b3c8d9e6ac6eee8c75567db07cc196cf12913?width=347" 
              alt="AI Visualization" 
              className="absolute top-[90px] left-[74px] w-[173px] h-[169px]"
            />
          </div>
          
          <div className="space-y-8 flex-1 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-[48px] leading-[60px] font-black text-[#141414] tracking-[-2px]">
                Let's Start Your AI Journey
              </h1>
              <p className="text-base leading-6 text-[#141414]">
                Free consultation • No obligations • Same-day response
              </p>
            </div>
            <button className="w-full max-w-[400px] h-12 bg-[#141414] text-[#FAFAFA] text-sm font-bold leading-[21px] rounded-lg hover:bg-[#2a2a2a] transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-8">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-6">
          Contact Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border-t border-[#E5E8EB] pt-5 space-y-2">
            <p className="text-sm leading-[21px] text-[#757575]">Location</p>
            <p className="text-sm leading-[21px] text-[#141414]">
              DIFC Innovation Hub, Dubai, UAE
            </p>
          </div>
          <div className="border-t border-[#E5E8EB] pt-5 space-y-2">
            <p className="text-sm leading-[21px] text-[#757575]">Email</p>
            <p className="text-sm leading-[21px] text-[#141414]">
              ethrah.ai@gmail.com
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-t border-[#E5E8EB] pt-5 space-y-2">
            <p className="text-sm leading-[21px] text-[#757575]">Phone</p>
            <p className="text-sm leading-[21px] text-[#141414]">
              +971 4 528 978549
            </p>
          </div>
          <div className="border-t border-[#E5E8EB] pt-5 space-y-2">
            <p className="text-sm leading-[21px] text-[#757575]">Hours</p>
            <p className="text-sm leading-[21px] text-[#141414]">
              Sun-Thu: 9AM-6PM GST
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-8">
        <div className="rounded-lg overflow-hidden h-[522px]">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/54496f4e193481c7bdbfebf26b87e8328f7b999b?width=1856" 
            alt="Location Map" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Contact Form */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-6">
          Tell Us About Your Project
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414]"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414]"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Business Size
              </label>
              <select
                value={formData.businessSize}
                onChange={(e) => setFormData({ ...formData, businessSize: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] focus:outline-none focus:border-[#141414] appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23757575' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">Select business size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Budget Range
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] focus:outline-none focus:border-[#141414] appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23757575' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">Select budget range</option>
                <option value="<10k">Less than $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              {[
                "Process Automation",
                "AI Chatbots",
                "Analytics & Insights",
                "Custom AI Solutions",
                "Algo Trading",
                "AI Strategy Consulting",
                "Other"
              ].map((service) => (
                <label key={service} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-5 h-5 rounded border-2 border-[#E0E0E0] text-[#141414] focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-base text-[#141414] leading-6">
                    {service}
                  </span>
                </label>
              ))}
            </div>

            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Project Description
              </label>
              <textarea
                placeholder="Tell us about your project..."
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                className="w-full min-h-[144px] px-4 py-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414] resize-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div></div>
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                How Did You Hear About Us?
              </label>
              <select
                value={formData.hearAbout}
                onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] focus:outline-none focus:border-[#141414] appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23757575' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">Select an option</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-full max-w-md h-12 bg-[#141414] text-white text-base font-bold leading-6 rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              Schedule Free Consultation
            </button>
          </div>

          <p className="text-sm text-[#757575] text-center leading-[21px]">
            We typically respond within 2 hours during business hours
          </p>
        </form>
      </section>

      <Footer />
    </div>
  );
}
