import HeroSection from "./components/Banner";
import { PriceItem } from "@/types";
import PriceIncreaseSection from "./components/PriceIncreaseSection";
import PriceDecreaseSection from "./components/PriceDecreaseSection";

// API থেকে ডেটা ফেচ করার ফাংশন
async function getProducts(): Promise<PriceItem[]> {
    const res = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/products',
        { next: { revalidate: 3600 } } // ১ ঘণ্টা পরপর ডেটা রিফ্রেশ হবে
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
    </div>
  );
}
