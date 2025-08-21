import { FaBox } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";

const CustomerService = () => {
  return (
    <div className="bg-amber-50 px-4 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-7 items-center md:h-[200px]">
          <div className="md:h-[150px]">
            <div className="flex flex-col justify-center items-center">
              <FaBox className="text-2xl mb-3" />
              <p className="text-sm mb-4">FREE SHIPPING</p>
              <p className="text-lg">Free shipping for orders over 2000</p>
            </div>
          </div>
          <div className="h-[150px]">
            <div className="flex flex-col justify-center items-center">
              <MdCall className="text-2xl mb-3" />
              <p className="text-sm mb-4">CUSTOMER SERVICE</p>
              <p className="text-lg">Call us on +6312345678</p>
              <p className="text-lg">Monday - Friday</p>
              <p className="text-lg"> 9am - 5pm</p>
            </div>
          </div>
          <div className="h-[150px]">
            <div className="flex flex-col justify-center items-center">
              <IoMail className="text-2xl mb-3" />
              <p className="text-sm mb-4">CONTACT US</p>
              <p className="text-lg">Get in touch via</p>
              <p className="text-lg">customercare@bkwellco.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
