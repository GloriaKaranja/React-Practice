import About from "@/components/about";
import Hero from "@/components/hero";
import HeroClass from "@/components/hero.class";

export default function Home() {
  return (
    <>
    <Hero
      title="Welcome to Our Site"
      subtitle="Discover amazing products and services"
      imageUrl="/hero.jpg"
      ctaText="Get Started"
      ctaLink="#" 
    />
    <About
    imageUrl="/image1.webp"
    title="Welcome"
    subtitle="Jesus saves Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil beatae officiis maiores illo sunt incidunt debitis explicabo facere obcaecati?" 
    ctaText="Login"
    ctaLink="/auth/login"
    />
  
    </>
   
   
  );
}
