import React, { useRef, useEffect, useMemo } from 'react';

import { WhyUsParagraphStyled, WhyUsParagraphImageStyled, WhyUsParagraphTextStyled } from './whyUs.scss';

import { showWhyUS } from './mainPageAnimations';

import warehouse from '../assets/warehouse.svg';
import assistants from '../assets/assistants.svg';
import truck from '../assets/truck.svg';
import delivery from '../assets/delivery.svg';
import phone from '../assets/24hours.svg';


const WhyUsParagraph = ({ children, img, toLeft }) => {

    const imgSource = useMemo(() => {
        switch (img) {
            case 'warehouse': return warehouse;
            case 'assistants': return assistants;
            case 'truck': return truck;
            case 'delivery': return delivery;
            case 'phone': return phone;
            default: return phone;

        }
    }, [img])

    const whyUsParagraphRef = useRef(null);

    useEffect(() => {
        showWhyUS(whyUsParagraphRef.current)
    }, [whyUsParagraphRef])


    return (
        <WhyUsParagraphStyled
            ref={whyUsParagraphRef}
            toLeft={toLeft}
        >
            <WhyUsParagraphImageStyled src={imgSource} />
            <WhyUsParagraphTextStyled
            >
                {children}
            </WhyUsParagraphTextStyled>
        </WhyUsParagraphStyled>
    )
}

export default WhyUsParagraph;