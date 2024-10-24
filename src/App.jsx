import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'

function App() {

  const {thememode , setthememode} = useState('light')

  const lightTheme = () =>{
    setthememode('light')
  }

  const darkTheme = () =>{
    setthememode('dark')
  }
  //actual change i theme 

  useEffect(() => {
  document.querySelector('html').classList.remove('light,dark')
  document.querySelector('html').classList.add(thememode)
  }, [thememode])
  


  return (
 <ThemeProvider  value={{thememode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme btn ui  */}
                        <Themebtn/>

                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card  */}
                       <xard/>
                    </div>
                </div>
            </div>
   </ThemeProvider>
  )
}

export default App
