import React, { useEffect, useRef, useState, useMemo } from 'react';

import { changeSlideDot, slideBackward, slideForward } from '../data/dataMain';

import {
  HeadlineStyled,
  HeadlineTitleStyled,
  SliderLeftButtonStyled,
  SliderRightButtonStyled,
  DotsNavSliderStyled,
  DotNavSliderStyled,
} from '../style/headline.scss';

import photo1 from '../../assets/headerPic1.jpg';
import photo2 from '../../assets/headerPic2.jpg';
import photo3 from '../../assets/headerPic3.jpg';

import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import Slider from './slide';

const Headline = () => {
  const sliderInterval = useRef(null);
  const showedPicsIndex = useRef(null);
  const [displayedPhoto, setDisplayedPhoto] = useState(photo1);
  const sliderPics = useMemo(() => [photo1, photo2, photo3], []);

  const dotsNavSlider = sliderPics.map((item, i) => (
    <DotNavSliderStyled
      onClick={() =>
        changeSlideDot(
          i,
          sliderPics,
          displayedPhoto,
          setDisplayedPhoto,
          showedPicsIndex
        )
      }
      isActive={
        i === sliderPics.findIndex((photoName) => photoName === displayedPhoto)
      }
      id={i}
      key={item}
    ></DotNavSliderStyled>
  ));

  useEffect(() => {
    sliderInterval.current = setInterval(
      () =>
        slideForward(
          showedPicsIndex,
          sliderPics,
          displayedPhoto,
          setDisplayedPhoto
        ),
      8000
    );
    return () => {
      clearInterval(sliderInterval.current);
    };
  }, [sliderInterval, sliderPics, displayedPhoto]);

  return (
    <HeadlineStyled>
      <Slider sliderPics={sliderPics} displayedPhoto={displayedPhoto} />

      <SliderLeftButtonStyled
        onClick={() =>
          slideBackward(
            showedPicsIndex,
            sliderPics,
            displayedPhoto,
            setDisplayedPhoto
          )
        }
        src={leftArrow}
      />
      <SliderRightButtonStyled
        onClick={() =>
          slideForward(
            showedPicsIndex,
            sliderPics,
            displayedPhoto,
            setDisplayedPhoto
          )
        }
        src={rightArrow}
      />
      <HeadlineTitleStyled>Online Shopping!</HeadlineTitleStyled>
      <DotsNavSliderStyled>{dotsNavSlider}</DotsNavSliderStyled>
    </HeadlineStyled>
  );
};

export default Headline;
