import HeroSection from "./components/Banner";
import { PriceItem } from "@/types";
import PriceIncreaseSection from "./components/PriceIncreaseSection";
import PriceDecreaseSection from "./components/PriceDecreaseSection";
import AllProductsSection from "./components/AllProductsSection";


async function getProducts(): Promise<PriceItem[]> {
    const res = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/products',
        { next: { revalidate: 3600 } }
    );
    
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    
    return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <HeroSection></HeroSection>
       <PriceIncreaseSection products={products} />
        <PriceDecreaseSection products={products} />
        <AllProductsSection products={products} />
    </div>
  );
}
