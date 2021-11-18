import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

import {
    HeadlineStyled,
    HeadlineImageStyled,
    HeadlineTitleStyled,
    SliderLeftButtonStyled,
    SliderRightButtonStyled,
    DotsNavSliderStyled,
    DotNavSliderStyled
} from './headline.scss';

import photo1 from '../assets/headerPic1.jpg';
import photo2 from '../assets/headerPic2.jpg';
import photo3 from '../assets/headerPic3.jpg';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

const Headline = () => {
    const sliderInterval = useRef(null);
    const showedPicsIndex = useRef(null);
    const slideRef = useRef(null);

    const [displayedPhoto, setDisplayedPhoto] = useState(photo1)

    const sliderPics = useMemo(() => [photo1, photo2, photo3], []);

    const slideForward = useCallback(() => {
        showedPicsIndex.current = sliderPics.findIndex(photoName => photoName === displayedPhoto);
        if (showedPicsIndex.current === sliderPics.length - 1) {
            return setDisplayedPhoto(sliderPics[0]);
        } else {
            return setDisplayedPhoto(sliderPics[showedPicsIndex.current + 1]);
        }
    }, [sliderPics, displayedPhoto]);

    const slideBackward = useCallback(() => {
        showedPicsIndex.current = sliderPics.findIndex(photoName => photoName === displayedPhoto);
        if (showedPicsIndex.current === 0) {
            return setDisplayedPhoto(sliderPics[sliderPics.length - 1]);
        } else {
            return setDisplayedPhoto(sliderPics[showedPicsIndex.current - 1]);
        }
    }, [sliderPics, displayedPhoto]);


    const changeSlideDot = slideId => {
        showedPicsIndex.current = sliderPics.findIndex(photoName => photoName === displayedPhoto);
        if (slideId === showedPicsIndex.current) {
            return;
        }
        setDisplayedPhoto(sliderPics[slideId]);
    };

    const dotsNavSlider = sliderPics.map((item, i) => (
        <DotNavSliderStyled
            onClick={() => changeSlideDot(i)}
            isActive={i === sliderPics.findIndex(photoName => photoName === displayedPhoto)}
            id={i}
            key={item}
        >
        </DotNavSliderStyled>
    ));

    useEffect(() => {
        sliderInterval.current = setInterval(slideForward, 8000);
        return () => {
            clearInterval(sliderInterval.current);
        }
    }, [sliderInterval, slideForward]);

    return (
        <HeadlineStyled>
            <HeadlineImageStyled
                ref={slideRef}
                src={displayedPhoto} />
            <SliderLeftButtonStyled
                onClick={slideBackward}
                src={leftArrow}
            />
            <SliderRightButtonStyled
                onClick={slideForward}
                src={rightArrow}
            />
            <HeadlineTitleStyled>Online Shopping!</HeadlineTitleStyled>
            <DotsNavSliderStyled>
                {dotsNavSlider}
            </DotsNavSliderStyled>
        </HeadlineStyled>
    )
}

export default Headline;