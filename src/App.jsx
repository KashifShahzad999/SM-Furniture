import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Beds from './Components/Beds/Beds';
import Sofa from './Components/Sofas/Sofa';
import Chairs from './Components/Chairs/Chairs';
import Table from './Components/Table/Table';
import AnimatedCursor from 'react-animated-cursor';
import MobileNav from './Components/MobileNav/MobileNav';
import Navbar from './Components/Navbar/Navbar';
import DetailNavbar from './Components/DetailNavbar/DetailNavbar';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Router>
      <div>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'black'
          }}
          outerStyle={{
            border: '3px solid #303F5A'
          }}
        />
        {isMobile ? <MobileNav /> : <Navbar />}
        <DetailNavbar />
        {/* <ReactWhatsapp number="+92 3115386005" message="Hello World!!!" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="beds-detail" element={<Beds />} />
          <Route path="sofa-detail" element={<Sofa />} />
          <Route path="chairs-detail" element={<Chairs />} />
          <Route path="table-detail" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
