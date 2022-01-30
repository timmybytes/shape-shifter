import React, { FC } from 'react'
import { CustomCssProps } from '../../../types'
import tw, { css, styled } from 'twin.macro'

type CardProps = CustomCssProps & {
  img?: string
  heading?: string
  body?: string
  onClick?: (e?) => void
}

const Card: FC<CardProps> = ({
  /**
   *
   */
  children,
}) => {
  return <Container>{children}</Container>
}

type ContainerProps = CardProps
const Container = styled.div<ContainerProps>(({ img, heading, body }) => [
  tw``,
  img && tw``,
  heading && tw``,
  body && tw``,
])
