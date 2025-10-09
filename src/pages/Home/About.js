import React from "react";
import mainPhoto from "../../assets/about-pic.svg";

function About() {
  return (
    <>
      <div className="w-full">
        <img
          src={mainPhoto}
          alt="Main background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full bg-black">
        <div className="px-[80px] py-8">
          <h4 className="text-3xl text-[#CC9600]">About Us</h4>

          <div className="text-white mt-10 mb-10">
            Welcome to Neth BookPoint, your trusted source for a diverse range
            of books catering to every reader's taste. Established with the
            mission to foster a love for reading in our community, we pride
            ourselves on providing excellent service and a wide selection of
            books. Our journey began in 2021, and since then, we have grown to
            become a beloved destination for book lovers. Below, you'll find
            information about our four branches, their locations, and contact
            numbers.
          </div>

          <h4 className="text-3xl text-[#CC9600]">Our branches</h4>
          <div className="mt-10 flex text-center mb-10">
            <ul>
              <li className="text-[24px] text-[#FCEE59]">Kurunegala</li>
              <li className="text-[17px] text-[#D6CE80]">
                Main Street, City Center
              </li>
              <li className="text-white">Contact: 123-456-7890</li>
              <li className="text-white">
                Operating Hours: Monday to Saturday, 9 AM - 7 PM; Sunday, 10 AM
                - 5 PM
              </li>
              <li className="text-white">
                In-store shopping, Special discounts for students, Workshops,
                Study spaces
              </li>
            </ul>


            <ul>
              <li className="text-[24px] text-[#FCEE59]">Kandy</li>
              <li className="text-[17px] text-[#D6CE80]">
               Main Street, City Center
              </li>
              <li className="text-white">Contact: 123-456-7890</li>
              <li className="text-white">
                Operating Hours: Monday to Saturday, 9 AM - 7 PM; Sunday, 10 AM
                - 5 PM
              </li>
              <li className="text-white">
                In-store shopping, Special discounts for students, Workshops,
                Study spaces
              </li>
            </ul>

             <ul>
              <li className="text-[24px] text-[#FCEE59]">Colombo</li>
              <li className="text-[17px] text-[#D6CE80]">
               Main Street, City Center
              </li>
              <li className="text-white">Contact: 123-456-7890</li>
              <li className="text-white">
                Operating Hours: Monday to Saturday, 9 AM - 7 PM; Sunday, 10 AM
                - 5 PM
              </li>
              <li className="text-white">
                In-store shopping, Special discounts for students, Workshops,
                Study spaces
              </li>
            </ul>
          </div>


                    <h4 className="text-3xl text-[#CC9600]">Our Commitment</h4>

                          <div className="text-white mt-10 mb-10">
          At Neth BookPoint, we are committed to providing a welcoming and inspiring environment for all book enthusiasts. Each of our branches is staffed with knowledgeable and friendly team members ready to assist you in finding the perfect book. Whether you're looking for the latest bestseller, a rare find, or a cozy place to read, Neth BookPoint is your destination. We believe in the power of reading to transform lives and build community. Join us at one of our branches or explore our offerings online. We're here to support your reading journey and make your book shopping experience enjoyable and fulfilling.
          </div>


        </div>
      </div>
    </>
  );
}

export default About;
