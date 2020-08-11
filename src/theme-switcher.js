// @media (prefers-color-scheme: dark) {

const colorSchemeMql = window.matchMedia('(prefers-color-scheme: dark)')
colorSchemeMql.addListener(setTheme)

function setTheme (e) {
  const isDarkMode = e.matches
  const colorScheme = window.sessionStorage.getItem('color-scheme')
  const body = document.body
  switch (colorScheme) {
    case 'dark': {
      if (isDarkMode) window.sessionStorage.setItem('color-scheme', 'automatic')
      body.classList.toggle('light-mode', false)
      body.classList.toggle('dark-mode', true)
      break
    }
    case 'light': {
      if (!isDarkMode) window.sessionStorage.setItem('color-scheme', 'automatic')
      body.classList.toggle('light-mode', true)
      body.classList.toggle('dark-mode', false)
      break
    }
    case 'automatic':
    default: {
      body.classList.toggle('light-mode', isDarkMode === false)
      body.classList.toggle('dark-mode', isDarkMode === true)
      break
    }
  }
}

setTheme(window.matchMedia('(prefers-color-scheme: dark)'))

export function toggleTheme () {
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const isDarkMode = mql.matches
  const colorScheme = window.sessionStorage.getItem('color-scheme')

  switch (colorScheme) {
    case 'dark': {
      window.sessionStorage.setItem('color-scheme', isDarkMode ? 'light' : 'automatic')
      break
    }
    case 'light': {
      window.sessionStorage.setItem('color-scheme', isDarkMode ? 'automatic' : 'dark')
      break
    }
    case 'automatic':
    default: {
      window.sessionStorage.setItem('color-scheme', isDarkMode ? 'light' : 'dark')
      break
    }
  }
  setTheme(mql)
}
