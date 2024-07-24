import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { LiaBookReaderSolid } from 'react-icons/lia';
import { IoIosInfinite } from 'react-icons/io';
import { IoCloseSharp } from "react-icons/io5";

import megaphone from '../../img/megaphone.png';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'iandralizholanda@gmail.com' && password === 'abc123') {
            navigate('/');
        } else {
            setError('Login ou senha inválidos!');
        }
    };

    const closeModal = () => {
        setError('');
        setShowModal(false); 
    };

    useEffect(() => {
       
    }, []);

    return (
        <div className="bg-[#0E7886] w-screen h-screen flex flex-col justify-center items-center relative">
            {error && showModal && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeModal}></div>
                    <div className="absolute top-[134px] left-1/2 transform -translate-x-1/2 w-[505px] h-64 bg-white p-8 shadow-lg z-50 text-center">
                        <button onClick={closeModal} className="absolute top-[-10px] right-[-10px] w-8 h-8 bg-red-700 text-white flex items-center justify-center">
                            <IoCloseSharp className="w-8 h-8"/>
                        </button>

                        <img src={megaphone} alt='megaphone' className="h-[100px] mx-auto mb-4" />
                        <strong className="text-xl text-red-600 ">
                            {error}
                        </strong>
                        <div className="flex justify-center gap-4 mt-5">
                            <button onClick={() => navigate('#')} className="text-lg bg-[#0E7886] hover:bg-cyan-800 w-[237px] h-[41px] text-white">
                                <strong>Esqueci minha senha</strong>
                            </button>
                            <button onClick={() => navigate('/perfil')} className="text-lg bg-[#0E7886] hover:bg-cyan-800 w-[237px] h-[41px] text-white">
                                <strong>Realizar Cadastro</strong>
                            </button>
                        </div>
                    </div>
                </>
            )}
            <div className="bg-white w-96 h-96 mb-5 shadow-lg p-5">
                <div className="flex items-start">
                    <h2 className="w-80 mb-8 pt-8 text-[#0E7886] text-2xl opacity-80">Já tenho cadastro</h2>
                    <div className="flex flex-col items-center mr-0 mt-[-80px]">
                        <LiaBookReaderSolid className="w-[134px] h-auto mt-[4px]" />
                        <h1 className="text-2xl w-[120px] flex items-center mt-[-20px]">
                            L<IoIosInfinite className="align-middle w-[35px] h-auto" />P
                        </h1>
                        <h1 className="text-2xl w-[120px]">
                            Academic
                        </h1>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="text-center mt-5">
                    <div className="mb-4 flex items-center border border-gray-400 rounded">
                        <MdOutlineEmail className="text-gray-500 w-9 h-9 mr-2" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 h-10 text-lg p-2 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4 flex items-center border border-gray-400 rounded">
                        <RiLock2Line className="text-gray-500 w-9 h-9 mr-2" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="flex-1 h-10 text-lg p-2 focus:outline-none"
                        />
                    </div>
                    <button type="submit" className="w-[190px] h-10 bg-[#0E7886] text-white rounded hover:bg-cyan-800">Login</button>
                </form>
                
                <div className="text-right mt-5">
                    <a href="#" className="text-[#0E7886] "><strong>Problema com login?</strong></a>
                </div>
            </div>

            <a href="/perfil" className="bg-white w-96 h-20 shadow-lg p-5 flex items-center justify-between">
                <h2 className="mb-8 pt-8 text-[#0E7886] text-2xl opacity-80">Criar minha conta</h2>
                <FaChevronRight className="text-[#0E7886] text-[25px]" />
            </a>
        </div>
    );
}
