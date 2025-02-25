// Copyright (c) 2022 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import {css} from 'styled-components';

// These are useful for test or when theme doesn't define them
const breakPoints = {
  palm: 588,
  desk: 768
};

/**
 * Contains media rules for different device types
 * @namespace
 * @property {object}  media
 * @property {string}  media.palm - rule for palm devices
 * @property {string}  media.portable - rule for portable devices
 * @property {string}  media.desk - rule for desktops
 */

export const media = {
  palm: (...args): string => css`
    @media (max-width: ${props => (props.theme.breakPoints || breakPoints).palm}px) {
      ${css(...args)};
    }
  `,

  portable: (...args): string => css`
    @media (max-width: ${props => (props.theme.breakPoints || breakPoints).desk}px) {
      ${css(...args)};
    }
  `,

  desk: (...args): string => css`
    @media (min-width: ${props => (props.theme.breakPoints || breakPoints).desk + 1}px) {
      ${css(...args)};
    }
  `
};
