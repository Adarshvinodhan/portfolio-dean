import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Research Scholar",
      text: "Dr. Saravana Moorthy's guidance in AI and Machine Learning has been invaluable. His expertise and mentorship helped me publish my first research paper."
    },
    {
      name: "Rahul Kumar",
      role: "Former Student",
      text: "Under sir's supervision, I developed a deep understanding of networking concepts. His practical approach to teaching made complex topics easy to grasp."
    },
    {
      name: "Anjali Patel",
      role: "PhD Student",
      text: "Dr. Moorthy's insights in Data Science have been instrumental in shaping my research. His dedication to student success is truly inspiring."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="testimonials" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Student Testimonials</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="glass-effect rounded-xl p-8 min-h-[200px] transition-all duration-500 transform hover:shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-xl blur opacity-25"></div>
            <div className="relative">
              <div className="text-blue-900 italic mb-6 text-xl leading-relaxed">"{testimonials[activeIndex].text}"</div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[activeIndex].name[0]}
                </div>
                <div>
                  <div className="font-semibold text-blue-900 text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-blue-600">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? 'bg-blue-900 w-6' : 'bg-blue-200 hover:bg-blue-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials