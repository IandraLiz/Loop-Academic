import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function CadastroDeAluno() {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    instituicao: '',
    matricula: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    confirmarSenha: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensagem de erro

  const handleBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  const handleCadastro = () => {
    const { nome, instituicao, matricula, email, confirmarEmail, senha, confirmarSenha } = formData;

    // Verificar se todos os campos estão preenchidos
    if (
      nome &&
      instituicao &&
      matricula &&
      email &&
      confirmarEmail &&
      senha &&
      confirmarSenha
    ) {
      // Verifica se a matrícula tem 11 dígitos
      if (matricula.length !== 11) {
        setErrorMessage('Matrícula não aceita.');
      }
      // Verifica se o email termina com @alunos.ufersa.edu.br
      else if (!email.endsWith('@alunos.ufersa.edu.br')) {
        setErrorMessage('O email deve terminar com @alunos.ufersa.edu.br');
      } 
      else if (senha.length < 8) {
        setErrorMessage('Sua senha precisa ter no mínimo 8 dígitos.');
      } 
      else if (email !== confirmarEmail) {
        setErrorMessage('Os campos de email não coincidem.');
      } 
      else if (senha !== confirmarSenha) {
        setErrorMessage('Os campos de senha não coincidem.');
      } 
      else {
        setErrorMessage('');
        setShowSuccessModal(true);
      }
    } else {
      setErrorMessage('Por favor, preencha todos os campos.');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-[#0E7886] w-[1520px] h-[500px] min-h-screen flex items-start justify-center py-36 relative'>
      <button onClick={handleBack} className='mr-5 mt-5'>
        <FaArrowLeft className='text-white text-2xl w-10 h-auto' />
      </button>
      <div className='bg-white px-5 py-6 shadow-lg w-[889px] h-auto'>
        <h1 className='text-[#0E7886] text-2xl mb-4'>Dados Cadastrais - Aluno</h1>

        <div className='flex flex-col'>
          <div className='flex flex-col space-y-4'>
            <input
              type='text'
              name='nome'
              value={formData.nome}
              onChange={handleChange}
              placeholder='Nome Completo'
              className='p-2 border-b border-gray-300 outline-none focus:border-[#0E7886]'
            />
            <div className='flex space-x-4'>
              <input
                type='text'
                name='instituicao'
                value={formData.instituicao}
                onChange={handleChange}
                placeholder='Instituição de ensino'
                className='p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full'
              />
              <input
                type='text'
                name='matricula'
                value={formData.matricula}
                onChange={handleChange}
                placeholder='Matrícula'
                className='p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full'
              />
            </div>

            <div className='flex space-x-4'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className='p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full'
              />
              <input
                type='email'
                name='confirmarEmail'
                value={formData.confirmarEmail}
                onChange={handleChange}
                placeholder='Confirmar Email'
                className='p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full'
              />
            </div>

            <div className='flex space-x-4'>
              <input
                type='password'
                name='senha'
                value={formData.senha}
                onChange={handleChange}
                placeholder='Senha'
                className='p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full'
              />
              <input
                type='password'
                name='confirmarSenha'
                value={formData.confirmarSenha}
                onChange={handleChange}
                placeholder='Confirmar Senha'
                className='p-2 border-b border-gray-300 outline-none focus:border-[#0E7886] w-full'
              />
            </div>

            {/* Exibe a mensagem de erro se houver */}
            {errorMessage && (
              <p className='text-red-500 text-sm mt-2'>{errorMessage}</p>
            )}

            <div className='flex justify-end pt-10'>
              <button
                onClick={handleCadastro}
                className='bg-[#0E7886] text-white text-xl py-2 px-4 w-[190px] h-[41px]'
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>

        {showSuccessModal && (
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-6 w-[651px] h-[179px] shadow-lg text-center'>
              <h2 className='text-2xl mb-10 text-green-600'>Cadastro realizado com sucesso!</h2>
              <button
                onClick={handleLoginRedirect}
                className='bg-[#0E7886] text-white text-xl w-[190px] h-[41px]'
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
