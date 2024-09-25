import { useState , useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
      const [themeMode, setthemeMode] = useState("light")

      //now we dont know the functionality of the light and dark theme value so made the function 
      //with the same name it automatically take those methods from the ThemeProvider

      const lightTheme = () => {
        setthemeMode("light")
      }
      const darkTheme = () => {
        setthemeMode("dark")
      }

      //the actual change in theme
      //we are using the html in document because the in html code we can directly put the dark or light the
      //as shown below in the tailwind code dark:bg.. like
      useEffect(() => {
        document.querySelector('html').classList.remove("dark","light")
        document.querySelector('html').classList.add(themeMode)
      }, [themeMode])
      

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themebtn */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card />
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
