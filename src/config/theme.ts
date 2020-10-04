import { NonFunctionProperties } from '../utils/type'
import { BLUE, GRAY, WHITE } from './color'

export type Theme = {
  base: {
    radius: string
  }
  color: {
    primary: string
    primaryText: string
    background: string
    disabledBackground: string
    border: string
    disabledBorder: string
    text: string
  }
}
export type StyledProps<P> = (
  | NonFunctionProperties<Required<P>>
  | Partial<P>
) & {
  theme: Theme
}

export type Base = {
  radius: string
}

const base: Base = {
  radius: '4px',
}

const baseTheme: Pick<Theme, 'base'> = {
  base: {
    radius: '4px',
  },
}

const lightTheme: Theme = {
  ...baseTheme,
  color: {
    primary: BLUE[600],
    primaryText: WHITE,
    border: GRAY[200],
    background: WHITE,
    disabledBackground: GRAY[100],
    disabledBorder: GRAY[200],
    text: GRAY[800],
  },
}

const darkTheme: Theme = {
  ...baseTheme,
  color: {
    primary: BLUE[500],
    primaryText: WHITE,
    border: GRAY[100],
    background: GRAY[900],
    disabledBackground: GRAY[700],
    disabledBorder: GRAY[600],
    text: GRAY[100],
  },
}

export { base, lightTheme, darkTheme }
