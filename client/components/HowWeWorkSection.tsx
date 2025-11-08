import { Search, Edit, Code, Rocket, Monitor } from "lucide-react";

export default function HowWeWorkSection() {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Planning",
      description:
        "Understand your business goals and challenges to define the optimal AI solution.",
    },
    {
      icon: Edit,
      title: "Solution Design",
      description:
        "Design a tailored AI solution that aligns with your specific requirements and objectives.",
    },
    {
      icon: Code,
      title: "Development & Testing",
      description:
        "Develop and rigorously test the AI solution to ensure performance, reliability, and security.",
    },
    {
      icon: Rocket,
      title: "Deployment & Integration",
      description:
        "Seamlessly deploy and integrate the AI solution into your existing systems and workflows.",
    },
    {
      icon: Monitor,
      title: "Ongoing Support & Optimization",
      description:
        "Provide ongoing support, maintenance, and optimization to ensure long-term success and ROI.",
    },
  ];

  return (
    <section className="w-full bg-[#FEFEFE] py-16">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold leading-tight text-[#000] mb-4">
            How We Work
          </h2>
          <p className="text-sm leading-[21px] text-[#737373] max-w-[451px] mx-auto">
            Our streamlined 5-step process ensures a smooth journey from idea to
            implementation, focused on clarity and collaboration.
          </p>
        </div>

        <div className="max-w-[797px] mx-auto space-y-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="flex gap-2">
                <div className="flex flex-col items-center w-10">
                  <div className={`${index === 0 ? "mt-3" : ""}`}>
                    <Icon className="w-6 h-6 text-[#000]" strokeWidth={2} />
                  </div>
                  {!isLast && (
                    <div className="w-0.5 h-8 bg-[#474747] mt-1"></div>
                  )}
                </div>

                <div className="flex-1 py-3">
                  <h3 className="text-base font-medium leading-6 text-[#000] mb-0">
                    {step.title}
                  </h3>
                  <p className="text-base leading-6 text-[#959595]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
