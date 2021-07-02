// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

function Box({size, children, style}) {
  return (
    <div className={`box--${size} box`} style={style}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        Small LightBlue Box
      </Box>

      <Box size="medium" style={{backgroundColor: 'pink'}}>
        Small Pink Box
      </Box>

      <Box size="large" style={{backgroundColor: 'orange'}}>
        Small Orange Box
      </Box>
    </div>
  )
}

export default App
