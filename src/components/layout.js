import React from "react"
import Fade from 'react-reveal/Fade';

export default ({ children }) => (
  <Fade bottom cascade>
  <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
    {children}
  </div>
  </Fade>
)