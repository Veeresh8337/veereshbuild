import { ArrowRight, Clock, Award, PhoneCall } from "lucide-react";

export default function Cohorts() {
  const coursesData = [
    {
      title: "3.0 Job Ready AI Powered Cohort: Complete Web Development + DSA + Gen-AI + Aptitude",
      desc: "Master full-stack development, algorithms, and AI integration in this comprehensive boot camp designed to get you placed.",
      duration: "6+ Months",
      certified: "Yes",
      support: "24/7 Mentor Support",
      price: "Rs.8999",
      originalPrice: "Rs.18991",
      bgColor: "bg-white",
      textColor: "text-black",
      pillBg: "bg-gray-100",
      pillText: "text-black",
      buttonBg: "bg-[#e25822]",
      buttonText: "text-white",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Data Science & Analytics with Gen AI",
      desc: "Gain hands-on experience in data analysis, visualization, and AI integration to solve real-world industry problems.",
      duration: "5+ Months",
      certified: "Yes",
      support: "24/7 Mentor Support",
      price: "Rs.6999",
      originalPrice: "Rs.14891",
      bgColor: "bg-[#e25822]",
      textColor: "text-white",
      pillBg: "bg-white",
      pillText: "text-[#e25822]",
      buttonBg: "bg-white",
      buttonText: "text-[#e25822]",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Backend Engineering with Cloud Architecture",
      desc: "Build highly scalable, distributed systems using Node.js, Docker, Kubernetes, and AWS infrastructure.",
      duration: "4+ Months",
      certified: "Yes",
      support: "24/7 Mentor Support",
      price: "Rs.7599",
      originalPrice: "Rs.15991",
      bgColor: "bg-[#111111]",
      textColor: "text-white",
      pillBg: "bg-white/10",
      pillText: "text-white",
      buttonBg: "bg-white",
      buttonText: "text-black",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07bfc?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="work" className="py-24 px-4 sm:px-6 bg-[#fff0e5] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <span className="px-6 py-1.5 bg-transparent border border-[#e25822]/40 text-[#e25822] text-sm font-semibold tracking-widest uppercase">
            COURSES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black max-w-4xl leading-tight">
            Not Sure Which Course Fits You? Don't Worry, We're Here To Help.
          </h2>
          <button className="mt-4 px-8 py-3.5 bg-[#d44d1c] text-white rounded-full font-medium hover:bg-[#b93f13] transition-colors flex items-center gap-2 shadow-lg shadow-[#d44d1c]/20">
            Explore Courses <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Sticky Stacked Cards container */}
        <div className="relative pb-32 flex flex-col gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className={`sticky ${course.bgColor} rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col-reverse md:flex-row overflow-hidden border border-black/5 transition-transform duration-500`}
              style={{
                // Stagger the top property so they stack with a 40px offset visually
                top: `${100 + index * 40}px`, 
                minHeight: '480px'
              }}
            >
              {/* Left Side: Text Content */}
              <div className={`p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center ${course.textColor}`}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
                  {course.title}
                </h3>
                <p className="text-base md:text-lg opacity-90 mb-10 max-w-xl font-light">
                  {course.desc}
                </p>

                {/* Info Pills */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm ${course.pillBg} ${course.pillText}`}>
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm ${course.pillBg} ${course.pillText}`}>
                    <Award className="w-4 h-4" />
                    <span>{course.certified} Certified</span>
                  </div>
                  <div className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm ${course.pillBg} ${course.pillText}`}>
                    <PhoneCall className="w-4 h-4" />
                    <span>{course.support}</span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-12 mt-auto">
                  <div>
                    <div className="text-xl font-light mb-1 opacity-90">Price</div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl md:text-5xl font-bold tracking-tight">{course.price}</span>
                      <span className="text-sm font-light line-through opacity-70">{course.originalPrice} (+GST)</span>
                    </div>
                  </div>
                  
                  <button className={`px-8 py-3.5 rounded-full font-medium flex items-center gap-2 ${course.buttonBg} ${course.buttonText} hover:scale-105 transition-transform shadow-lg`}>
                    Check Course <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="w-full md:w-5/12 p-4 md:p-8 flex items-center justify-center">
                <div className="w-full h-64 md:h-full min-h-[300px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-2xl">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
