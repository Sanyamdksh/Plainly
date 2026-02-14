import React from "react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The ceramic pots are absolutely stunning. The finish is so elegant and instantly upgraded my space.",
    },
    {
      name: "Rahul Mehra",
      rating: 4,
      text: "The handmade lamp adds such a warm, cozy touch to my study corner. Quality feels premium.",
    },
    {
      name: "Anika Gupta",
      rating: 5,
      text: "Beautiful craftsmanship and minimal design. Everything arrived neatly packed and looks even better in person.",
    },
    {
      name: "Vikram Singh",
      rating: 5,
      text: "The wooden shelf is sturdy, clean, and fits perfectly with my home decor. Highly recommended.",
    },
    {
      name: "Neha Patel",
      rating: 4,
      text: "Loved the ceramic collection. One box had a small dent, but the product itself was perfect.",
    },
    {
      name: "Arjun Reddy",
      rating: 5,
      text: "Exactly the kind of minimalist pots I wanted. Simple, modern, and very well made.",
    },
    {
      name: "Sanya Malhotra",
      rating: 5,
      text: "Everything feels thoughtfully designed. The products bring such a calm and classy vibe to my room.",
    },
    {
      name: "Karan Joshi",
      rating: 4,
      text: "Solid quality lamp with a soft warm glow. Perfect for late-night work and relaxing evenings.",
    },
    {
      name: "Divya Rani",
      rating: 5,
      text: "Obsessed with how elegant the shelf and decor pieces look together. My room feels so premium now.",
    },
    {
      name: "Rohan Kapoor",
      rating: 5,
      text: "Premium finish and great attention to detail. Even small decor items look designer-level.",
    },
    {
      name: "Meera Nair",
      rating: 4,
      text: "The products are beautiful and feel high quality. Would love to see more color options in the future.",
    },
    {
      name: "Amit Khanna",
      rating: 5,
      text: "Plainly has completely elevated my home aesthetic. Timeless designs and excellent build quality.",
    },
  ];

  const loop = [...testimonials, ...testimonials];

  return (
    <div id="reviews-section" className="py-20 bg-amber-50 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-stone-800">
          Loved by customers
        </h2>
        <p className="text-stone-700 mt-2">
          Minimal designs, premium quality - trusted by many.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-amber-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-amber-50 to-transparent z-10" />

        <div className="flex w-max gap-6 animate-[marquee_22s_linear_infinite] hover:[animation-play-state:paused] py-2">
          {loop.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-hidden mt-10">
        <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-amber-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-amber-50 to-transparent z-10" />

        <div className="flex w-max gap-6 animate-[marqueeReverse_20s_linear_infinite] hover:[animation-play-state:paused] py-2">
          {loop.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
        `}
      </style>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="w-[320px] bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition duration-300">
      <h3 className="font-medium text-stone-900">{review.name}</h3>

      <p className="text-yellow-500 text-sm mt-1">
        {"⭐".repeat(review.rating)}
      </p>

      <p className="text-stone-600 text-sm mt-3 leading-relaxed">
        {review.text}
      </p>
    </div>
  );
};

export default Reviews;
