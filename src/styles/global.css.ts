import { globalStyle } from '@vanilla-extract/css'

import { tokens } from './themes/tokens.css'

globalStyle('*', {
  margin: 0,
  padding: 0,
  outline: 0,
  boxSizing: 'border-box',
})

globalStyle('*:focus', {
  outline: 2,
  outlineColor: tokens.colors['green-500'],
  outlineOffset: 2,
  outlineStyle: 'solid',
})

globalStyle('html, body, #app', {
  width: '100vw',
  height: '100vh',
})

globalStyle('#app', {
  backgroundColor: tokens.colors['gray-900'],
  color: tokens.colors['gray-300'],
})

globalStyle('body, input, textarea, button', {
  fontFamily: 'Roboto , sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
})
