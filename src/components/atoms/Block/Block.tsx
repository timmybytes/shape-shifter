import { useState, FC } from 'react'
import tw, { css, styled } from 'twin.macro'

export type BlockProps = {
  color: string
  size?: string | number
  shape?: 'square' | 'rounded'
}

export const Block = styled.article<BlockProps>(
  ({
    /**
     * Background color of block
     */
    color,
    /**
     * Size of block in pixels
     */
    size,
    /**
     * Border radius shape
     */
    shape = 'rounded',
  }) => [
    tw`border[4px solid #000000] transition[1s all] hover:(bg-black border-white)`,
    css`
      box-shadow: 4px -4px 8px rgba(0, 0, 0, 0.377);
      :hover {
        z-index: 0;
      }
    `,
    shape === 'square' &&
      css`
        background-color: ${color};
        max-width: min(50vw, ${size}px);
        height: min(50vw, ${size}px);
        width: 50vw;
      `,
    shape === 'rounded' &&
      css`
        background-color: ${color};
        border-radius: ${size}%;
        max-width: min(50vw, ${size}px);
        height: min(50vw, ${size}px);
        width: 50vw;
      `,
  ],
)
