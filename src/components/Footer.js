import React from "react";
import footerBooks from "../assets/footer-books.svg";

function Footer() {
  return (
    <footer>
      <div className="flex w-full p-10 gap-[200px]">
        <div>
          <img src={footerBooks} alt="Books" />
        </div>

        <div className="w-[40%] flex justify-center align-center">
          <div className="pt-10"> 
          <h1 className="text-[40px]"> Your favourite <br/>   <span className="text-[#CC9600]">Reads Are Here!</span>  </h1>
       
          <p>Buy your favorite books online with ease! Enjoy exclusive offers and discounts on selected titles. Dive into our collection and find special deals that make reading more affordable. Shop now and unlock more savings with every purchase!</p>
        </div>
        </div>
      </div>
      © 2025 My Book Store
      <div className="bg-red text-white p-4">Tailwind Works!</div>
    </footer>
  );
}

export default Footer;
