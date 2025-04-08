import React from "react";

const testimonials = [
  {
    name: "Danny Dario",
    date: "12 March 2025",
    review:
      "The first one I found in market that gives me a real experience of having an easy payment process",
    rating: 5,
    image: "https://static.insurancedekho.com/pwa/img/HowIDwork_img1.svg", // Replace with actual image path
  },
  {
    name: "Albert Cyril",
    date: "15 August 2025",
    review:
      "Making my own card and choosing my own number is a whole new experience for me. Nice work for this super feature",
    rating: 5,
    image: "https://static.insurancedekho.com/pwa/img/HowIDwork_img2.svg", // Replace with actual image path
  },
  {
    name: "Madina Cadee",
    date: "20 October 2025",
    review:
      "I don't expect it will be this easy to do transactions even on different platforms. Thanks Payment!",
    rating: 5,
    image: "https://static.insurancedekho.com/pwa/img/HowIDwork_img3.svg", // Replace with actual image path
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-10 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer are loving it</h2>
        <p className="text-gray-600 mb-8">
          Our customers speak for us, sharing their experiences with our seamless
          and efficient platform.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mt-1 mb-3 items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-25 h-25 rounded-full m-auto"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
                <div className="mt-1 text-yellow-500">{'⭐'.repeat(testimonial.rating)}</div>
              </div> 

              <p className="text-gray-700 italic line-clamp-3">"{testimonial.review}"</p>
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
