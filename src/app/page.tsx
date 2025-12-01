import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Viewer from './components/Viewer';
import Preview from './components/Preview';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex gap-[var(--gap)] p-8 max-w-[1280px] mx-auto mt-6">
        <Sidebar />
        <Viewer />
        <Preview />
      </main>
      <Footer />
    </>
  );
};

export default Home;