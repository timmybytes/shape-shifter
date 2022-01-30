import { ContainerGrid } from '../../../components/wrappers'
import { Block } from '../../../components/atoms'
import React, { FC, useState } from 'react'
import { colors } from '../../../styles'

const sizes = [
  10, 12, 14, 18, 22, 28, 32, 44, 108, 123, 111, 2, 77, 43, 202, 1000, 387, 254,
  222, 50, 55.9, 62.5, 69.88, 78.13, 87.35, 97.66, 109.18, 122.06, 136.46,
  152.56, 170.56, 190.69, 213.19, 238.35, 266.48, 297.92, 333.07, 372.37,
  416.31, 465.43, 520.35, 581.75, 650.4, 727.15, 812.95, 908.88, 1016.13,
  1136.03, 1270.08, 1419.95, 1587.5, 1774.83, 1984.26, 2218.4, 2480.17, 2772.83,
  3100.02, 3465.82, 3874.79,
]

type RandomBlocksProps = {
  //
}

/**
 *
 */
export const RandomBlocks: FC<RandomBlocksProps> = props => {
  const [grow, setGrow] = useState<null | number>(null)
  const palette = new Array(5).fill(colors).flat()
  return (
    <ContainerGrid>
      {palette.map((color, idx) => {
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        return (
          <Block
            key={idx}
            color={randomColor}
            size={grow || randomSize}
            shape={randomSize > 300 ? 'rounded' : 'square'}
            onClick={() => {
              !grow
                ? setGrow(sizes[Math.floor(Math.random() * sizes.length)])
                : setGrow(null)
            }}
          />
        )
      })}
    </ContainerGrid>
  )
}
