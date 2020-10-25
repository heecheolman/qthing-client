import { colors } from './colors'

export type Theme = {
  base: {
    radius: string
    fontSize: string
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
    radius: '8px',
    fontSize: '13px',
  },
}

const lightTheme: Theme = {
  ...baseTheme,
  color: {
    primary: colors.blue[5],
    primaryText: colors.white,
    border: colors.gray[3],
    background: colors.white,
    disabledBackground: colors.gray[2],
    disabledBorder: colors.gray[2],
    text: colors.gray[7],
  },
}

const darkTheme: Theme = {
  ...baseTheme,
  color: {
    primary: colors.blue[5],
    primaryText: colors.white,
    border: colors.gray[1],
    background: colors.gray[9],
    disabledBackground: colors.gray[7],
    disabledBorder: colors.gray[6],
    text: colors.gray[1],
  },
}

export { lightTheme, darkTheme }
