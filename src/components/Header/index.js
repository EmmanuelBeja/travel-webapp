import React, { useState, useEffect } from 'react'

const Header = () => {
  const [activeTheme, setActiveTheme] = useState('light')
  const [themeIcon, setThemeIcon] = useState('ri-sun-line')

  const handleThemeSwitch = () => {
    document.body.classList.toggle('dark-theme')

    // We save the theme and the current icon that the user chose
    if (activeTheme === 'light') {
      setActiveTheme('dark')
      setThemeIcon('ri-moon-line')
    } else {
      setActiveTheme('light')
      setThemeIcon('ri-sun-line')
    }
  }

  useEffect(() => {
    // ==================== SHOW MENU ====================
    const navMenu = document.getElementById('nav-menu')
    const navToggle = document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close')

    // ===== MENU SHOW =====
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
      })
    }

    // ===== MENU HIDDEN =====
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
      })
    }

    // ==================== REMOVE MENU MOBILE ====================
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction() {
      const navMenu = document.getElementById('nav-menu')
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu')
    }
    navLink.forEach((n) => n.addEventListener('click', linkAction))
  }, [])

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Travel
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#discover" className="nav__link">
                Discover
              </a>
            </li>
            <li className="nav__item">
              <a href="#place" className="nav__link">
                Places
              </a>
            </li>
          </ul>

          <div className="nav__dark">
            <span className="change-theme-name">Dark mode</span>
            <i
              className={`${themeIcon} change-theme`}
              id="theme-button"
              onMouseDown={() => handleThemeSwitch()}
            ></i>
          </div>

          <i className="ri-close-line nav__close" id="nav-close"></i>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
