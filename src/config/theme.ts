import { colors } from './colors'

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
export type ThemeProps = {
  theme: Theme
}
export type StyledProps<T, U extends keyof T> = Pick<T, U> & ThemeProps

const baseTheme: Pick<Theme, 'base'> = {
  base: {
    radius: '4px',
  },
}

const lightTheme: Theme = {
  ...baseTheme,
  color: {
    primary: colors.blue[600],
    primaryText: colors.white,
    border: colors.gray[200],
    background: colors.white,
    disabledBackground: colors.gray[100],
    disabledBorder: colors.gray[200],
    text: colors.gray[800],
  },
}

const darkTheme: Theme = {
  ...baseTheme,
  color: {
    primary: colors.blue[500],
    primaryText: colors.white,
    border: colors.gray[100],
    background: colors.gray[900],
    disabledBackground: colors.gray[700],
    disabledBorder: colors.gray[600],
    text: colors.gray[100],
  },
}

export { lightTheme, darkTheme }
