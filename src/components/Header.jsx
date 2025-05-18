import NavigationMenu from './NavigationMenu'

export default function Header({ toggleTheme, currentTheme }) {
  return (
    <header className="header">
      <div className="logo"></div>
      <NavigationMenu />
      <button onClick={toggleTheme} className="theme-toggle">
        {currentTheme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  )
}
