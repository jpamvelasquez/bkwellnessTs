import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-amber-100 py-2 md:px-0 px-5">
      <div className="container mx-auto py-9 lg:px-3 px-0 2xl:px-0">
        <footer className=" grid md:grid-cols-4 md:grid-rows-2 gap-4 2xl:grid-cols-5 2xl:grid-rows-1 lg:flex lg:justify-between">
          <div className="2xl:col-span-1 md:col-span-2 md:row-span-2 items-center justify-center flex 2xl:row-span-1">
            <div className="flex flex-col justify-center">
              <div className="font-bold text-3xl">
                <h4>BKWellness</h4>
              </div>
              <div className="flex justify-between my-4 text-xl">
                <FaFacebookSquare />
                <BsInstagram />
                <FaTiktok />
                <FaXTwitter />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3  ">
            <h4 className="font-bold text-2xl">About Us</h4>
            <p>Our Story</p>
            <p>Community</p>
            <p>Committment</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-2xl">Customer Service </h4>
            <p>Shipping</p>
            <p>Warranty</p>
            <p>Reviews</p>
            <p>Contact</p>
            <p>FAQs</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-2xl">Extras</h4>
            <p>Student Discount</p>
            <p>Careers</p>
            <p>Product Tutorials</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-2xl">Policies</h4>
            <p>Warranty Terms</p>
            <p>Terms of Use</p>
            <p>Privay Policy</p>
            <p>Promotions</p>
          </div>
        </footer>
      </div>
      <hr className="border-t-3 border-orange-600 w-3/4 mx-auto " />

      <div className="my-4 flex justify-center items-center">
        <p>&copy; 2025 BKWellness. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
