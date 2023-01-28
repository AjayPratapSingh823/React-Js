//Context provides a way to pass data through the component treee without having to pass props down manually at every level
import React from 'react'
import ComponentC From './components/CompoentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App(){
  return (
    <div className='App'>
      <UserContext.Provider value={'Vishwas'}>
      <ChannelContext.Provider value={'Codevolution'}
         <ComponentC />
      </UserContext.Provider>
    </div>
)
}
export default App
