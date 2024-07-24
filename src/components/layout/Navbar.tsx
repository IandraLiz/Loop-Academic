//import { Link } from 'react-router-dom';
import exerciseList from '../../img/ExerciseList.png';
import supportMaterial from '../../img/SupportMaterial.png';
import performance from '../../img/Performance.png';
import doubts from '../../img/Doubts.png';
import forum from '../../img/Forum.png';
import badges from '../../img/Badges.png';

export function Navbar() {
  return (
    <nav className="flex justify-center py-24">
      <ul className="grid grid-cols-3 gap-3 list-none p-0 m-0">
        
        <li className="w-72 h-44 text-center bg-[#0E7886] flex flex-col justify-between items-center shadow-lg">
          <a href="/Lista-de-Exercicios" className="text-decoration-none text-inherit flex flex-col justify-between items-center w-full h-full">
            <div className="w-72 h-36 bg-white flex justify-center items-center">
              <img src={exerciseList} alt="Exercise List" />
            </div>
            <p className="text-white flex justify-center items-center text-2xl font-bangers text-center italic">Listas De Exercícios</p>
          </a>
        </li>
        
         <li className="w-72 h-44 text-center bg-[#0E7886] flex flex-col justify-between items-center shadow-lg">
          <a href="/Material-de-Apoio" className="text-decoration-none text-inherit flex flex-col justify-between items-center w-full h-full">
            <div className="w-72 h-36 bg-white flex justify-center items-center">
              <img src={supportMaterial} alt="Support Material" />
            </div>
            <p className="text-white flex justify-center items-center text-2xl font-bangers text-center italic">Material de Apoio</p>
          </a>
        </li>

        <li className="w-72 h-44 text-center bg-[#0E7886] flex flex-col justify-between items-center shadow-lg">
          <a href="/Desempenho" className="text-decoration-none text-inherit flex flex-col justify-between items-center w-full h-full">
            <div className="w-72 h-36 bg-white flex justify-center items-center">
              <img src={performance} alt="Performance" />
            </div>
            <p className="text-white flex justify-center items-center text-2xl font-bangers text-center italic">Desempenho</p>
          </a>
        </li>

        <li className="w-72 h-44 text-center bg-[#0E7886] flex flex-col justify-between items-center shadow-lg">
          <a href="/Duvidas" className="text-decoration-none text-inherit flex flex-col justify-between items-center w-full h-full">
            <div className="w-72 h-36 bg-white flex justify-center items-center">
              <img src={doubts} alt="Dúvidas" />
            </div>
            <p className="text-white flex justify-center items-center text-2xl font-bangers text-center italic">Dúvidas</p>
          </a>
        </li>

        <li className="w-72 h-44 text-center bg-[#0E7886] flex flex-col justify-between items-center shadow-lg">
          <a href="/Forum" className="text-decoration-none text-inherit flex flex-col justify-between items-center w-full h-full">
            <div className="w-72 h-36 bg-white flex justify-center items-center">
              <img src={forum} alt="Forum" />
            </div>
            <p className="text-white flex justify-center items-center text-2xl font-bangers text-center italic">Fórum</p>
          </a>
        </li>

        <li className="w-72 h-44 text-center bg-[#0E7886] flex flex-col justify-between items-center shadow-lg">
          <a href="/Emblemas" className="text-decoration-none text-inherit flex flex-col justify-between items-center w-full h-full">
            <div className="w-72 h-36 bg-white flex justify-center items-center">
              <img src={badges} alt="Badges" />
            </div>
            <p className="text-white flex justify-center items-center text-2xl font-bangers text-center italic">Emblemas</p>
          </a>
        </li>

      </ul>
    </nav>
  );
}
