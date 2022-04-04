import React from 'react';

import Headline from '../components/headline';
import WorkFlowDetails from '../components/workFlowDetails';
import WhyUs from '../components/whyUs';
import FAQ from '../components/FAQ';

import { MainPageStyled } from './mainPage.scss';

const MainPage = () => {
  return (
    <MainPageStyled>
      <Headline />
      <WorkFlowDetails />
      <WhyUs />
      <FAQ />
    </MainPageStyled>
  );
};

export default MainPage;
