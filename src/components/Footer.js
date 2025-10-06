import React from "react";
import footerBooks from "../assets/footer-books.svg";
import footerIcon from "../assets/footer-icon.svg"

function Footer() {
  return (
    <footer>
    <div className="w-full flex justify-center align-center"> 
      <div className="flex w-full gap-[90px] w-[89%]">
        <div>
          <img src={footerBooks} alt="Books" />
        </div>

        <div className="w-[40%] ">
          <div className="pt-10 text-start">
            <h1 className="text-[40px]">
              {" "}
              Your favourite{" "}
              <span className="text-[#CC9600]">
                Reads <br /> Are Here!
              </span>{" "}
            </h1>

            <p>
              Buy your favorite books online with ease! Enjoy exclusive offers
              and discounts on selected titles. Dive into our collection and
              find special deals that make reading more affordable. Shop now and
              unlock more savings with every purchase!
            </p>
          </div>
          <div className="flex justify-between mt-10 text-[#CC9600] text-start">
            <ul>
              <li className="text-[40px]">800+</li>
              <li>Book Listing</li>
            </ul>

            <ul>
              <li className="text-[40px]">1K+</li>
              <li>Registered Members</li>
            </ul>

            <ul>
              <li className="text-[40px]">50+</li>
              <li>Branch Count</li>
            </ul>
          </div>
          <div className="pt-5 flex justify-start">
            <button className="w-[193px] h-[43px] border border-[#CC9600] rounded-lg">
              {" "}
              Explore More
            </button>
          </div>
        </div>
      </div>

 
      </div>
 <div className="flex justify-center">  <div className="flex justify-start w-[92%]"><img  src={footerIcon}/></div></div>
 
       


      <div className="flex justify-center">
        {" "}
        <hr className="w-[90%]" />{" "}
      </div>
      © 2025 My Book Store
      <div className="bg-red text-white p-4">Tailwind Works!</div>
    </footer>
  );
}

export default Footer;
