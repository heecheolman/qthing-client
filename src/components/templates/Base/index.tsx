import React from 'react'
import styled from '@emotion/styled/macro'
import Box from '../../molecules/Box'
import Gnb from '../../organisms/Gnb'

const Container = styled(Box)`
  padding-top: 60px;
  height: calc(100% - 60px);
`

const Content = styled(Box)`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  padding: 0 48px;
`

interface IProps {}

const BaseTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Gnb />
      <Content>{children}</Content>
    </Container>
  )
}
export default BaseTemplate
