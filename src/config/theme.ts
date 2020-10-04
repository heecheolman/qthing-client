import { BLUE, GRAY, WHITE } from './color'

export type Theme = {
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

export type Base = {
  radius: string
}

const base: Base = {
  radius: '4px',
}

const lightTheme: Theme = {
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
