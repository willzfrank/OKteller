import Layout from "../components/Layout";
import Hero from "../components/Hero";
// import OkExchange from "../components/OkExchange";
import AboutUs from "../components/AboutUs";
import Services from "../pages/Services";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      {/* <OkExchange /> */}
      <Services />
    </Layout>
  );
};

export default HomePage;
