import { FaArrowLeft } from 'react-icons/fa';

export function ListasDeExercicios() {
  return (
    <div className="mt-[300px]">
      <h1 className="text-center text-3xl italic font-bold">LISTAS DE EXERCÍCIOS</h1>

      <div className="flex pt-20">
      <a href="/" className="flex flex-col items-center py-1 h-16">
        <FaArrowLeft className="w-10 h-auto" />
        <p className="w-32 text-sm text-center">Retornar ao Início</p>
      </a>




        <div>
          <div className="w-[850px] h-[100px] bg-white ml-12 items-center border-2 border-[#707070]">
            <div className="h-3 w-full bg-[#0E7886]"></div>
            <div className="px-4">
              <p className='text-[#0000003F] mt-2'>Escolha entre as</p>
              <h1 className='text-2xl font-semibold'>Listas de Exercícios</h1>
            </div>
          </div>

          <div className="w-[850px] h-[100px] bg-white ml-12 items-center border-2 border-[#707070] mt-5">
          </div>
        </div>
      </div>
    </div>
  );
}
