export const slideForward = (
  showedPicsIndex,
  sliderPics,
  displayedPhoto,
  setDisplayedPhoto
) => {
  showedPicsIndex.current = sliderPics.findIndex(
    (photoName) => photoName === displayedPhoto
  );
  if (showedPicsIndex.current === sliderPics.length - 1) {
    return setDisplayedPhoto(sliderPics[0]);
  } else {
    return setDisplayedPhoto(sliderPics[showedPicsIndex.current + 1]);
  }
};

export const slideBackward = (
  showedPicsIndex,
  sliderPics,
  displayedPhoto,
  setDisplayedPhoto
) => {
  showedPicsIndex.current = sliderPics.findIndex(
    (photoName) => photoName === displayedPhoto
  );
  if (showedPicsIndex.current === 0) {
    return setDisplayedPhoto(sliderPics[sliderPics.length - 1]);
  } else {
    return setDisplayedPhoto(sliderPics[showedPicsIndex.current - 1]);
  }
};

export const changeSlideDot = (
  slideId,
  sliderPics,
  displayedPhoto,
  setDisplayedPhoto,
  showedPicsIndex
) => {
  showedPicsIndex.current = sliderPics.findIndex(
    (photoName) => photoName === displayedPhoto
  );
  if (slideId === showedPicsIndex.current) {
    return;
  }
  setDisplayedPhoto(sliderPics[slideId]);
};
