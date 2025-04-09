import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const topAstrologersData = {
  title: "Chat With Top Astrologers",
  description: "Get expert astrological advice from verified astrologers. Chat now and get instant solutions.",
  astrologers: [
    {
      id: 1,
      name: "Astro Raj",
      specialties: ["Vedic Astrology", "Career", "Marriage"],
      experience: "12 Years",
      rating: 4.8,
      reviews: 1523,
      languages: ["English", "Hindi"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Online",
      chatRate: "₹15/min"
    },
    {
      id: 2,
      name: "Pandit Meera Devi",
      specialties: ["Tarot Reading", "Love", "Health"],
      experience: "9 Years",
      rating: 4.6,
      reviews: 1147,
      languages: ["Hindi"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Busy",
      chatRate: "₹10/min"
    },
    {
      id: 3,
      name: "Acharya Rohit",
      specialties: ["Numerology", "Finance", "Vastu"],
      experience: "15 Years",
      rating: 4.9,
      reviews: 2034,
      languages: ["English", "Hindi", "Tamil"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Online",
      chatRate: "₹20/min"
    },
    {
      id: 4,
      name: "Jyotish Ananya",
      specialties: ["Palmistry", "Education", "Job"],
      experience: "7 Years",
      rating: 4.5,
      reviews: 984,
      languages: ["Hindi", "Bengali"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Offline",
      chatRate: "₹8/min"
    },
    {
      id: 5,
      name: "Guru Mahesh",
      specialties: ["Horoscope Reading", "Love", "Business"],
      experience: "11 Years",
      rating: 4.7,
      reviews: 1287,
      languages: ["English", "Kannada"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Online",
      chatRate: "₹12/min"
    },
    {
      id: 6,
      name: "Tarot Sneha",
      specialties: ["Tarot", "Relationship", "Mental Peace"],
      experience: "5 Years",
      rating: 4.4,
      reviews: 879,
      languages: ["English", "Hindi"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Busy",
      chatRate: "₹9/min"
    },
    {
      id: 7,
      name: "Acharya Dev",
      specialties: ["Vedic", "Kundli", "Marriage"],
      experience: "14 Years",
      rating: 4.9,
      reviews: 2431,
      languages: ["Hindi", "Gujarati"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Online",
      chatRate: "₹18/min"
    },
    {
      id: 8,
      name: "Astrologer Kavita",
      specialties: ["Tarot", "Love", "Health"],
      experience: "6 Years",
      rating: 4.3,
      reviews: 642,
      languages: ["Hindi", "English"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Online",
      chatRate: "₹10/min"
    },
    {
      id: 9,
      name: "Pandit Manoj",
      specialties: ["Vastu", "Property", "Finance"],
      experience: "17 Years",
      rating: 4.8,
      reviews: 1956,
      languages: ["Hindi"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Offline",
      chatRate: "₹16/min"
    },
    {
      id: 10,
      name: "Astro Deepika",
      specialties: ["Numerology", "Health", "Marriage"],
      experience: "8 Years",
      rating: 4.6,
      reviews: 1102,
      languages: ["Hindi", "Punjabi"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Online",
      chatRate: "₹13/min"
    },
    {
      id: 11,
      name: "Acharya Vishal",
      specialties: ["Vedic", "Career", "Love"],
      experience: "10 Years",
      rating: 4.7,
      reviews: 1298,
      languages: ["English", "Hindi"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Online",
      chatRate: "₹14/min"
    },
    {
      id: 12,
      name: "Tarot Aarti",
      specialties: ["Tarot", "Spirituality", "Family"],
      experience: "4 Years",
      rating: 4.2,
      reviews: 523,
      languages: ["English", "Hindi", "Marathi"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Busy",
      chatRate: "₹7/min"
    },
    {
      id: 13,
      name: "Guru Ramesh",
      specialties: ["Horoscope", "Love Marriage", "Job"],
      experience: "18 Years",
      rating: 4.9,
      reviews: 2570,
      languages: ["Hindi", "English", "Telugu"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Online",
      chatRate: "₹25/min"
    },
    {
      id: 14,
      name: "Jyotish Swati",
      specialties: ["Palmistry", "Health", "Career"],
      experience: "6 Years",
      rating: 4.3,
      reviews: 719,
      languages: ["Hindi", "English"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Offline",
      chatRate: "₹11/min"
    },
    {
      id: 15,
      name: "Astro Neeraj",
      specialties: ["Numerology", "Business", "Marriage"],
      experience: "13 Years",
      rating: 4.7,
      reviews: 1644,
      languages: ["Hindi", "Bhojpuri"],
      profileImage: "https://dummyimage.com/200x200/000/fff",
      availability: "Online",
      chatRate: "₹17/min"
    }
  ]
};
function AstrotalkSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <div className='max-w-5xl mlr-m-15 mx-auto mb-10 '>
        <Slider {...settings}>
            {topAstrologersData.astrologers.map((astro) => (
              <div key={astro.id} className="border border-gray-200 rounded-2xl p-4  transition">
                <img src={astro.profileImage} alt={astro.name} className="w-20 rounded-full m-auto" />
                <h3 className="text-md font-semibold text-gray-800 mt-3">{astro.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-1">{astro.specialties.join(", ")}</p>
                <p className="text-sm text-gray-600 line-clamp-1">Experience: {astro.experience}</p>
                <p className="text-sm text-gray-600 line-clamp-1">Languages: {astro.languages.join(", ")}</p>
                <p className="text-sm text-gray-600 line-clamp-1">Rating: ⭐ {astro.rating} ({astro.reviews} reviews)</p>
                <p className="text-sm text-gray-600 line-clamp-1">Availability: <span className={`font-medium ${astro.availability === "Online" ? "text-green-600" : astro.availability === "Busy" ? "text-yellow-600" : "text-gray-400"}`}>{astro.availability}</span></p>
                <button className="bg-yellow-400 text-white mt-2 px-5 py-1 rounded-sm cursor-pointer login text-sm">Chat with us</button>
              </div>
            ))}
        </Slider>
    </div>
  )
}

export default AstrotalkSlider
