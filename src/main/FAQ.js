import React from 'react';

import FAQParagraph from './FAQParagraph';

import { FAQPageStyled, FAQParagraphTitleStyled, FAQParagraphListStyled } from './FAQ.scss';

const FAQ_QAA = [
    ['Lorem ipsum dolor?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lorem ut iaculis tincidunt, libero est vehicula est, quis hendrerit purus ligula a eros.'],
    ['Curabitur vel nibh sagittis?', 'Aenean volutpat commodo mi ut placerat. Aliquam sit amet dolor vel dolor pulvinar lacinia id eu turpis. '],
    ['Etiam tempor mi sed?', 'Interdum et malesuada fames ac ante ipsum primis in faucibus.'],
    ['Mauris vel nisi ac sem?', 'Donec lorem nunc, rhoncus at ultrices et, hendrerit ut orci. Phasellus laoreet, ex id finibus malesuada, urna urna lobortis magna, at sodales mauris ipsum ut eros. Vestibulum non lacus ac libero dictum rutrum. Nam vel felis hendrerit, molestie nisl in, iaculis metus. Sed et leo in nulla ornare efficitur. Pellentesque in tristique massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'],
    ['Vivamus eu felis venenatis?', 'Cras a libero sed felis gravida finibus quis sit amet elit. Quisque posuere est ut magna auctor, nec vestibulum velit aliquam. '
    ]
];

const FAQ = () => {

    const paragraphs = FAQ_QAA.map((item, i) => {
        return (
            <FAQParagraph
                key={i}
                question={item[0]}
                answer={item[1]}
            />
        )
    })

    return (
        <FAQPageStyled style={{ minHeight: '100vh' }}>
            <FAQParagraphTitleStyled>FAQ</FAQParagraphTitleStyled>
            <FAQParagraphListStyled>
                {paragraphs}
            </FAQParagraphListStyled>
        </FAQPageStyled>
    )
}

export default FAQ;