import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import megaphone from '../../../public/img/megaphone.png';
import confetti from '../../../public/img/confetti.png';

export function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showNoCodeMessage, setShowNoCodeMessage] = useState(false);
  const [showInvalidCodeMessage, setShowInvalidCodeMessage] = useState(false);
  const [showValidCodeMessage, setShowValidCodeMessage] = useState(false);
  const [code, setCode] = useState('');

  const navigate = useNavigate();

  const handleCodeSubmit = () => {
    if (code === 'TURMABTI201901') {
      setShowWelcome(false);
      setShowValidCodeMessage(true);
    } else {
      setShowWelcome(false);
      setShowInvalidCodeMessage(true);
    }
  };

  const handleNoCode = () => {
    setShowWelcome(false);
    setShowNoCodeMessage(true);
  };

  const handleTryAgain = () => {
    setShowInvalidCodeMessage(false);
    setShowWelcome(true);
  };

  const handleValidCodeClose = () => {
    setShowValidCodeMessage(false);
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-3xl text-center italic ml-[-252px]">Menu Principal</h1>
      
      <div>
        {showWelcome && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[1273px] h-[628px] bg-white shadow-lg z-50 text-black">
              <h1 className="text-xl bg-[#0E7886] text-[white] h-[51px] flex items-center justify-center">
                Boas Vindas!
              </h1>

              <div className="px-8">
                <p className="pt-8 text-left text-lg">
                  Olá, futuro(a) programador(a)<br />
                  <br />
                  É com enorme satisfação que desejamos-lhes nossas boas vindas ao Loop Academic! \o/<br />
                  <br />
                  Neste Software Educacional, você terá acesso à uma série de funcionalidades que lhe auxiliarão no aprendizado de Algoritmos, por exemplo: listas de exercícios de programação, material de apoio ao estudo de Algoritmos, envio de dúvidas ao professor ou monitor, fórum de interação com os colegas do curso e muito mais! o/<br />
                  <br />
                  Para ter acesso à todas as funcionalidades, é necessário que você informe abaixo o Código da Turma Virtual criada pelo seu professor. É com ele que você terá acesso aos materiais exclusivos da sua turma!<br />
                  <br />
                  Por favor, digite o seu Código da Turma Virtual.
                </p>

                <input
                  type="text"
                  value={code} 
                  placeholder="Código da Turma Virtual"
                  onChange={(e) => setCode(e.target.value)} 
                  className="border-b border-gray-400 outline-none mb-4 w-[560px] pt-12"
                />

                <div className="flex justify-end gap-4 mt-5">
                  <button onClick={handleNoCode} className="text-lg bg-[#9B1111EA] w-[190px] h-[41px] text-white">
                    <strong>Não tenho</strong>
                  </button>

                  <button onClick={handleCodeSubmit} className="text-lg bg-[#0E862E] w-[190px] h-[41px] text-white">
                    <strong>Enviar</strong>
                  </button>
                </div>
              </div>  
            </div>
          </div>
        )}

        {showNoCodeMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="absolute text-center  left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-white shadow-lg z-50 text-black">
                <img src={megaphone} alt='megaphone' className="h-[100px] mx-auto mb-4" />
                <strong className="text-xl text-red-600">
                    Atenção!
                </strong>

                <div className="px-8">
                    <p className="pt-3 text-left text-lg">
                        Solicite o Código da Turma ao seu Professor. Sem ele você não poderá ter acesso ás funcionalidades do sistema!
                    </p>

                    <div className="flex justify-center gap-4 mt-5">
                        <button onClick={() => navigate('/login')} className="text-lg bg-[#0E7886] w-[358px] h-[41px] text-white">
                            <strong>Retornar à tela de Login</strong>
                        </button>
                    </div>
                </div>  
            </div>
          </div>
        )}

        {showInvalidCodeMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[600px] h-[335px] bg-white shadow-lg z-50 text-black text-center">
                <img src={megaphone} alt='megaphone' className="h-[100px] mx-auto mb-4" />
                <strong className="text-xl text-red-600 ">
                    Código da Turma Inválido!
                </strong>

                <div className="px-8">
                    <p className="pt-3 text-left text-lg">
                        Provavelmente, há algum erro com o seu Código de Turma.<br />
                        Por favor, digite-o novamente ou entre em contato com o seu professor.
                    </p>

                    <div className="flex justify-end gap-4 mt-5">
                        <button onClick={() => navigate('/login')} className="text-lg bg-[#9B1111EA] w-[167px] h-[41px] text-white">
                            <strong>Sair</strong>
                        </button>

                        <button onClick={handleTryAgain} className="text-lg bg-[#0E7886] w-[167px] h-[41px] text-white">
                            <strong>Retornar</strong>
                        </button>
                        
                    </div>
                </div>  
            </div>
          </div>
        )}

        {showValidCodeMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[680px] h-[258px] bg-white shadow-lg text-center">
                <img src={confetti} alt='confeti' className="h-[100px] mx-auto mb-4 mt-4" />
                <strong className="text-2xl text-[#0E862E]">
                    Código válido! Seja bem-vindo!
                </strong>

                <div className="px-8">
                    <div className="flex justify-center gap-4 mt-8">
                        <button onClick={handleValidCodeClose} className="text-lg bg-[#0E862E] w-[358px] h-[41px] text-white">
                            <strong>Vamos nessa! o/</strong>
                        </button>
                    </div>
                </div>  
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
