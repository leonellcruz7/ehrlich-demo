import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import NewArrivals from "@/components/newArrivals";
import Trending from "@/components/trending";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Trending />
      <NewArrivals />
    </Layout>
  );
}
