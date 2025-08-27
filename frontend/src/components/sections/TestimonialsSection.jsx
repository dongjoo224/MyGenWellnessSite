import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      text: "I've tried every wellness app out there. MyGen is different. It doesn't overwhelm me with a million things to do. It just suggests one tiny thing, and somehow, that's enough.",
      author: "Sarah M.",
      role: "Beta User, 3 months",
      avatar: "S"
    },
    {
      text: "The AI actually gets me. It knows I'm not a morning person, so it suggests evening habits. It knows I travel for work, so it adapts. It's like having a wellness coach who actually pays attention.",
      author: "Marcus R.",
      role: "Beta User, 5 months",
      avatar: "M"
    },
    {
      text: "I was skeptical about another wellness app. But MyGen's approach is so gentle, so smart. I've built more healthy habits in 4 months than I did in the previous 4 years.",
      author: "Dr. Jennifer L.",
      role: "Healthcare Professional",
      avatar: "J"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-narrative py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="narrative-content max-w-6xl mx-auto text-center">
          <div className="section-badge-dark inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Whispers of Success</span>
          </div>
          
          <h2 className="narrative-title-light text-4xl md:text-6xl font-black leading-tight mb-16">
            Early adopters are already{' '}
            <span className="gradient-text-turquoise bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              transforming
            </span>
          </h2>
          
          <div className="testimonials-carousel relative max-w-4xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-8 transition-all duration-500 ${
                  index === currentTestimonialIndex 
                    ? 'opacity-100 transform translate-y-0 relative' 
                    : 'opacity-0 transform translate-y-5 absolute top-0 left-0 right-0'
                }`}
              >
                <div className="testimonial-content">
                  <p className="text-white text-xl italic leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="testimonial-author flex items-center justify-center gap-4">
                  <div className="author-avatar w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="author-info text-left">
                    <div className="author-name text-white font-semibold">
                      {testimonial.author}
                    </div>
                    <div className="author-role text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial dots */}
          <div className="testimonial-dots flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${
                  index === currentTestimonialIndex 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentTestimonialIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

