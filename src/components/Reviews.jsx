import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Reviews({ className }) {
  const reviewsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Alice Smith',
      role: 'Tech Lead',
      text: 'John’s expertise in secure web development transformed our project. Highly recommend!',
    },
    {
      name: 'Bob Johnson',
      role: 'Cybersecurity Analyst',
      text: 'His penetration testing skills are top-notch. A true professional.',
    },
    {
      name: 'Clara Lee',
      role: 'Startup Founder',
      text: 'Built a fast, secure app for us in record time. Amazing work!',
    },
  ];

  useEffect(() => {
    const items = reviewsRef.current.children;
    gsap.fromTo(
      items,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: { trigger: reviewsRef.current, start: 'top 80%' },
      }
    );

    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);

  return (
    <section className={`py-16 px-4 ${className}`}>
      <h2 className="text-4xl text-green-400 font-bold text-center mb-8 animate-glow">
        Reviews
      </h2>
      <div className="relative max-w-5xl mx-auto">
        <div ref={reviewsRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full bg-gray-800 p-6 rounded-lg hover:shadow-[0_0_15px_#00ff99] transition-all duration-300"
              >
                <p className="text-gray-300 italic">"{review.text}"</p>
                <p className="mt-4 text-green-400 font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-400 text-black p-2 rounded-full hover:bg-green-500"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-400 text-black p-2 rounded-full hover:bg-green-500"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default Reviews;