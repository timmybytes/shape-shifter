import React, { FC } from 'react'
import tw, { css, styled } from 'twin.macro'
import { CustomCssProps } from '~/config'

type ContainerGridProps = CustomCssProps & {}

/**
 * Responsive grid container
 */
export const ContainerGrid: FC<ContainerGridProps> = ({
  children,
  customCss,
}) => {
  return <Container css={customCss}>{children}</Container>
}

const Container = tw.section`
grid grid-template-columns[repeat(10, 10%)] grid-auto-rows[20vw]
justify-center items-end justify-items-stretch gap[4px]
w-screen relative`
