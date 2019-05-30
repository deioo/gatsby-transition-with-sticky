import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, fixed }) => (
  <header
    style={Object.assign(
      {
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        top: 0,
      },
      fixed
        ? { position: "fixed", top: 120 }
        : {
            position: `sticky`,
            position: `-webkit-sticky`,
          }
    )}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <AniLink
          paintDrip
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </AniLink>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  fixed: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  fixed: false,
}

export default Header
