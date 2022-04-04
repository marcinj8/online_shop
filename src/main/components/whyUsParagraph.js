import React, { useRef, useEffect, useMemo } from 'react';

import {
  WhyUsParagraphStyled,
  WhyUsParagraphImageStyled,
  WhyUsParagraphTextStyled,
} from '../style/whyUs.scss';

import { showWhyUS } from '../animations/mainPageAnimations';

import warehouse from '../../assets/warehouse.svg';
import assistants from '../../assets/assistants.svg';
import truck from '../../assets/truck.svg';
import delivery from '../../assets/delivery.svg';
import phone from '../../assets/24hours.svg';

const WhyUsParagraph = ({ children, img, toLeft }) => {
  const imgSource = useMemo(() => {
    switch (img) {
      case 'warehouse':
        return warehouse;
      case 'assistants':
        return assistants;
      case 'truck':
        return truck;
      case 'delivery':
        return delivery;
      case 'phone':
        return phone;
      default:
        return phone;
    }
  }, [img]);

  const whyUsParagraphRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    showWhyUS(
      whyUsParagraphRef.current,
      descriptionRef.current,
      imageRef.current,
      toLeft
    );
  }, [whyUsParagraphRef, descriptionRef, imageRef, toLeft]);

  return (
    <WhyUsParagraphStyled ref={whyUsParagraphRef} toLeft={toLeft}>
      {toLeft ? (
        <React.Fragment>
          <WhyUsParagraphImageStyled ref={imageRef} src={imgSource} />
          <WhyUsParagraphTextStyled ref={descriptionRef}>
            {children}
          </WhyUsParagraphTextStyled>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <WhyUsParagraphTextStyled ref={descriptionRef}>
            {children}
          </WhyUsParagraphTextStyled>
          <WhyUsParagraphImageStyled ref={imageRef} src={imgSource} />
        </React.Fragment>
      )}
    </WhyUsParagraphStyled>
  );
};

export default WhyUsParagraph;
