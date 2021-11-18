import React, { useRef, useEffect } from 'react';

import {
    FAQParagraphStyled,
    FAQParagraphImageStyled,
    FAQParagraphTextStyled
} from './FAQ.scss';

import { showFAQ } from './mainPageAnimations';

const FAQParagraph = ({ question, answer }) => {

    const faqParagraphRef = useRef(null);

    useEffect(() => {
        showFAQ(faqParagraphRef.current)
    }, [faqParagraphRef])


    return (
        <FAQParagraphStyled
            ref={faqParagraphRef}
        >
            <FAQParagraphImageStyled>{question}</FAQParagraphImageStyled>
            <FAQParagraphTextStyled>
                {answer}
            </FAQParagraphTextStyled>
        </FAQParagraphStyled>
    )
}

export default FAQParagraph;