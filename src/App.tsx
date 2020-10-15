/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'

import './App.scss'
import Button, { ButtonSize, ButtonVariant } from './components/atoms/Button'
import Span from './components/atoms/Span'
import P, { TextAlign, WhiteSpace, WordBreak } from './components/atoms/P'
import Input, { InputSize } from './components/atoms/Input'
import Box, {
  AlignItems,
  Direction,
  DisplayType,
  JustifyContent,
} from './components/molecules/Box'
import { ThemeProvider } from 'emotion-theming'
import { lightTheme, darkTheme } from './config/theme'
import Checkbox from './components/atoms/Checkbox'
import { colors } from './config/colors'
import SearchBar, { SearchBarSize } from './components/molecules/SearchBar'

const App: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  const [checked1, setCheckbox1] = useState(false)
  const [checked2, setCheckbox2] = useState(true)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div
        className="App"
        style={{
          backgroundColor: isDarkMode ? colors.gray[900] : colors.white,
        }}
      >
        <Checkbox
          checked={isDarkMode}
          onChange={() => setDarkMode(!isDarkMode)}
        >
          다크모드
        </Checkbox>

        <Box
          css={css`
            margin: 20px 0;
          `}
        >
          <Checkbox checked>안녕하세요</Checkbox>
          <Checkbox checked>안녕하세요</Checkbox>
          <Checkbox checked={checked1} onChange={() => setCheckbox1(!checked1)}>
            안녕하세요
          </Checkbox>
          <Checkbox
            disabled
            checked={checked1}
            onChange={() => setCheckbox1(!checked1)}
          >
            안녕하세요
          </Checkbox>
          <Checkbox checked={checked2} onChange={() => setCheckbox2(!checked2)}>
            안녕하세요2
          </Checkbox>
          <Checkbox checked={checked2} onChange={() => setCheckbox2(!checked2)}>
            안녕하세요2
          </Checkbox>
          <Checkbox checked={checked2} onChange={() => setCheckbox2(!checked2)}>
            안녕하세요2
          </Checkbox>
        </Box>
        <Box
          display={DisplayType.FLEX}
          alignItems={AlignItems.NORMAL}
          justifyContent={JustifyContent.NORMAL}
          direction={Direction.ROW}
          css={css`
            margin-bottom: 10px;
          `}
        >
          <Button variant={ButtonVariant.DEFAULT} size={ButtonSize.SMALL}>
            버튼
          </Button>
          <Button variant={ButtonVariant.DEFAULT} size={ButtonSize.MEDIUM}>
            버튼
          </Button>
          <Button variant={ButtonVariant.DEFAULT} size={ButtonSize.LARGE}>
            버튼
          </Button>
        </Box>
        <Box
          css={css`
            margin-bottom: 10px;
          `}
        >
          <SearchBar
            css={css`
              max-width: 300px;
            `}
            placeholder="Search..."
            size={SearchBarSize.SMALL}
            buttonText="검색"
          />
          <SearchBar
            css={css`
              max-width: 300px;
            `}
            placeholder="Search..."
            size={SearchBarSize.MEDIUM}
            buttonText="검색"
          />
          <SearchBar
            css={css`
              max-width: 300px;
            `}
            placeholder="Search..."
            size={SearchBarSize.LARGE}
            buttonText="검색"
          />
        </Box>
        <Box
          display={DisplayType.FLEX}
          alignItems={AlignItems.NORMAL}
          justifyContent={JustifyContent.NORMAL}
          direction={Direction.ROW}
          css={css`
            margin-bottom: 10px;
          `}
        >
          <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.SMALL}>
            버튼
          </Button>
          <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.MEDIUM}>
            버튼
          </Button>
          <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LARGE}>
            버튼
          </Button>
        </Box>
        <Box
          display={DisplayType.FLEX}
          direction={Direction.COL}
          css={css`
            max-width: 400px;
          `}
        >
          <Box
            css={css`
              margin-bottom: 20px;
            `}
          >
            <Input placeholder="입력해주세요" size={InputSize.SMALL} />
            <Input placeholder="입력해주세요" size={InputSize.MEDIUM} />
            <Input placeholder="입력해주세요" size={InputSize.LARGE} />
          </Box>
          <Box>
            <Input placeholder="입력해주세요" size={InputSize.SMALL} disabled />
            <Input
              placeholder="입력해주세요"
              size={InputSize.MEDIUM}
              disabled
            />
            <Input placeholder="입력해주세요" size={InputSize.LARGE} disabled />
          </Box>
        </Box>
        <Box
          display={DisplayType.FLEX}
          css={css`
            max-width: 200px;
          `}
        >
          <Input />
          <Button>검색</Button>
        </Box>
        <Box
          display={DisplayType.FLEX}
          direction={Direction.COL}
          css={css`
            margin-bottom: 20px;
          `}
        >
          <Span fontSize={20} fontWeight={100}>
            안녕하세요
          </Span>
          <Span fontSize={20} fontWeight={200}>
            안녕하세요
          </Span>
          <Span fontSize={20} fontWeight={300}>
            안녕하세요
          </Span>
          <Span fontSize={20} fontWeight={400}>
            안녕하세요
          </Span>
          <Span fontSize={20} fontWeight={500}>
            안녕하세요
          </Span>
          <Span fontSize={20} fontWeight={600}>
            안녕하세요
          </Span>
          <Span fontSize={20} fontWeight={700}>
            안녕하세요
          </Span>
          <Span fontSize={20} fontWeight={800}>
            안녕하세요
          </Span>
          <Span fontSize={20} fontWeight={900}>
            안녕하세요
          </Span>
        </Box>
        <Box display={DisplayType.FLEX} direction={Direction.COL}>
          <P textAlign={TextAlign.LEFT}>
            무엇을 날카로우나 밥을 황금시대의 내려온 뼈 사랑의 이것이야말로
            있다. 같은 용기가 인류의 미묘한 있는가? 현저하게 커다란 이상의 꽃이
            용감하고 거친 만물은 되는 사막이다. 이는 두손을 아니더면, 있는 대고,
            천자만홍이 봄바람이다. 얼마나 붙잡아 얼마나 이것을 이 있으랴? 놀이
            만천하의 스며들어 설레는 인생을 살았으며, 힘있다. 얼마나
            인도하겠다는 앞이 용기가 눈이 꾸며 실현에 새가 것이다. 맺어, 품었기
            산야에 길을 길지 피다. 곳으로 있는 타오르고 되는 바로 아름다우냐?
          </P>
          <P textAlign={TextAlign.CENTER}>
            무엇을 날카로우나 밥을 황금시대의 내려온 뼈 사랑의 이것이야말로
            있다. 같은 용기가 인류의 미묘한 있는가? 현저하게 커다란 이상의 꽃이
            용감하고 거친 만물은 되는 사막이다. 이는 두손을 아니더면, 있는 대고,
            천자만홍이 봄바람이다. 얼마나 붙잡아 얼마나 이것을 이 있으랴? 놀이
            만천하의 스며들어 설레는 인생을 살았으며, 힘있다. 얼마나
            인도하겠다는 앞이 용기가 눈이 꾸며 실현에 새가 것이다. 맺어, 품었기
            산야에 길을 길지 피다. 곳으로 있는 타오르고 되는 바로 아름다우냐?
          </P>
          <P textAlign={TextAlign.RIGHT}>
            무엇을 날카로우나 밥을 황금시대의 내려온 뼈 사랑의 이것이야말로
            있다. 같은 용기가 인류의 미묘한 있는가? 현저하게 커다란 이상의 꽃이
            용감하고 거친 만물은 되는 사막이다. 이는 두손을 아니더면, 있는 대고,
            천자만홍이 봄바람이다. 얼마나 붙잡아 얼마나 이것을 이 있으랴? 놀이
            만천하의 스며들어 설레는 인생을 살았으며, 힘있다. 얼마나
            인도하겠다는 앞이 용기가 눈이 꾸며 실현에 새가 것이다. 맺어, 품었기
            산야에 길을 길지 피다. 곳으로 있는 타오르고 되는 바로 아름다우냐?
          </P>
          <P whiteSpace={WhiteSpace.NORMAL} wordBreak={WordBreak.KEEP_ALL}>
            무엇을 날카로우나 밥을 황금시대의 내려온 뼈 사랑의 이것이야말로
            있다. 같은 용기가 인류의 미묘한 있는가? 현저하게 커다란 이상의 꽃이
            용감하고 거친 만물은 되는 사막이다. 이는 두손을 아니더면, 있는 대고,
            천자만홍이 봄바람이다. 얼마나 붙잡아 얼마나 이것을 이 있으랴? 놀이
            만천하의 스며들어 설레는 인생을 살았으며, 힘있다. 얼마나
            인도하겠다는 앞이 용기가 눈이 꾸며 실현에 새가 것이다. 맺어, 품었기
            산야에 길을 길지 피다. 곳으로 있는 타오르고 되는 바로 아름다우냐?
          </P>
        </Box>
        <Box>
          <P ellipsis>
            무엇을 날카로우나 밥을 황금시대의 내려온 뼈 사랑의 이것이야말로
            있다. 같은 용기가 인류의 미묘한 있는가? 현저하게 커다란 이상의 꽃이
            용감하고 거친 만물은 되는 사막이다. 이는 두손을 아니더면, 있는 대고,
            천자만홍이 봄바람이다. 얼마나 붙잡아 얼마나 이것을 이 있으랴? 놀이
            만천하의 스며들어 설레는 인생을 살았으며, 힘있다. 얼마나
            인도하겠다는 앞이 용기가 눈이 꾸며 실현에 새가 것이다. 맺어, 품었기
            산야에 길을 길지 피다. 곳으로 있는 타오르고 되는 바로 아름다우냐?
          </P>
        </Box>
      </div>
    </ThemeProvider>
  )
}

export default App
