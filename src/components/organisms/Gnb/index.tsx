/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Button, { ButtonSize, ButtonVariant } from '../../atoms/Button'
import Box, {
  AlignItems,
  DisplayType,
  JustifyContent,
} from '../../molecules/Box'
import { colors } from '../../../config/colors'
import { NavLink } from 'react-router-dom'

const GNB_STYLE = css`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray[100]};
`

const INNER_GNB_STYLE = css`
  height: 60px;
  max-width: 1100px;
  padding-left: 48px;
  padding-right: 48px;
  margin: 0 auto;
`

interface IProps {}

const Gnb: React.FC<IProps> = ({ ...props }) => {
  return (
    <Box css={[GNB_STYLE]} {...props}>
      <Box
        css={INNER_GNB_STYLE}
        display={DisplayType.FLEX}
        alignItems={AlignItems.CENTER}
        justifyContent={JustifyContent.SPACE_BETWEEN}
      >
        <Box>
          <NavLink to="/">
            <Button variant={ButtonVariant.TEXT}>홈</Button>
          </NavLink>
          <NavLink to="/menu1">
            <Button variant={ButtonVariant.TEXT}>메뉴1</Button>
          </NavLink>
          <NavLink to="/menu2">
            <Button variant={ButtonVariant.TEXT}>메뉴2</Button>
          </NavLink>
        </Box>
        <Button variant={ButtonVariant.PRIMARY}>질문하기</Button>
      </Box>
    </Box>
  )
}
export default Gnb
