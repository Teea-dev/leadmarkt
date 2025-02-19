import * as React from "react";
import Nav from "./_global-components/defaultNavbar";
import Hero from "./_global-components/heroSection";
import Tabs from "./_global-components/tabs";
import Features from "./_global-components/features";
import Testatement from "./_global-components/testatement";
import WaitlistBanner from "./_global-components/waitlist";
import Footer from "./_global-components/footer";
function Home() {
  return (
    <>
      <div>
        <Nav />
        <Hero />
        <Tabs />
        <Features />
        <Testatement />
        <WaitlistBanner/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
