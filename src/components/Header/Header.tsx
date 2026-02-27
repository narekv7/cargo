import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import { assetPath } from '../../utils/assetPath'

type LanguageCode = 'EN' | 'RU' | 'AM'

const LANGUAGES: LanguageCode[] = ['EN', 'RU', 'AM']

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [language, setLanguage] = useState<LanguageCode>('EN')
  const langSwitcherRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true } as AddEventListenerOptions)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langSwitcherRef.current && !langSwitcherRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const toggleMobile = () => {
    setIsMobileOpen((open) => !open)
  }

  const closeMobile = () => {
    setIsMobileOpen(false)
  }

  const toggleLang = () => {
    setIsLangOpen((open) => !open)
  }

  const handleSelectLang = (code: LanguageCode) => {
    setLanguage(code)
    setIsLangOpen(false)
  }

  const headerClassName = `site-header${isScrolled ? ' scrolled' : ''}`
  const mobileNavClassName = `nav-mobile${isMobileOpen ? ' is-open' : ''}`
  const langSwitcherClassName = `lang-switcher${isLangOpen ? ' is-open' : ''}`

  return (
    <header className={headerClassName} id="header">
      <div className="container">
        <div className="header-left">
          <a href="#hero" className="logo-link" onClick={closeMobile}>
            {/* IMAGE: logo (logo.svg), target size ~175x90 */}
            <img src={assetPath('logo.svg')} alt="CARGOBULLS" width={175} height={90} />
          </a>
          <nav className="nav-desktop" aria-label="Main">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="header-contact">
            <a href="mailto:info@cargobulls.am" className="header-contact-item">
              <span className="header-contact-icon">
                <img src={assetPath('icons/mail.svg')} alt="" aria-hidden="true" />
              </span>
              <span>info@cargobulls.am</span>
            </a>
            <a href="tel:+37493001123" className="header-contact-item">
              <span className="header-contact-icon">
                <img src={assetPath('icons/call.svg')} alt="" aria-hidden="true" />
              </span>
              <span>+374 93 001123</span>
            </a>
          </div>
          <div className="header-actions">
            <div className={langSwitcherClassName} ref={langSwitcherRef}>
              <button
                type="button"
                className="lang-current"
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                onClick={toggleLang}
              >
                {language}
              </button>
              <ul className="lang-menu" role="listbox">
                {LANGUAGES.map((code) => (
                  <li
                    key={code}
                    role="option"
                    aria-selected={code === language}
                    onClick={() => handleSelectLang(code)}
                  >
                    {code}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#quote" className="btn btn-primary header-cta">
              Get a Quote
            </a>
          </div>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMobileOpen}
          aria-controls="nav-mobile"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMobile}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={mobileNavClassName} id="nav-mobile" aria-label="Mobile">
        <div className="nav-links">
          <a href="#hero" onClick={closeMobile}>
            Home
          </a>
          <a href="#about" onClick={closeMobile}>
            About
          </a>
          <a href="#services" onClick={closeMobile}>
            Services
          </a>
          <a href="#contact" onClick={closeMobile}>
            Contact
          </a>
        </div>
        <div className="nav-contact">
          <a href="mailto:info@cargobulls.am">info@cargobulls.am</a>
          <a href="tel:+37493001123">+374 93 001123</a>
        </div>
        <div className="nav-langs">
          {LANGUAGES.map((code) => (
            <span key={code}>{code}</span>
          ))}
        </div>
        <a href="#quote" className="btn btn-primary header-cta" onClick={closeMobile}>
          Get a Quote
        </a>
      </nav>
    </header>
  )
}

