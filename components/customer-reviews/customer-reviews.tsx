import { Star, StarHalf } from "lucide-react";

import CarouselCustomerReview from "./carousel-customer-review";

const CustomerReviews = () => {
  return (
    <div>
      <div className="container mx-auto px-3">
        <h3 className="font-bold text-4xl text-center my-7 ">
          Don&apos;t just take our word for it. Here&apos;s what other customers
          think
        </h3>
        <div className="md:grid md:grid-cols-5 xl:max-w-5xl md:max-w-4xl mx-auto gap-4 items-starta  ">
          <div className="md:col-span-1 text-center mb-8 md:mb-0">
            <p className="font-bold">Let customer speak for us</p>
            <div className="flex gap-1 justify-center">
              <Star fill="gold" />
              <Star fill="gold" />
              <Star fill="gold" />
              <Star fill="gold" />
              <StarHalf fill="gold" />
            </div>
            <p className="font-medium">from 153423 reviews</p>
          </div>
          <div className="md:col-span-4 ">
            <CarouselCustomerReview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
