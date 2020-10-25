import React from 'react'
import styled from '@emotion/styled/macro'
import Box, {
  AlignItems,
  DisplayType,
  JustifyContent,
} from '../../molecules/Box'

const Container = styled(Box)`
  width: 100%;
  height: 100%;
`

interface IProps {}

const CenterTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <Container
      display={DisplayType.FLEX}
      alignItems={AlignItems.CENTER}
      justifyContent={JustifyContent.CENTER}
    >
      {children}
    </Container>
  )
}

export default CenterTemplate
