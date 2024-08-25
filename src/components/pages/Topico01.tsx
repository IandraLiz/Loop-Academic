import AtividadesItems from '../data/AtividadesItens';
import { FaArrowLeft } from 'react-icons/fa';

export function Topico01() {
  return (
    <div className='mt-[0px] absolute top-[-10px] left-[-550px] pb-20'>
      <h1 className='text-center text-3xl italic font-bold ml-[200px]'>FÓRUM</h1>

      <div className='flex pt-20'>
        <a href='/Forum' className='flex flex-col items-center py-1 h-full ml-9'>
          <FaArrowLeft className='w-10 h-auto' />
          <p className='w-32 text-sm text-center'>Menu Principal</p>
        </a>
        <div className='m-3 text-lg text-white '>
          <a href='/Criar-Topico' className='bg-red-700 py-2 px-4'>
            Criar Tópico
          </a>
          <a href='/Forum' className='bg-green-700 py-2 px-4 ml-2'>
            Atualizar
          </a>
          <a href='/Forum' className='bg-[#0E7886] py-2 px-4 ml-2'>
            Responder
          </a>
        </div>
      </div>

      <div className='w-[900px] h-full mt-4 ml-44 py-2 '>
        <div className='bg-[#0E7886] border-2 border-[#707070] shadow-lg'>
          <h1 className='text-white text-xl ml-4'>Criar tópico</h1>
        </div>

        <div className='h-full mt-1 p-6 bg-white border-2 border-[#707070] shadow-lg'>
        </div>

        <div className='bg-[#0E7886] h-8 mt-1 border-2 border-[#707070] shadow-lg'></div>

        <div className='w-[920px] h-auto mt-16 bg-white border-2 border-[#707070] shadow-lg'>
          <div className='w-full bg-[#0E7886] flex items-center'>
            <h1 className='text-white text-xl ml-4'>Criar tópico</h1>
          </div>
          <div className='pt-6 p-4'>
            <textarea
              className='w-full h-48 text-black border-2 border-[#707070] p-2 font-mono resize-none overflow-y-auto'
              placeholder='Digite sua resposta aqui'
             />
            <button className='text-xl text-white bg-[#0E7886] py-1 px-7 mt-6'>
              Responder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}