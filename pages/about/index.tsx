import Head from 'next/head';
import React from 'react';
import MainAbout from '../../components/MainAbout';
import Header from '../../components/Header';
import Layout from '../../Layout';

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - Sobre a brapi</title>
      </Head>
      <Layout>
        <Header />
        <MainAbout />
      </Layout>
    </div>
  );
};

export default About;
