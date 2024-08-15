import Material from '../data/MaterialItems';
import { FaArrowLeft } from 'react-icons/fa';

import pesquisa from '../../../public/img/pesquisa.png';
import cadeado from '../../../public/img/cadeado.png';

export function MaterialDeApoio() {
  return (
    <div className='mt-[770px]'>
      <h1 className='text-center text-3xl italic font-bold ml-40'>MATERIAL DE APOIO</h1>

      <div className='flex pt-20'>
        <a href='/' className='flex flex-col items-center py-1 h-16 ml-9'>
          <FaArrowLeft className='w-10 h-auto' />
          <p className='w-32 text-sm text-center'>Retornar ao Início</p>
        </a>

        <div>
          <div className='w-[920px] h-[60px] bg-white ml-8 flex items-center border-2 border-[#707070] shadow-lg'>
            <img src={pesquisa} alt='pesquisa' className='w-10 ml-4'/>
            <input 
              className='w-[750px] h-[50px] px-4 text-base text-black' 
              type='text' 
              placeholder='O que você quer estudar?'
            />
            <button className='h-full w-32 bg-[#0E7886] text-white text-xl'>Buscar</button>
          </div>

          <div className='w-[920px] h-[90px] bg-white mt-5 ml-8 items-center border-2 border-[#707070] shadow-lg'>
            <div className='h-3 w-full bg-[#0E7886]'></div>
            <div className='px-4'>
              <p className='text-[#0000003F] mt-2'>Consulte nossos</p>
              <h1 className='text-2xl font-semibold'>Material de Apoio</h1>
            </div>
          </div>

          <div className='w-[920px] h-full bg-white mt-5 p-8 ml-8 border-2 border-[#707070] flex flex-wrap shadow-lg'>
            
            <div className='grid grid-cols-3 gap-x-5'>
              {Material.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className='border-2 border-[#707070] w-[270px] h-52 bg-[#0E7886] flex flex-col justify-between items-center pt-16'>
                  <h1 className='text-white text-lg text-center w-full'>{item.titulo}</h1>
                  <div className='border-t-2 border-[#707070] bg-white w-full h-16 flex items-center justify-center'>
                    <div className='border-2 border-[#707070] text-white bg-[#0E7886] w-36 h-9 rounded-3xl flex items-center justify-center'>
                      <p>{item.total} Conteúdos</p>
                    </div>
                  </div>
                </a>
              ))}

              <div className='border-2 border-[#707070] w-[270px] h-52 bg-[#3A9AA0] flex flex-col justify-between items-center'>
                <img src={cadeado} alt='cadeado' className='h-16 w-auto my-auto'/>
                <div className='border-t-2 border-[#707070] bg-white w-full h-16 flex items-center justify-center'>
                  <div className='border-2 border-[#707070] text-white bg-[#3A9AA0] w-36 h-9 rounded-3xl flex items-center justify-center'></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
