import tw, { css, styled } from 'twin.macro'
import { RandomBlocks } from '../components/organisms/RandomBlocks'

const App = () => {
  return (
    <Wrapper>
      <RandomBlocks />
    </Wrapper>
  )
}

const Wrapper = tw.main`w-screen h-screen bg-pink-700 overflow-x-hidden`

export default App
