import ListaDeExerciciosItems from '../data/ListaDeExerciciosItems';
import { FaArrowLeft } from 'react-icons/fa';

export function ListasDeExercicios01() {
  return (
    <div className="mt-[510px]">
        
        <h1 className="text-center text-2xl italic font-bold">
            LISTAS DE EXERCÍCIOS 01 - INTRODUÇÃO À LINGUAGEM C
        </h1>
        
        <div className="flex pt-20">
            <a href="/Lista-De-Exercicios" className="flex flex-col items-center py-1 h-16">
                <FaArrowLeft className="w-10 h-auto" />
                <p className="w-32 text-sm text-center">Retornar ao Início</p>
            </a>

            <div>
                <div className="w-[920px] h-[100px] bg-white ml-8 items-center border-2 border-[#707070]">
                    <div className="h-3 w-full bg-[#0E7886]"></div>
                    <div className="px-4">
                        <p className='text-[#0000003F] mt-2'>Escolha e responda</p>
                        <h1 className='text-2xl font-semibold'>Exercícios da Listas 01 - Introdução à Linguagem C</h1>
                    </div>
                </div>

                <div className="w-[920px] h-[300px] bg-white ml-8 mt-5 border-2 border-[#707070]">
                    <div className="border-t-2 border-l-2 border-r-2 border-[#707070] mt-3 mx-3 mb-1">
                        <div className="px-2 bg-gray-400 text-black flex items-center text-center">
                            <p className=" mr-2">Número</p>
                            <p className="px-2 w-[680px] text-left mr-2">Titulo</p>
                            <p className="w-24">Status</p>
                        </div>
                            
                        {ListaDeExerciciosItems.map((item, index) => (
                            <div key={index} className="px-2 flex items-center mt-4 text-[#707070] text-center">
                                <p className="w-16 mr-2">{item.numero}</p>
                                <a href={item.link} className="px-2 w-[680px] text-left mr-2">
                                    <p>{item.titulo}</p>
                                </a>
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
