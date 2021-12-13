import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const KmsChild = () => {
  const { name, setName } = useContext(UserContext);
  return (
    <div>
      {name}
      <button onClick={() => { setName('무야호') }}>Context Switch</button>
    </div>
  )
}

export default KmsChild
