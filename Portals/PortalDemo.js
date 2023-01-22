//  React portal provide ability to break the root DOM tree so you can render a component onto a DOM node 
//  that is not under the root element of index.js file
import React from 'react'
import ReactDOM from 'react-dom'
function PortalDemo(){
  return ReactDOM.createPortal(
    <h1>
    Portals Demo
    </h1>
    document.getElementById('portal-root')
  )
}
export default PortalDemo
