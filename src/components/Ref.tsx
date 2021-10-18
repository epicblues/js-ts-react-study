import React, { CSSProperties, FunctionComponent, FunctionComponentElement, useEffect, useRef } from 'react'

const containerCss: CSSProperties = {
  margin: "10px 4px",
  background: "lightblue"
}



function Ref({ inputRef }): FunctionComponentElement<{ inputRef: React.MutableRefObject<HTMLInputElement> }> {


  const titleRef = useRef<HTMLHeadingElement>();

  useEffect(() => {
    titleRef.current.innerText = "Reference Successfully loaded";
    inputRef.current.value = "Ref props working?";
  })

  return (
    <>
      <div className="container" style={containerCss}>
        <h1 ref={titleRef}>RefArea</h1>
      </div>
    </>
  )
}

export default Ref
