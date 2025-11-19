import React from 'react';


const MeetExpertVets = () => {
      const experts = [
        {
          name: "Dr. Sarah Mitchell",
          specialty: "Winter Pet Care Specialist",
          image:
            "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
          experience: "12 years",
        },
        {
          name: "Dr. James Cooper",
          specialty: "Veterinary Dermatologist",
          image:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
          experience: "8 years",
        },
        {
          name: "Dr. Emily Chen",
          specialty: "Pet Nutrition Expert",
          image:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
          experience: "10 years",
        },
        {
          name: "Dr. Michael Reyes",
          specialty: "Canine Behavior Specialist",
          image:
            "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400",
          experience: "9 years",
        },
        {
          name: "Dr. Olivia Thompson",
          specialty: "Small Animal Surgeon",
          image:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400",
          experience: "11 years",
        },
        {
          name: "Dr. Daniel Foster",
          specialty: "Pet Rehabilitation Expert",
          image: "https://i.ibb.co.com/JwkJzCf7/OIP.webp",
          experience: "7 years",
        },
      ];
   
    
    return (
      <div className="my-10">
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Expert Veterinarians 👨‍⚕️
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted professionals dedicated to your pet's winter wellness
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-200 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {expert.name}
              </h3>
              <p className="text-orange-600 font-semibold mb-2">
                {expert.specialty}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {expert.experience} Experience
              </p>
              <button className="px-6 py-2 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-500 hover:text-white transition">
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MeetExpertVets;