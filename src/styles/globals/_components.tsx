import { css } from 'styled-components';
import { colorFromTheme, media } from '../mixins/_mixins';

// custom styles for elements ------------------------------------------------------------------------
interface NavMenuItemProps {
  active?: boolean;
  hover?: boolean;
}

export const navMenuItem = ({ active = true, hover = true }: NavMenuItemProps) => css`
  color: ${colorFromTheme('blue')};
  font-weight: bold;
  white-space: nowrap;
  text-transform: capitalize;
  transition: 0.13s ease-out;
  ${cleanLink};

  ${active &&
  css`
    &.active {
      color: ${colorFromTheme('green')};
    }
  `}

  ${hover &&
  css`
    &:hover {
      color: ${colorFromTheme('green')};
      transition: 0.13s ease-in;
    }
  `}
`;

interface PageSectionProps {
  display: 'margin' | 'padding' | 'empty';
  sizes: {
    top: [number, number, number];
    bottom: [number, number, number];
  };
}

export const pageSection = ({ display = 'margin', sizes }: PageSectionProps) => {
  return css`
    max-width: 1200px;
    margin: ${display === 'margin' ? `${sizes?.top?.[0]}px auto ${sizes?.bottom?.[0]}px auto;` : '0 auto'};
    ${display === 'padding' && `padding: ${sizes?.top?.[0]}px 0 ${sizes?.bottom?.[0]}px 0;`};

    ${media('upTo_1400')(css`
      max-width: 1100px;
      margin: ${display === 'margin' ? `${sizes?.top?.[1]}px auto ${sizes?.bottom?.[1]}px auto;` : '0 auto'};
      ${display === 'padding' && `padding: ${sizes?.top?.[1]}px 0 ${sizes?.bottom?.[1]}px 0;`};
    `)};
    ${media('upTo_1200')(css`
      max-width: 1000px;
    `)};
    ${media('upTo_1100')(css`
      padding-left: 20px !important;
      padding-right: 20px !important;
    `)};
    ${media('upTo_700')(css`
      margin: ${display === 'margin' ? `${sizes?.top?.[2]}px auto ${sizes?.bottom?.[2]}px auto;` : '0 auto'};
      ${display === 'padding' && `padding: ${sizes?.top?.[2]}px 0 ${sizes?.bottom?.[2]}px 0;`};
    `)}
  `;
};

type helloMessageSize = 'full' | 'half';

export const helloMessage = (size: helloMessageSize) => {
  if (size === 'full') {
    return css`
      font-size: 60px;
      color: ${colorFromTheme('blue')};
      font-weight: bold;
      text-align: center;

      ${media('upTo_1400')(css`
        font-size: 50px;
      `)};
      ${media('upTo_1200')(css`
        font-size: 45px;
      `)};
      ${media('upTo_700')(css`
        font-size: 32px;
      `)}
    `;
  }
  if (size === 'half') {
    return css`
      font-size: 60px;
      color: ${colorFromTheme('blue')};
      font-weight: bold;

      ${media('upTo_1400')(css`
        font-size: 50px;
      `)};
      ${media('upTo_1200')(css`
        font-size: 44px;
      `)};
      ${media('upTo_700')(css`
        font-size: 32px;
      `)};
      ${media('upTo_500')(css`
        font-size: 30px;
      `)}
    `;
  }

  return '';
};

type helloParagraphSize = 'half';

export const helloParagraph = (size: helloParagraphSize) => {
  if (size === 'half') {
    return css`
      font-size: 18px;
      color: ${colorFromTheme('blue')};

      ${media('upTo_500')(css`
        font-size: 16px;
      `)};
    `;
  }

  return '';
};

export const sectionHeader = css`
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  margin: 0 auto 50px auto;

  ${media('upTo_1400')(css`
    margin: 0 auto 40px auto;
    font-size: 32px;
  `)}
  ${media('upTo_1100')(css`
    font-size: 30px;
  `)}
  ${media('upTo_700')(css`
    margin: 0 auto 30px auto;
    font-size: 28px;
  `)}
  ${media('upTo_500')(css`
    font-size: 24px;
  `)}
`;

// clean components ------------------------------------
export const cleanButton = css`
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
`;

export const cleanLink = css`
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  text-decoration: none;
  cursor: pointer;
`;
