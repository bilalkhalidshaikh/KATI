import React from 'react';
// import Sidebar from 'src/@core/layouts/Sidebar/Sidebar';
// import TopBar from 'src/@core/layouts/TopBar/TopBar';
// import Footer from 'src/@core/layouts/Footer/Footer';
import Services from '../pages/services'

const SellerLayout = ({ children }) => {
  return (
    <div className='app'>
      {/* <Sidebar /> */}
      <div className='content'>
        {/* <TopBar /> */}
        <div className='content-wrapper'><Services/></div>
      </div>
    </div>
  );
};

export default SellerLayout;
