import AtividadesItems from '../data/AtividadesItems';
import { FaArrowLeft } from 'react-icons/fa';

export function ListasDeExercicios() {
  return (
    <div className='mt-[510px]'>
      <h1 className='text-center text-3xl italic font-bold ml-32'>LISTAS DE EXERCÍCIOS</h1>

      <div className='flex pt-20'>
        <a href='/' className='flex flex-col items-center py-1 h-16'>
          <FaArrowLeft className='w-10 h-auto' />
          <p className='w-32 text-sm text-center'>Retornar ao Início</p>
        </a>

        <div>
          <div className='w-[920px] h-[100px] bg-white ml-8 items-center border-2 border-[#707070] shadow-lg'>
            <div className='h-3 w-full bg-[#0E7886]'></div>
            <div className='px-4'>
              <p className='text-[#0000003F] mt-2'>Escolha entre as</p>
              <h1 className='text-2xl font-semibold'>Listas de Exercícios</h1>
            </div>
          </div>

          <div className='w-[920px] h-[300px] bg-white ml-8 mt-5 py-1 border-2 border-[#707070] shadow-lg'>
            <div className='border-t-2 border-l-2 border-r-2 border-[#707070] mt-3 mx-3 mb-1'>

              <div className='bg-gray-400 text-black flex text-center px-2'>
                <p className='w-16 mr-2'>Número</p>
                <p className='w-24 mr-2'>Data</p>
                <p className='w-[245px] text-left mr-2'>Titulo</p>
                <p className='w-36 mr-2'>Total de Questões</p>
                <p className='w-40 mr-2'>Nível de Dificuldade</p>
                <p className='w-24'>Status</p>
              </div>
              
              {AtividadesItems.map((item, index) => (
                <div key={index} className='flex mt-4 text-[#707070] text-center px-2'>
                  <p className='w-16 mr-2'>{item.numero}</p>
                  <p className='w-24 mr-2'>{item.date}</p>
                  <a
                    key={index}
                    href={item.link}
                    className='w-[245px] text-left mr-2'
                  >
                    <p>{item.titulo}</p>
                  </a>
                  <p className='w-36 mr-2'>{item.total}</p>
                  <p className='w-40 mr-2'>{item.nivel}</p>
                  <p className={`w-24 font-bold ${item.statusColor}`}>{item.status}</p>
                </div>
              ))}
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
