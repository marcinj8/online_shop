import React from 'react';

import WhyUsParagraph from './whyUsParagraph';

import { WhyUsPageStyled, WhyUsParagraphTitleStyled, WhyUsParagraphListStyled } from '../style/whyUs.scss';


const WHY_US = [
    'Curabitur vel nibh sagittis',
    'Lorem ipsum dolor',
    'Etiam tempor mi sed',
    'Mauris vel nisi ac sem',
    'Vivamus eu felis venenatis'
];

const IMG_TITLE = [
    'assistants',
    'warehouse',
    'truck',
    'delivery',
    'phone'
]

const WhyUs = () => {

    const paragraphs = WHY_US.map((item, i) => {
        return (
            <WhyUsParagraph
                key={i}
                toLeft={i % 2}
                img={IMG_TITLE[i]}
            >{item}</WhyUsParagraph>
        )
    })

    return (
        <WhyUsPageStyled >
            <WhyUsParagraphTitleStyled>WHY US</WhyUsParagraphTitleStyled>
            <WhyUsParagraphListStyled>
                {paragraphs}
            </WhyUsParagraphListStyled>
        </WhyUsPageStyled>
    )
}

export default WhyUs;