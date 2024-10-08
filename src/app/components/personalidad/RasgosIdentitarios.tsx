import React, { FC, useState } from 'react';

interface RasgosIdentitariosProps {
  faccionNatal: string
  setFaccionNatal: React.Dispatch<React.SetStateAction<string>>;
  anioNacimiento: string
  setAnioNacimiento: React.Dispatch<React.SetStateAction<string>>;
  lugarNatal: string
  setLugarNatal: React.Dispatch<React.SetStateAction<string>>;
  subFaccionActual: string
  setSubFaccionActual: React.Dispatch<React.SetStateAction<string>>;
  clase: string
  setClase: React.Dispatch<React.SetStateAction<string>>;
  orientacionSexual: string
  setOrientacionSexual: React.Dispatch<React.SetStateAction<string>>;
}

const RasgosIdentitarios: FC<RasgosIdentitariosProps> = ({ 
  faccionNatal, setFaccionNatal, 
  anioNacimiento, setAnioNacimiento,
  lugarNatal, setLugarNatal, 
  subFaccionActual, setSubFaccionActual, 
  clase, setClase, 
  orientacionSexual, setOrientacionSexual 
}) => {
  const [faccionInput, setFaccionInput] = useState(faccionNatal);
  const [anioInput, setAnioInput] = useState(anioNacimiento);
  const [lugarInput, setLugarInput] = useState(lugarNatal);
  const [subFaccionInput, setSubFaccionInput] = useState(subFaccionActual);
  const [claseInput, setClaseInput] = useState(clase);

  return (
    <div className='flex flex-col'>
      <p className='font-bold pt-5'>Rasgos identitarios</p>

      <div className='flex flex-row py-2'>
        <p className='w-60'>Facción natal</p>
        <input 
          className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' 
          placeholder={faccionNatal} 
          value={faccionInput}
          onChange={(e) => setFaccionInput(e.target.value)} 
        />
        <button 
          className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setFaccionNatal(faccionInput)}
        >
          Fijar
        </button>
        <button 
          className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setFaccionNatal('aleatorio')}
        >
          Aleatorio
        </button>
      </div>

      <div className='flex flex-row py-2'>
        <p className='w-60'>Año de nacimiento</p>
        <input 
          className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' 
          placeholder={anioNacimiento} 
          value={anioInput}
          onChange={(e) => setAnioInput(e.target.value)} 
        />
        <button 
          className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setAnioNacimiento(anioInput)}
        >
          Fijar
        </button>
        <button 
          className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setAnioNacimiento('aleatorio')}
        >
          Aleatorio
        </button>
      </div>

      <div className='flex flex-row py-2'>
        <p className='w-60'>Lugar natal</p>
        <input 
          className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' 
          placeholder={lugarNatal} 
          value={lugarInput}
          onChange={(e) => setLugarInput(e.target.value)} 
        />
        <button 
          className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setLugarNatal(lugarInput)}
        >
          Fijar
        </button>
        <button 
          className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setLugarNatal('aleatorio')}
        >
          Aleatorio
        </button>
      </div>

      <div className='flex flex-row py-2'>
        <p className='w-60'>Sub-facción actual</p>
        <input 
          className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' 
          placeholder={subFaccionActual} 
          value={subFaccionInput}
          onChange={(e) => setSubFaccionInput(e.target.value)} 
        />
        <button 
          className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setSubFaccionActual(subFaccionInput)}
        >
          Fijar
        </button>
        <button 
          className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setSubFaccionActual('aleatorio')}
        >
          Aleatorio
        </button>
      </div>

      <div className='flex flex-row py-2'>
        <p className='w-60'>Clase</p>
        <input 
          className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' 
          placeholder={clase} 
          value={claseInput}
          onChange={(e) => setClaseInput(e.target.value)} 
        />
        <button 
          className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setClase(claseInput)}
        >
          Fijar
        </button>
        <button 
          className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
          onClick={() => setClase('aleatorio')}
        >
          Aleatorio
        </button>
      </div>

      <div className='flex flex-row py-2'>
        <p className='w-60'>Orientación sexual</p>
        <button
          className={`mx-2 text-sm bg-white ${orientacionSexual === 'heterosexual' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
          onClick={() => setOrientacionSexual('heterosexual')}
        >
          Heterosexual
        </button>
        <button
          className={`mx-2 text-sm bg-white ${orientacionSexual === 'asexual' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
          onClick={() => setOrientacionSexual('asexual')}
        >
          Asexual
        </button>
        <button
          className={`mx-2 text-sm bg-white ${orientacionSexual === 'homosexual' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
          onClick={() => setOrientacionSexual('homosexual')}
        >
          Homosexual
        </button>
        <button
          className={`mx-2 text-sm bg-white ${orientacionSexual === 'bisexual' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
          onClick={() => setOrientacionSexual('bisexual')}
        >
          Bisexual
        </button>
        <button
          className={`mx-2 text-sm bg-white ${orientacionSexual === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
          onClick={() => setOrientacionSexual('aleatorio')}
        >
          Aleatorio
        </button>
      </div>
    </div>
  );
};

export default RasgosIdentitarios;
