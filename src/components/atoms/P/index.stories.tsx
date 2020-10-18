import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import P, { TextAlign, WhiteSpace, WordBreak } from './index'

export default {
  title: 'Components/Atoms/P',
  component: P,
  argTypes: {
    textAlign: {
      control: {
        type: 'radio',
        options: [
          TextAlign.LEFT,
          TextAlign.CENTER,
          TextAlign.RIGHT,
          TextAlign.JUSTIFY,
        ],
      },
    },
    whiteSpace: {
      control: {
        type: 'radio',
        options: [
          WhiteSpace.NORMAL,
          WhiteSpace.BREAK_SPACES,
          WhiteSpace.PRE,
          WhiteSpace.PRE_LINE,
          WhiteSpace.PRE_WRAP,
          WhiteSpace.NOWRAP,
        ],
      },
    },
    wordBreak: {
      control: {
        type: 'radio',
        options: [
          WordBreak.NORMAL,
          WordBreak.BREAK_WORD,
          WordBreak.KEEP_ALL,
          WordBreak.BREAK_ALL,
        ],
      },
    },
  },
} as Meta

const Template: Story = (props) => <P {...props} />

export const Default = Template.bind({})
Default.args = {
  children: `하여도 착목한는 부패를 끝까지 보이는 품에 것이다. 인도하겠다는 동력은 관현악이며, 이상은 것이 그들은 풀이 대고, 있으랴? 열락의 부패를 없으면 능히 되려니와, 되는 것은 황금시대를 때문이다. 평화스러운 이상의 끝에 꾸며 가슴에 보라. 못할 평화스러운 두기 예가 가지에 때문이다. 원대하고, 우는 않는 불어 설레는 있는 새가 그들은 피다. 곳이 피고, 방지하는 군영과 때문이다. 인생의 내려온 주며, 얼마나 뼈 것이다. 청춘의 붙잡아 위하여 청춘이 심장의 주며, 얼음 끝에 가슴에 교향악이다. 앞이 얼마나 하는 설레는 황금시대의 풀이 철환하였는가? 보내는 하는 하는 그러므로 힘차게 광야에서 청춘은 봄바람이다.`,
  textAlign: TextAlign.LEFT,
  whiteSpace: WhiteSpace.NORMAL,
  wordBreak: WordBreak.NORMAL,
  ellipsis: false,
}

export const Ellipsis = Template.bind({})
Ellipsis.args = {
  ...Default.args,
  ellipsis: true,
}
