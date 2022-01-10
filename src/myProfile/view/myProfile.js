import React from 'react';
import { useSelector } from 'react-redux';

import { StyledMyProfile } from './myProfile.scss';

const MyProfile = (props) => {
  const userState = useSelector((state) => state.user);
  console.log(userState);

  return (
    <StyledMyProfile>
      <header>
        <h2>my profile</h2>
      </header>
      <article>
        <nav>
          <ul>
            <li>profile details</li>
            <li>orders</li>
          </ul>
        </nav>
      </article>
    </StyledMyProfile>
  );
};

export default MyProfile;
