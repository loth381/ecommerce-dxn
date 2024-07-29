import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import ChooseCategory from "@/components/choose-category";
import FeacturedProducts from "@/components/featured-products";
import HomeBanner from "@/components/home";
import SocialMediaVideos from "@/components/SocialMediaVideos";



export default function Home() {
  return (
    <main>
      <HomeBanner />
      {/* <CarouselTextBanner/> */}
      <FeacturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
     <SocialMediaVideos />
    </main>
  );
}
