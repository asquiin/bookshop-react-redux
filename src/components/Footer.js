import React from "react";
import footerBooks from "../assets/footer-books.svg";
import footerIcon from "../assets/footer-icon.svg";

const footerStats = [
  { value: "800+", label: "Book Listing" },
  { value: "1K+", label: "Registered Members" },
  { value: "50+", label: "Branch Count" },
];

const footerText = {
  title: "Your favourite Reads Are Here!",
  highlight: "Reads",
  description: `Buy your favorite books online with ease! Enjoy exclusive offers
  and discounts on selected titles. Dive into our collection and find
  special deals that make reading more affordable. Shop now and unlock
  more savings with every purchase!`,
  buttonLabel: "Explore More",
  bottomText: {
    year: "2024",
    note: `Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and
    register for our online platform to enjoy maximum benefits!`,
  },
};

function Footer() {
  return (
    <footer className="">
      <div className="w-full flex justify-center align-center">
        <div className="flex gap-[90px] w-[89%]">
 
          <div>
            <img src={footerBooks} alt="Books" />
          </div>

  
          <div className="w-[40%]">
            <div className="pt-10 text-start">
              <h1 className="text-[40px] leading-tight">
                Your favourite{" "}
                <span className="text-[#CC9600]">
                  {footerText.highlight}
                  <br /> Are Here!
                </span>
              </h1>
              <p className="mt-4">{footerText.description}</p>
            </div>


            <div className="flex justify-between mt-10 text-[#CC9600] text-start">
              {footerStats.map((item, index) => (
                <ul key={index}>
                  <li className="text-[40px]">{item.value}</li>
                  <li>{item.label}</li>
                </ul>
              ))}
            </div>


            <div className="pt-5 flex justify-start">
              <button className="w-[193px] h-[43px] border border-[#CC9600] rounded-lg">
                {footerText.buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center mt-10">
        <div className="flex justify-start w-[92%]">
          <img src={footerIcon} alt="Footer icon" />
        </div>
      </div>


      <div className="flex justify-center mt-6">
        <hr className="w-[90%]" />
      </div>


      <div className="w-full flex justify-center pt-10 pb-10">
        <div className="w-[60%] text-start">
          <p className="flex gap-10">
            © {footerText.bottomText.year} My Book Store
            <span className="text-[#CC9600]">{footerText.bottomText.note}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
