import React, { useRef, useState } from 'react';
import { HeadlineImageStyled } from '../style/headline.scss';

const Slide = ({ slideRef, displayedPhoto, photo }) => {
  const isDisplayed = displayedPhoto === photo;

  return (
    <HeadlineImageStyled isDisplayed={isDisplayed} ref={slideRef} src={photo} />
  );
};

const Slider = ({ displayedPhoto, sliderPics }) => {
  const [photoId, setPhotoId] = useState(null);
  const slideRef = useRef(null);

  const slider = sliderPics.map((photo, i) => {
    return (
      <Slide
        key={i}
        slideRef={slideRef}
        displayedPhoto={displayedPhoto}
        photo={photo}
      />
    );
  });

  return slider;
};

export default Slider;
