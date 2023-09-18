import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import NewArrivals from "@/components/newArrivals";
import RecentlyBought from "@/components/recentlyBought";
import Trending from "@/components/trending";
import YourNextInspo from "@/components/yourNextInspo";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Trending />
      <NewArrivals />
      <RecentlyBought />
      <YourNextInspo />
    </Layout>
  );
}
