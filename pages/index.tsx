import { useState } from 'react'
import tw, { css, styled } from 'twin.macro'

const ratios = {
  ratio: 1.236,
  baseSize: 10,
  scale: 19,
  sizes: [
    10, 12.36, 15.28, 18.89, 23.35, 28.86, 35.67, 44.09, 54.5, 67.36, 83.26,
    102.91, 127.2, 157.22, 194.32, 240.18, 296.86, 366.92, 453.51,
  ],
}

const colors = [
  '#001219',
  '#002533',
  '#005f73',
  '#027086',
  '#0a9396',
  '#12adaf',
  '#94d2bd',
  '#a3ebd3',
  '#e9d8a6',
  '#f7e7b9',
  '#ee9b00',
  '#ffb224',
  '#ca6702',
  '#c75000',
  '#bb3e03',
  '#aa3804',
  '#ae2012',
  '#9b1a0e',
  '#9b2226',
  '#7c191d',
]

const sizes = [
  10, 12, 14, 18, 22, 28, 32, 44, 108, 123, 111, 2, 77, 43, 202, 1000, 387, 254,
  222, 50, 55.9, 62.5, 69.88, 78.13, 87.35, 97.66, 109.18, 122.06, 136.46,
  152.56, 170.56, 190.69, 213.19, 238.35, 266.48, 297.92, 333.07, 372.37,
  416.31, 465.43, 520.35, 581.75, 650.4, 727.15, 812.95, 908.88, 1016.13,
  1136.03, 1270.08, 1419.95, 1587.5, 1774.83, 1984.26, 2218.4, 2480.17, 2772.83,
  3100.02, 3465.82, 3874.79,
]

const Wrapper = tw.main`w-screen h-screen bg-pink-700 overflow-x-hidden`

const ContainerGrid = tw.section`
  grid
  // grid-template-columns[repeat(auto-fill, minmax(1.9vw, 1fr))]
  grid-template-columns[repeat(10, 10%)]
  // grid-template-rows[repeat(30, 900px)]
  // grid-template-rows[repeat(50, 20vw)]
  grid-auto-rows[20vw]
  justify-center items-end justify-items-stretch
  gap[4px]
  w-screen relative`

const Block = styled.article<{
  color: string
  size?: string | number
  shape?: 'square' | 'rounded'
}>(({ color, size, shape = 'rounded' }) => [
  tw`border[4px solid #000000] transition[1s all] hover:(bg-black)`,
  css`
    box-shadow: 4px -4px 8px rgba(0, 0, 0, 0.377);
  `,
  shape === 'square' &&
    css`
      background-color: ${color};
      max-width: min(50vw, ${size || '200'}px);
      height: min(50vw, ${size || '200'}px);
      width: 50vw;
    `,
  shape === 'rounded' &&
    css`
      background-color: ${color};
      border-radius: ${size}%;
      max-width: min(50vw, ${size || '200'}px);
      height: min(50vw, ${size || '200'}px);
      width: 50vw;
    `,
])

const getRandomBlock = (colors, sizes) => {
  const [grow, setGrow] = useState<null | number>(null)
  let palette = new Array(5).fill(colors).flat()
  return palette.map((color, idx) => {
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
  })
}

const App = () => {
  return (
    <Wrapper>
      <ContainerGrid>
        {/* {colors.map((color, idx) => {
          const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
          return <Block key={idx} color={color} size={randomSize} />
        })} */}
        {getRandomBlock(colors, sizes)}
      </ContainerGrid>
    </Wrapper>
  )
}
export default App
