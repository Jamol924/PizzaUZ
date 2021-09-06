import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import { FooterContainer, FooterWraper, SocialMediaWrap, SocialMedia, SocialLogo, SocialIconLink, SocialIcon } from './FooterEliment'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWraper>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">pizza</SocialLogo>
                        <SocialIcon>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWraper>
        </FooterContainer>
    )
}

export default Footer
