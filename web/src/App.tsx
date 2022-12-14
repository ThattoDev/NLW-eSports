import './styles/main.css';
import Logo from './assets/logo-nlw-esports.svg'

const App = () => {
  
  return (
    <div className='mmax-w-[1344px] mx-auto flex flex-col items-center m-20'>
      <img src={Logo} alt="" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu duo está aqui
      </h1>
    </div>
  )
}

export default App
