import {
  CategoryMenu,
  Hero,
  Incentives,
  IntroducingSection,
  Newsletter,
  ProductsSection,
} from "@/components";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryMenu />
      <Reviews />
      <Incentives />
    </>
  );
}
