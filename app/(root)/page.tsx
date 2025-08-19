import CustomerReviews from "@/components/customer-reviews/customer-reviews";
import FeaturedHero from "@/components/hero/featured-hero/featured-hero";
import ProductAdd from "@/components/product-display/product-ad";
import ProductDisplay from "@/components/product-display/product-display";

import WelcomeTea from "@/components/welcome-tea";

const Home = () => {
  return (
    <div className="">
      <FeaturedHero />
      <WelcomeTea />
      <ProductDisplay />
      <ProductAdd />

      <CustomerReviews />
    </div>
  );
};

export default Home;
