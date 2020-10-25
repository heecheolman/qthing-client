/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button, {
  ButtonSize,
  ButtonVariant,
} from '../../components/atoms/Button'
import Input, { InputSize, InputType } from '../../components/atoms/Input'
import Title from '../../components/atoms/Title'
import Box from '../../components/molecules/Box'
import CenterTemplate from '../../components/templates/Center'
import { fakeAuth } from '../../routes'

const Login: React.FC = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const onLogin = () => {
    fakeAuth.isAuthenticated = true
    history.push('/')
  }

  return (
    <CenterTemplate>
      <Box
        css={css`
          padding: 0 20px;
        `}
      >
        <Title
          heading="h2"
          css={css`
            text-align: center;
          `}
        >
          큐띵
        </Title>
        <Input
          size={InputSize.LARGE}
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          css={css`
            margin-bottom: 12px;
          `}
        />
        <Input
          size={InputSize.LARGE}
          type={InputType.PASSWORD}
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          css={css`
            margin-bottom: 24px;
          `}
        />
        <Button
          block
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.LARGE}
          disabled={!id || !password}
          onClick={onLogin}
        >
          로그인
        </Button>
      </Box>
    </CenterTemplate>
  )
}
export default Login
