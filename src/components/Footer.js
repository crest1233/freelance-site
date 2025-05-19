import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: #121212;
  color: #bbb;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Tanishk Singh | All Rights Reserved.
    </FooterContainer>
  );
};

export default Footer;
