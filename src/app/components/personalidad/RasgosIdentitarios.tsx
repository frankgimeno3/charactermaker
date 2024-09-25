import React, { FC } from 'react';

interface RasgosIdentitariosProps {
  faccionNatal:any
setFaccionNatal:any
anioNacimiento:any
setAnioNacimiento:any
lugarNatal:any
setLugarNatal:any
subFaccionActual:any
setSubFaccionActual:any
clase:any
setClase:any
orientacionSexual:any
setOrientacionSexual:any;
}

const RasgosIdentitarios: FC<RasgosIdentitariosProps> = ({ faccionNatal, setFaccionNatal, anioNacimiento, setAnioNacimiento, 
  lugarNatal, setLugarNatal, subFaccionActual, setSubFaccionActual, clase, setClase, orientacionSexual, setOrientacionSexual}) => {
  return (
    <div className='flex flex-col'>
    <p className='font-bold pt-5'>Rasgos identitarios</p>

    <div className='flex flex-row py-2 ' >
      <p className='w-60'>Facción natal</p>
      <input className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' />
      <button className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Fijar
      </button>
      <button className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Aleatorio
      </button>
    </div>

    <div className='flex flex-row py-2' >
      <p className='w-60'>Año de nacimiento</p>
      <input className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' />
      <button className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Fijar
      </button>
      <button className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Aleatorio
      </button>
    </div>

    <div className='flex flex-row py-2' >
      <p className='w-60'>Lugar natal</p>
      <input className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' />
      <button className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Fijar
      </button>
      <button className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Aleatorio
      </button>
    </div>

    <div className='flex flex-row py-2' >
      <p className='w-60'>Sub-facción actual</p>
      <input className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' />
      <button className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Fijar
      </button>
      <button className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Aleatorio
      </button>
    </div>

    <div className='flex flex-row py-2' >
      <p className='w-60'>Clase</p>
      <input className='pl-3 py-1 rounded bg-transparent border border-gray-200 mx-5 w-full text-sm' />
      <button className='text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Fijar
      </button>
      <button className='ml-4 text-xs bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
        Aleatorio
      </button>
    </div>

    <div className='flex flex-row py-2' >
      <p className='w-60'>Orientación sexual</p>
      <button
                        className={`mx-2 text-sm bg-white ${orientacionSexual === 'heterosexual' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                        onClick={() => setOrientacionSexual('heterosexual')}
                    >
        Heterosexual
      </button>
      <button
                        className={`mx-2 text-sm bg-white ${orientacionSexual === 'asexual' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                        onClick={() => setOrientacionSexual('asexual')}
                    >        Asexual
      </button>
      <button
                        className={`mx-2 text-sm bg-white ${orientacionSexual === 'homosexual' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                        onClick={() => setOrientacionSexual('homosexual')}
                    >        Homosexual
      </button>
      <button
                        className={`mx-2 text-sm bg-white ${orientacionSexual === 'bisexual' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                        onClick={() => setOrientacionSexual('bisexual')}
                    >        Bisexual
      </button>
      <button
                        className={`mx-2 text-sm bg-white ${orientacionSexual === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                        onClick={() => setOrientacionSexual('aleatorio')}
                    >        Aleatorio
      </button>
    </div>

    
  </div>
);
};

export default RasgosIdentitarios;