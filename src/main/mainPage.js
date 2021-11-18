import React from 'react';

import Headline from './headline';
import WorkFlowDetails from './workFlowDetails';
import WhyUs from './whyUs';

import { MainPageStyled } from './mainPage.scss';
import FAQ from './FAQ';

const MainPage = () => {

    return (
        <MainPageStyled>
            <Headline
            />
            <WorkFlowDetails />
            <WhyUs/>
            <FAQ />
        </MainPageStyled>
    )
}

export default MainPage;