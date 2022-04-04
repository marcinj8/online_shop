import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MyProfileData from '../components/myProfileData';
import MyProfileNavigation from '../components/navigation';

import { StyledMyProfile } from './myProfile.scss';

const MyProfile = (props) => {
  const [currentView, setCurrentView] = useState('user');
  const userState = useSelector((state) => state.user);
  console.log(userState);

  return (
    <StyledMyProfile>
      <article>
        <MyProfileNavigation
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        {currentView === 'user' && <MyProfileData user={userState.userData} />}
      </article>
    </StyledMyProfile>
  );
};

export default MyProfile;
