import { useState } from 'react'
import Input from "../src/component/Input.jsx"
import Button from './component/button.jsx'
import logo from "../src/assets/logo.svg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div className='flex flex-col w-center min-h-center items-center justify-center gap-3 w-full mb-4'>
      <div alt='logo' loading='lazy' width='256' height='128' className='w-full mb-4'>
       <a href='https://inteliblockchain.co' className='flex justify-center' target='_blank'>
        
       <img src={logo} className=' md:w-2/3 lg:w-1/2 xl:w-1/3'/>
       </a>
      </div>
      <div className='shadow-lg flex-col rounded-lg w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white text-white bg-opacity-20 px-4 py-8 backdrop-blur-lg'>
        
        <p className='text-xl md:text-2xl mb-4 text-left'> 
        Receba sua Proof-of-Attandance NFT 
        </p>

        <div className='mt-8 gap-4'>
        
        <p className="text-sm md:text-base text-gray-200 my-2 text-left"> 
        Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.        </p>

        </div>
        <p className='text-sm md:text-base text-gray-200 my-2 text-left'>
          Ainda não tem uma carteira? Acesse o link e crie a sua já: <a target="_blank" href='https://metamask.io/download/' className='text-blue-500 hover:underline'> clique aqui.</a>
        </p>
        <div className='flex-col flex mt-8 gap-3'>
          <span className='text-sm text-</span>gray-200'>
          <Input
            description="Esse nome será gravado no NFT para provar sua presença"
            placeholder="Nome"
            label="Seu nome"
            type="text" />
          </span>
          <Input className='p-2 text-black rounded-md shadow-md'
            description="Adicione seu Email"
            placeholder="your.mail@email.com"
            label="Email"
            type="Email" />

          <Input
            description="Carteira para receber NFT"
            placeholder="0x00...0000"
            label="Wallet" />

          <button className="text-xl mt-4 p-2 bg-blue-500 text-white rounded-md shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed" type='submit'>
            <span>Gerar NFT</span>
          </button> 
        </div>
      </div>
      <a href='https://github.com/InteliBlockchain/onboarding' target='_blank'>
      <span className='text-sm text-gray-400 flex flex-row' style={{ marginRight: '20px'}}> O código pode ser encontrado aqui: <img alt='Github' loading='lazy' width={16} height={16} data-nimg={1} src='../src/assets/github.svg' style={{ marginLeft: '5px', color:'transparent'}}/></span>
      </a>
      <a href='https://chat.whatsapp.com/EoP5wbGPujg8vpG9f6KNWz' target='_blank'>
      <span className='text-sm text-gray-400 flex flex-row' style={{ marginRight: '10px'}}> Caso tenha alguma dúvida: <img alt="whatsapp" loading='lazy' width={16} height={16} data-nimg={1} src='../src/assets/wpp.svg' style={{ marginLeft: '5px', color:'transparent' }}/></span>
      </a>
    </div>
  )
}

export default App
