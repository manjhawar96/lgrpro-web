import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurMission from '../components/OurMission';
import Team from '../components/Team';
import OTA from '../components/OTA';
import '../styles/index.css';

function Index() {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>LGR</title>
        </Helmet>
        <Hero />
        <AboutUs />
        <OurMission />
        <Team />
        <OTA />
      </main>
    </Layout>
  );
}

export default Index;
