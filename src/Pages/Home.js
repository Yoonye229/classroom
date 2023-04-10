import React from 'react';

import MainBanner from '../components/Banner/mainBanner';
import './css/Home.css';
export default function Home() {
  return (
    <React.Fragment>
      <div className="body">
        <MainBanner />
      </div>
    </React.Fragment>
  );
}
