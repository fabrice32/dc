import {
  Streamlit,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"
import React, { useEffect } from "react"

function MyApp(props: ComponentProps) {
  const { message } = props.args
  console.log(message)
  useEffect(() => Streamlit.setFrameHeight())
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default withStreamlitConnection(MyApp)
