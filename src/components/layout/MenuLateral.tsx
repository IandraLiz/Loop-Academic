//import { Link } from 'react-router-dom';
import exerciseList from '../../img/ExerciseList.png';
import supportMaterial from '../../img/SupportMaterial.png';
import performance from '../../img/Performance.png';
import doubts from '../../img/Doubts.png';
import forum from '../../img/Forum.png';
import badges from '../../img/Badges.png';

import { LiaBookReaderSolid } from 'react-icons/lia';
import { IoIosInfinite } from 'react-icons/io';

export function MenuLateral() {
    return (
        <nav className="w-[280px] h-screen bg-[#0E7886] p-2 flex flex-col justify-between">
            <ul className="list-none mt-8 text-3xl italic text-[17px] text-[#0E7886] m-0 text-center font-bold">
                
                <a href="/Lista-de-Exercicios" className="flex items-center bg-white p-2 mb-1 shadow-md h-12 text-decoration-none">
                    <img src={exerciseList} alt="Exercise List" className="w-10 h-10 mr-2"/>
                    <p>LISTAS DE EXERCÍCIOS</p>
                </a>

                <a href="/Material-de-Apoio" className="flex items-center bg-white p-2 mb-1 shadow-md h-12 text-decoration-none">
                    <img src={supportMaterial} alt="SupportMaterial" className="w-10 h-10 mr-2"/>
                    <p>MATERIAL DE APOIO</p>
                </a>

                <a href="/Desempenho" className="flex items-center bg-white p-2 mb-1 shadow-md h-12 text-decoration-none">
                    <img src={performance} alt="Performance" className="w-10 h-10 mr-2"/>
                    <p>DESEMPENHO</p>
                </a>

                <a href="/Duvidas" className="flex items-center bg-white p-2 mb-1 shadow-md h-12 text-decoration-none">
                    <img src={doubts} alt="doubts" className="w-10 h-10 mr-2"/>
                    <p>DÚVIDAS</p>
                </a>

                <a href="/Forum" className="flex items-center bg-white p-2 mb-1 shadow-md h-12 text-decoration-none">
                    <img src={forum} alt="forum" className="w-10 h-10 mr-2"/>
                    <p>FORÚM</p>
                </a>

                <a href="/Emblemas" className="flex items-center bg-white p-2 mb-1 shadow-md h-12 text-decoration-none">
                    <img src={badges} alt="badges" className="w-10 h-10 mr-2"/>
                    <p>EMBLEMAS</p>
                </a>
            </ul>

            <div className="flex flex-col items-center text-white mr-10">
                <LiaBookReaderSolid className="w-[170px] h-auto mt-[4px]" />
                <h1 className="text-3xl w-[120px] flex items-center">
                L<IoIosInfinite className="align-middle w-[38px] h-auto" />P
                </h1>
                <h1 className="text-3xl w-[120px]">
                    Academic
                </h1>
            </div>
        </nav>
    );
}

