import React from 'react';

import AddressDetails from '../../cart/components/addressDetails';
import {
  StyledMyProfileData,
  StyledMyProfileDataContent,
} from '../style/myProfileData.scss';
// import { Button } from '../../shared/components/button';

const MyProfileData = ({ user }) => {
  return (
    <StyledMyProfileData>
      <StyledMyProfileDataContent>
        <span>Hello </span>
        <h3>{user.userName}</h3>
        <div>Mail: {user.email}</div>
      </StyledMyProfileDataContent>
      {/* <Button
        buttonType='primary'
        template='set address'
        styled={{ background: 'rgb(63, 224, 252)', hoverBg: 'rgb(155, 235, 250)' }}
        clicked={() => console.log('add address')}
      /> */}
      <StyledMyProfileDataContent>
        <div>default addres of delivery</div>
        <AddressDetails show={true} />
      </StyledMyProfileDataContent>
    </StyledMyProfileData>
  );
};

export default MyProfileData;
