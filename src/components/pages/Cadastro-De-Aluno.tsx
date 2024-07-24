import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function CadastroDeAluno() {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  const handleCadastro = () => {
    setShowSuccessModal(true);
  };

  const handleLoginRedirect = () => {
    navigate('/login'); 
  };

  return (
    <div className="bg-[#0E7886] min-h-screen flex items-start justify-center p-40 relative">
        <button onClick={handleBack} className="mr-5 mt-5">
            <FaArrowLeft className="text-white text-2xl w-10 h-auto" />
        </button>
        <div className="bg-white px-5 pt-6 shadow-lg w-[889px] h-[394px]">
            <h1 className="text-[#0E7886] text-2xl mb-4">Dados Cadastrais - Aluno</h1>
        
            <div className="flex flex-col">
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        className="p-2 border-b border-gray-300 outline-none focus:border-[#0E7886]"
                    />
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="Instituição de ensino"
                            className="p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full"
                        />
                        <input
                            type="text"
                            placeholder="Matrícula"
                            className="p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full"
                        />
                        <input
                            type="email"
                            placeholder="Confirmar Email"
                            className="p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <input
                            type="password"
                            placeholder="Senha"
                            className="p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full"
                        />
                        <input
                            type="password"
                            placeholder="Confirmar Senha"
                            className="p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full"
                        />
                    </div>
                    

                    <div className="flex justify-end pt-10">
                        <button onClick={handleCadastro} className="bg-[#0E7886] text-white text-xl py-2 px-4 w-[190px] h-[41px]">
                        Cadastrar
                        </button>   
                    </div>
                </div>
            </div>

            {showSuccessModal && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 w-[651px] h-[179px] shadow-lg text-center">
                        <h2 className="text-2xl mb-10 text-green-600">Cadastro realizado com sucesso!</h2>
                        <button
                            onClick={handleLoginRedirect}
                            className="bg-[#0E7886] text-white text-xl w-[190px] h-[41px]"
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}
