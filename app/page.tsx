import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeacturedProducts from "@/components/featured-products";
import HomeBanner from "@/components/home";
import ImageCarousel from "@/components/ImageSlider";



export default function Home() {
  return (
    <main>
      <HomeBanner />
      <CarouselTextBanner/>
      <FeacturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
     <ImageCarousel />
    </main>
  );
}
