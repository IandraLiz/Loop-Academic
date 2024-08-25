import AtividadesItems from '../data/AtividadesItens';
import { FaArrowLeft } from 'react-icons/fa';

export function Forum() {
  return (
    <div className='mt-[0px] absolute top-[-10px] left-[-550px] pb-20'>
      <h1 className='text-center text-3xl italic font-bold'>FÓRUM</h1>

      <div className='flex pt-20'>
        <a href='/' className='flex flex-col items-center py-1 h-full ml-9'>
          <FaArrowLeft className='w-10 h-auto' />
          <p className='w-32 text-sm text-center'>Menu Principal</p>
        </a>
      </div>

      <div className='w-[1120px] h-full mt-8 ml-20 p-5 bg-white border-2 border-[#707070] shadow-lg'>
        <h1 className='text-black text-xl mb-4 border-b border-[#707070] pb-2'>
          Tópicos Recentes
        </h1>
        
        <div className='grid grid-cols-2 gap-4'>
          <a href='/Topico01' className='flex items-center my-8 text-black bg-[#DCD5D53F] border-2 border-[#707070] pl-4 relative'>
            <h1 className='absolute -top-5 -right-4 text-white bg-[#0E7886] border-2 border-[#707070] px-3 py-1.5'>
              01
            </h1>
            <img 
              src="img/user.png" 
              alt="usuario" 
              className='w-24 h-24 rounded-full border-2 border-[#707070] shadow-lg'
            />
            <div className='ml-4 flex flex-col justify-between h-full'>
              <h1 className='text-lg mt-4'>Valor máximo e mínimo de um inteiro em C?</h1>
              <p className='text-sm'>Por Débora Main</p>
              <div className='text-xs text-right mt-auto'>
                08/02/2019, às 12h00
              </div>
            </div>
          </a>
        </div>

        <div className='text-black text-lg border-t border-[#707070] pt-4 pb-2'>
          <a href='/Criar-Topico' className='text-white bg-red-600 py-2 px-4'>
            Criar Tópico
          </a>
        </div>

      </div>

    </div>
  );
}
