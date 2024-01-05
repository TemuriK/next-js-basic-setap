import { ThemeColors } from '@/core/config/theme/types';
import { transparentize } from 'polished';
import { css, keyframes } from 'styled-components';
import { webScreenSizes } from '../variables/_variables';

// gets color from theme -----------------------------------------------------------------------------
export const colorFromTheme = (color: keyof ThemeColors, transparent?: number) => {
  return css`
    ${({ theme }: { theme: any }) => (transparent ? transparentize(transparent, theme.themeColors?.[color]) : theme.themeColors?.[color])};
  `;
};

// media quarry -----------------------------------------------------------------------------
export const media = (size: keyof typeof webScreenSizes) => {
  return ($style: any) => css`
    @media only screen and (max-width: ${webScreenSizes[size]}px) {
      ${$style}
    }
  `;
};

// svg font size ------------------------------------------------------
interface SvgFontSizeProps {
  size: number;
}

export const svgFontSize = ({ size }: SvgFontSizeProps) => css`
  font-size: ${size}px;
  min-width: ${size}px;
`;

// ellipses -----------------------------------------------------------

interface EllipsisProps {
  width?: string;
}

export const ellipsis = ({ width = 'initial' }: EllipsisProps) => css`
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ellipsisWithLineClamp = (count: number) => css`
  @supports (-webkit-line-clamp: ${count}) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: ${count};
    -webkit-box-orient: vertical;
  }
`;

// scrollbar ----------------------------------------------------------
interface ScrollBarProps {
  size?: number;
  trackBackground?: string;
  thumbBackground?: string;
  thumbHoverBackground?: string;
}

export const scrollBar = ({ size = 8, trackBackground = '#d3d9e321', thumbBackground = '#d3d9e3', thumbHoverBackground = '#d3d9e3' }: ScrollBarProps) => css`
  /* for chrome */
  &::-webkit-scrollbar {
    width: ${size}px;
    height: ${size}px;
  }

  &::-webkit-scrollbar-track {
    background: ${trackBackground};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${thumbBackground};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${thumbHoverBackground};
  }

  /* for firefox */
  scrollbar-width: thin;
  scrollbar-color: ${trackBackground} ${thumbBackground};
`;

// key frames ----------------------------------------------------------------------------------
export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
