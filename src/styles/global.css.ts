import { globalStyle } from '@vanilla-extract/css'

globalStyle("*", {
  margin: 0,
  padding: 0,
  outline: 0,
  boxSizing: 'border-box',
})

globalStyle('*:focus', {
  outline: 2,
  outlineColor:'#00875F',
  outlineOffset: 2,
  outlineStyle: 'solid'
})

globalStyle('body', {
  backgroundColor: '#121214',
  color: '#C4C4CC'
})

globalStyle('body, input, textarea, button', {
  fontFamily: 'Roboto , sans-serif',
  fontWeight: 400,
  fontSize: '1rem'
})
