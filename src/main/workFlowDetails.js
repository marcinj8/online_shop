import React from 'react';

import WorkFlowDetailsParagraph from './workFlowParagraph';

import {
    WorkFlowDetailsSectionStyled,
    WorkFlowTitleStyled,
    WorkFlowDetailsArticleStyled
} from './workFlowDetails.scss';

const WorkFlowDetails = () => {

    const paragraphs = [
        'Nam mollis eget massa sit amet porttitor. Vivamus ultrices urna at mi faucibus facilisis. Fusce eget mi maximus tortor pulvinar euismod. Curabitur commodo erat sit amet euismod placerat. Nunc felis magna, feugiat ut mi non, tristique tempor magna. Aliquam maximus urna a neque pretium, vel lacinia nisi hendrerit.',
        'Nulla facilisi. Proin feugiat, felis at lobortis condimentum, lectus ipsum sagittis felis, ac porttitor ipsum elit eget massa. Maecenas in hendrerit mauris. Duis elementum ac eros id auctor. Aliquam aliquet tortor et lorem eleifend accumsan. Aliquam erat volutpat. Vestibulum ac vehicula est. Integer tempus elit risus, vel porta turpis semper non. Mauris elementum mollis dapibus.',
        'Ut dapibus sed ipsum a aliquam. Nulla ullamcorper imperdiet odio, ut suscipit libero scelerisque sed. Phasellus pellentesque id mauris tempus tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam at neque eget ipsum malesuada tincidunt sed et libero. Duis nec sollicitudin ligula. Nam ut urna bibendum, ornare erat et, faucibus magna.',
    ];

    const titles = [
        'Nam mollis eget',
        'Nulla facilisi',
        'Ut dapibus sed',
    ];

    const displayedParagraphs = paragraphs.map((paragraph, i) => {
        return (
            <WorkFlowDetailsParagraph
                key={i}
                toLeft={i % 2}
                title={titles[i]}
            >
                {paragraph}
            </WorkFlowDetailsParagraph>
        )
    })

    return (
        <WorkFlowDetailsSectionStyled>
            <WorkFlowDetailsArticleStyled>
            <WorkFlowTitleStyled>How we work?</WorkFlowTitleStyled>
                {displayedParagraphs}
            </WorkFlowDetailsArticleStyled>
        </WorkFlowDetailsSectionStyled>
    )
}

export default WorkFlowDetails;