import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <!-- Response -->
        <html style="margin: 1%; border: 4mm ridge rgba(211, 220, 50, .6);">
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `)
    })

    return () => clearTimeout(timeout)
  }, [html, css])

  return (
    <>
      <div className="top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </div>
      <div className="pane">
        <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
        />
      </div>
    </>
  )
}

export default App;
