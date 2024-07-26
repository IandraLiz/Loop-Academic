import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FaGear, FaBell } from "react-icons/fa6";
import { IoExitSharp, IoCloseSharp } from 'react-icons/io5';

import user from '../../../public/img/user.png';
import danger from '../../../public/img/danger.png';
import notificationItems from './NotificationItems';

import { Home } from '../pages/Home';
import { ListasDeExercicios } from '../pages/Listas-De-Exercicios';
import { MaterialDeApoio } from '../pages/Material-De-Apoio';
import { Desempenho } from '../pages/Desempenho';
import { Duvidas } from '../pages/Duvidas';
import { Forum } from '../pages/Forum';
import { Emblemas } from '../pages/Emblemas';

export function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

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

  return (
    <div className="bg-[#0E7886] w-full h-[137px] shadow-lg">
      <div className="flex justify-end text-base">
        <a href="#" className="text-white p-1">
          Configurações <FaGear className="inline"/>
        </a>
        <a href="#" onClick={handleExitClick} className="text-white p-1">
          Sair <IoExitSharp className="inline"/>
        </a>
      </div>

      <div className="flex items-center justify-between bg-white p-5 h-[111px]">
        <div className="flex items-center">
          <a href="#">
            <img src={user} alt="User" className="bg-white w-[140px] h-[136px] rounded-full shadow-lg mr-2" />
          </a>
          <div className="ml-2 w-44">
            <h3 className="text-lg">
              Tiago <span className="text-gray-500">Include</span>
            </h3>
            <p><strong>Matrícula:</strong> 201901004</p>
            <p><strong>Turma:</strong> A4</p>
          </div>
        </div>

        <div className="text-[#0E7886] font-semibold">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Lista-de-Exercicios" element={<ListasDeExercicios />} />
            <Route path="/Material-de-Apoio" element={<MaterialDeApoio />} />
            <Route path="/Desempenho" element={<Desempenho />} />
            <Route path="/Duvidas" element={<Duvidas />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/Emblemas" element={<Emblemas />} />
          </Routes>
        </div>

        <div className="relative">
          <a href="#" onClick={toggleNotifications} className="flex items-center text-[#0E7886] text-center">
            <div className="flex flex-col items-center">
              <div className="relative">
                <FaBell className="text-yellow-500 w-6 h-auto" />
                <div className="absolute top-[-7px] right-[-5px] bg-[#C84C4C] border border-[#C84C4C] rounded text-white w-5 h-5 text-xs flex justify-center items-center font-bold">
                  {notificationCount}
                </div>
              </div>
              <p className="text-base"><strong>Notificações</strong></p>
            </div>
          </a>

          {showNotifications && (
            <div className="absolute right-[-20px] mt-6 w-[308px] bg-white shadow-lg overflow-hidden z-50">
              <ul className="px-2 text-sm">
                {notificationItems.map((item, index) => (
                  <li key={index} className="flex p-4 border-b cursor-pointer" onClick={() => handleNotificationClick(item.link)}>
                    <img src={item.imgSrc} alt={item.message} className="w-16 h-16 pr-5" />
                    <p className='w-40'>{item.message}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute top-[134px] left-1/2 transform -translate-x-1/2 w-[505px] h-72 bg-white shadow-lg z-50 text-center">
            <button onClick={handleCloseModal} className="absolute top-[-10px] right-[-10px] w-8 h-8 bg-red-700 text-white flex items-center justify-center">
              <IoCloseSharp className="w-8 h-8"/>
            </button>
            <h1 className="text-xl bg-[#0E7886] text-[white] h-[51px] flex items-center justify-center">
              Aviso
            </h1>
            <img src={danger} alt='megaphone' className="h-[80px] mx-auto mb-4" />
            <h2 className="text-xl text-red-600">
              <strong>Deseja mesmo sair do Loop Academic?</strong>
            </h2>
            <p className="px-5">Não quer ficar e estudar mais um pouco? Nós iremos sentir a sua falta =[</p>
            <div className="pt-4 flex justify-end pr-5">
              <button onClick={handleConfirmExit} className="bg-[#9B1111EA] text-white w-[167px] px-4 py-2 rounded mr-2">
                Sair
              </button>
              <button onClick={handleCloseModal} className="bg-[#0E862E] text-white w-[167px] px-4 py-2 rounded">
                Permanecer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
