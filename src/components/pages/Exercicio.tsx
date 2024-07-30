import React, { useState } from 'react';
import { FaArrowLeft, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import ListaDeExerciciosItems from '../data/ListaDeExerciciosItems';

export function Exercicio() {
  const [showDicas, setShowDicas] = useState(false);
  const [showCodigoApoio, setShowCodigoApoio] = useState(false);
  const [showSimplificarProblema, setShowSimplificarProblema] = useState(false);
  const [showSintaxe, setShowSintaxe] = useState(false);
  const [showDescricaoDetalhada, setShowDescricaoDetalhada] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); // Estado para armazenar o índice do exercício selecionado

  const navigate = useNavigate(); // Hook para navegação programática

  const handleCloseModal = (setter) => () => {
    setter(false);
    setShowSimplificarProblema(false);
    setShowSintaxe(false);
    setShowDescricaoDetalhada(false);
  };

  const handleSelectExercise = (index) => {
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < ListaDeExerciciosItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const selectedExercise = ListaDeExerciciosItems[selectedIndex];

  return (
    <div>
      <div className="absolute top-[19px] left-[15px] text-[#0E7886] w-[135px] flex flex-col items-center">
        <a href="/Listas-De-Exercicios-01" className="flex flex-col items-center">
          <FaArrowLeft className="w-10 h-10" />
          <p>Retornar ao Início</p>
        </a>
      </div>

      <div className="absolute top-[115px] left-[61px]">
        <div className="bg-[#FFFFFF] w-[1170px] h-[550px] flex shadow-md">
          <div className="flex-grow p-5">
            <div className="mb-5">
              <h1 className="text-[#0E7886] text-2xl font-semibold mb-5">
                Exercício {selectedExercise.numero} - {selectedExercise.titulo}
              </h1>
              <p className="w-[585px]">
                {selectedExercise.introducao}
              </p>
            </div>

            <div className="space-y-5">
              <div className="mb-5">
                <h1 className="text-[#0E7886] text-2xl font-semibold mb-5">
                  Precisa de Ajuda?
                </h1>
                <p className="w-[600px]">
                  Consulte abaixo o conteúdo auxiliar preparado especialmente para você =]
                </p>
              </div>

              <div className="space-x-8">
                <button
                  className="bg-[#0E7886] w-[170px] h-[41px] text-white"
                  onClick={() => setShowDicas(!showDicas)}
                >
                  Dicas
                </button>
                <button
                  className="bg-[#0E7886] w-[170px] h-[41px] text-white"
                  onClick={() => setShowCodigoApoio(!showCodigoApoio)}
                >
                  Código de Apoio
                </button>
                <button 
                  className="bg-[#0E7886] w-[170px] h-[41px] text-white"
                  onClick={() => navigate('/Material-de-Apoio')}
                >
                  Material de Apoio
                </button>
              </div>
            </div>
          </div>

          <div className="bg-black w-[550px] h-[550px]"></div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex text-white shadow-md">
            <button
              className={`w-[400px] h-[60px] flex items-center justify-center ${selectedIndex === 0 ? 'bg-white text-gray-400' : 'bg-green-600'}`}
              onClick={handlePrevious}
              disabled={selectedIndex === 0}
            >
              <h2 className="flex items-center space-x-2">
                <FaAngleLeft />
                <span>Anterior</span>
              </h2>
            </button>

            <button
              className={`w-[400px] h-[60px] flex items-center justify-center ${selectedIndex === ListaDeExerciciosItems.length - 1 ? 'bg-white text-gray-400' : 'bg-green-600'}`}
              onClick={handleNext}
              disabled={selectedIndex === ListaDeExerciciosItems.length - 1}
            >
              <h2 className="flex items-center space-x-2">
                <span>Próximo</span>
                <FaAngleRight />
              </h2>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bg-[#302D2DCC] w-[200px] h-[800px]">
        <div className="text-white p-4">
          <p>Lista de Exercícios 01</p>
          <h1 className="text-lg">Introdução à Linguagem C</h1>
        </div>

        {ListaDeExerciciosItems.map((item, index) => (
          <button
            key={item.numero}
            className={`h-[115px] w-[200px] border-2 border-[#707070] relative ${index === selectedIndex ? 'bg-white text-black' : 'bg-[#302D2D] text-white'}`}
            onClick={() => handleSelectExercise(index)}
          >
            {index === selectedIndex && (
              <div className="absolute top-0 left-0 w-full bg-[#0E7886] text-white text-center py-1">
                Atual
              </div>
            )}
            <div className="p-2 pt-8">
              <p className="text-gray-400 text-sm">Exercício {item.numero}</p>
              <h1 className="text-lg">{item.titulo}</h1>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
