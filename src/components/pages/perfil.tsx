import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowLeft, FaCamera } from 'react-icons/fa';
import { FaGear, FaBell } from 'react-icons/fa6';
import { IoExitSharp, IoCloseSharp } from 'react-icons/io5';

import user from '../../../public/img/user.png';
import danger from '../../../public/img/danger.png';
import notificationItems from '../data/NotificationItens';
import UsuarioItens from '../data/UsuarioItens';
import EmblemasItens from '../data/EmblemasItens';

import ListaDeExerciciosItems from '../data/ListaDeExerciciosItens';
import ListaDeExercicios02Items from '../data/ListaDeExercicios02Itens';

// Combine as listas de exercícios
const combinedExerciseItems = [...ListaDeExerciciosItems, ...ListaDeExercicios02Items];

// Filtra as questões respondidas (status: true)
const totalRespondidas = combinedExerciseItems.filter(item => item.status === true).length;


export function Perfil() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(user);
  const [showModal, setShowModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleExitClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmExit = () => {
    window.location.href = '/Login';
  };

  const toggleNotifications = () => {
    setShowNotifications(prevState => !prevState);
  };

  const handleNotificationClick = (link) => {
    navigate(link);
    setShowNotifications(false);
  };

  const notificationCount = notificationItems.length;

  const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const userInfo = UsuarioItens[0]; // Assuming only one user item for now

  return (
    <div>
      <div className='bg-[#0E7886] w-[1510px] shadow-lg'>
        <div className='flex justify-end text-base'>
          <a href='#' className='text-white p-1'>
            Configurações <FaGear className='inline'/>
          </a>
          <a href='#' onClick={handleExitClick} className='text-white p-1'>
            Sair <IoExitSharp className='inline'/>
          </a>
        </div>

        <div className='flex items-center justify-between bg-white p-2 h-[80px]'>

          <div className='text-[#0E7886] font-semibold ml-[670px]'>
            <h1 className='text-center text-3xl italic font-bold'>MEU PERFIL</h1>
          </div>

          <div className='relative'>
            <a href='#' onClick={toggleNotifications} className='flex items-center text-[#0E7886] text-center'>
              <div className='flex flex-col items-center'>
                <div className='relative'>
                  <FaBell className='text-yellow-500 w-6 h-auto' />
                  <div className='absolute top-[-7px] right-[-5px] bg-[#C84C4C] border border-[#C84C4C] rounded text-white w-5 h-5 text-xs flex justify-center items-center font-bold'>
                    {notificationCount}
                  </div>
                </div>
                <p className='text-base'><strong>Notificações</strong></p>
              </div>
            </a>

            {showNotifications && (
              <div className='absolute right-[-8px] w-[300px] mt-4 bg-white shadow-lg overflow-hidden z-50'>
                <ul className='px-2 text-sm'>
                  {notificationItems.map((item, index) => (
                    <li key={index} className='flex p-4 border-b cursor-pointer' onClick={() => handleNotificationClick(item.link)}>
                      <img src={item.imgSrc} alt={item.message} className='w-14 h-12 pr-5' />
                      <p className='w-40'>{item.message}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {showModal && (
          <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
            <div className='absolute top-[134px] w-[560px] h-72 bg-white shadow-lg z-50 text-center'>
              <button onClick={handleCloseModal} className='absolute top-[-10px] right-[-10px] w-8 h-8 bg-red-700 text-white flex items-center justify-center'>
                <IoCloseSharp className='w-8 h-8'/>
              </button>
              <h1 className='text-xl bg-[#0E7886] text-[white] h-[51px] flex items-center justify-center'>
                Aviso
              </h1>
              <img src={danger} alt='megaphone' className='h-[80px] mx-auto mb-4' />
              <h2 className='text-xl text-red-600'>
                <strong>Deseja mesmo sair do Loop Academic?</strong>
              </h2>
              <p className='px-5'>Não quer ficar e estudar mais um pouco? Nós iremos sentir a sua falta =[</p>
              <div className='pt-4 flex justify-end pr-5'>
                <button onClick={handleConfirmExit} className='bg-[#9B1111EA] text-white w-[167px] px-4 py-2 rounded mr-2'>
                  Sair
                </button>
                <button onClick={handleCloseModal} className='bg-[#0E862E] text-white w-[167px] px-4 py-2 rounded'>
                  Permanecer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='h-full'>
        <div className='ml-6 mt-5 text-[#0E7886] w-[135px]'>
          <button onClick={handleBackClick} className='flex flex-col items-center'>
            <FaArrowLeft className='w-10 h-10' />
            <p>Retornar</p>
          </button>
        </div>

        <div className='flex flex-col items-center w-[1510px]'>
          <div className='relative flex flex-col items-center mb-8'>
            <img 
              src={profileImage} 
              alt="usuario"
              className='bg-white w-44 h-full rounded-full shadow-lg' 
            />
            <input 
              type="file" 
              id="upload" 
              onChange={handleImageChange} 
              className='hidden' 
            />
            <label 
              htmlFor="upload" 
              className='absolute top-32 left-32 bg-[#0E7886] p-4 rounded-full cursor-pointer'
            >
              <FaCamera className='text-white w-6 h-6' />
            </label>
            <div className='text-center mt-4'>
              <h1 className='text-xl font-bold'>{userInfo.nome}</h1>
              <p className='text-base'><strong>Matrícula:</strong> {userInfo.matricula}</p>
              <p className='text-base'><strong>Turma:</strong> {userInfo.turma}</p>
            </div>
          </div>

          <div className='w-full max-w-9xl text-[#0E7886] bg-white mb-5 border-2 border-[#707070] flex text-center'>
            <div className='w-1/5 my-4 ml-60'>
              <div className='w-[1px] h-full bg-[#0E7886]'></div>
            </div>
            <h1 className='text-3xl italic font-bold py-6 w-1/5'>
            {totalRespondidas}<br/>
              Questões Respondidas 
            </h1>
            <h1 className='text-3xl italic font-bold py-6 w-3/5'> 
              {EmblemasItens.filter(item => item.add === 'true').length}<br/>
              Emblemas
            </h1>
            <div className='w-1/5 my-4'>
              <div className='w-[1px] h-full bg-[#0E7886]'></div>
            </div>
          </div>

          <div className='w-full max-w-9xl bg-white mb-5 border-2 border-[#707070] flex text-center'>
            <p className='py-4 w-1/3'>Entrou no dia 08/0202019</p>
            <p className='py-4 w-1/3'>Nível no Forum: {userInfo.nivel}</p>
            <p className='py-4 w-1/3'>Útima Codificação: 22/02/2019</p>
          </div>
        </div>
      </div>
    </div>
  );
}
