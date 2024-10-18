import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  )
}

export default App
