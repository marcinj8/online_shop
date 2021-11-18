import React from 'react';

import { FooterStyled, FooterMailToStyled, FooterSocialIconsContainerStyled, FooterSocialIconStyled } from './footer.scss';
import fbLogo from '../assets/fbIcon.svg';
import instagramLogo from '../assets/instagramIcon.svg';
import ytLogo from '../assets/ytIcon.svg';

const Footer = () => {

    const onClickMedia = (media) => {
        alert('There can be link to ' + media)
    }

    return (
        <FooterStyled>
            <FooterMailToStyled href={`mailto:marcin.janerka@gmail.com`}>Click to send us email</FooterMailToStyled>
            <div>
                Copyright 2021 Marcin Janerka All Rights Reserved
            </div>
            <FooterSocialIconsContainerStyled>
                <FooterSocialIconStyled
                    onClick={() => onClickMedia('Facebook')}
                    src={fbLogo} alt="" />
                <FooterSocialIconStyled
                    onClick={() => onClickMedia('Instagram')}
                    src={instagramLogo} alt="" />
                <FooterSocialIconStyled
                    onClick={() => onClickMedia('YouTuBe')}
                    src={ytLogo} alt="" />
            </FooterSocialIconsContainerStyled>
        </FooterStyled>
    )
}

export default Footer;