import React, { useRef, useEffect, useState } from 'react';

import { simpleShowAnimaiton } from '../animations/mainPageAnimations';

import {
  WorkFlowDetailsParagraphStyled,
  WorkFlowParagraphDescStyled,
  WorkFlowParagraphTitleStyled,
} from '../style/workFlowDetails.scss';

const WorkFlowDetailsParagraph = ({ children, toLeft, title }) => {
  const [isHover, setIsHover] = useState(false);
  const paragraphRef = useRef(null);
  const paragraphTitleRef = useRef(null);
  const paragraphDescRef = useRef(null);

  useEffect(() => {
    simpleShowAnimaiton(
      paragraphRef.current,
      paragraphTitleRef.current,
      paragraphDescRef.current,
      toLeft
    );
  }, [paragraphRef, paragraphTitleRef, paragraphDescRef, toLeft]);

  return (
    <WorkFlowDetailsParagraphStyled
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      toLeft={toLeft}
      ref={paragraphRef}
    >
      <WorkFlowParagraphTitleStyled
        toLeft={toLeft}
        isHover={isHover}
        ref={paragraphTitleRef}
      >
        {title}
      </WorkFlowParagraphTitleStyled>
      <WorkFlowParagraphDescStyled isHover={isHover} ref={paragraphDescRef}>
        {children}
      </WorkFlowParagraphDescStyled>
    </WorkFlowDetailsParagraphStyled>
  );
};

export default WorkFlowDetailsParagraph;
