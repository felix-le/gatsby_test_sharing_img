import React from 'react'
import CookieConsent from "react-cookie-consent"

export default function Cookie() {
    return (
        <CookieConsent
        location="bottom"
        buttonText="Give Me All The Cookies"
        cookieName="E6cookie"
        className="cookie"
        style={{ background: "#212121" }}
        buttonStyle={{ color: "#fff", background: "#F6A840" }}
        expires={150} >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    )
}
