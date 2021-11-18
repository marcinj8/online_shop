import React, { useRef, useEffect } from 'react';

import { simpleShowAnimaiton } from './mainPageAnimations';

import { WorkFlowDetailsParagraphStyled, WorkFlowParagraphTitleStyled } from './workFlowDetails.scss';

const WorkFlowDetailsParagraph = ({ children, toLeft, title }) => {


    const paragraphRef = useRef(null);

    useEffect(() => {
        simpleShowAnimaiton(paragraphRef.current)
    }, [paragraphRef])


    return (
        <WorkFlowDetailsParagraphStyled
            toLeft={toLeft}
            ref={paragraphRef}
        >
            <WorkFlowParagraphTitleStyled>{title}</WorkFlowParagraphTitleStyled>
            <span>
                {children}
            </span>
        </WorkFlowDetailsParagraphStyled>
    )
}

export default WorkFlowDetailsParagraph;