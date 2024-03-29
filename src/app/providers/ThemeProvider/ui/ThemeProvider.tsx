import React, { FC } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface Props {
  children: React.ReactElement
}

const ThemeProvider: FC<Props> = ({ children }): React.ReactElement => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const defaultProps = React.useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <>
      <ThemeContext.Provider value={defaultProps}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider;
