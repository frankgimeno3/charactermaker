import React, { FC } from 'react';

interface RelacionesSocialesProps {
    temperamento:any;
    setTemperamento:any;
    voluntadInteraccion:any;
    setVoluntadInteraccion:any;
    necesidadesEmocionales:any;
    setNecesidadesEmocionales:any;
    confianzaPersonas:any;
    setConfianzaPersonas:any;
}

const RelacionesSociales: FC<RelacionesSocialesProps> = ({ temperamento, setTemperamento, voluntadInteraccion, setVoluntadInteraccion, necesidadesEmocionales,
    setNecesidadesEmocionales, confianzaPersonas, setConfianzaPersonas}) => {
    return (
        <>
            <div>
                <p className='font-bold pt-5'>Relaciones sociales</p>

                <div className='flex flex-row py-2 pt-4' >
                    <p className='w-60'>Temperamento</p>
                    <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                        Afable
                    </button>
                    <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                        Hostil
                    </button>
                    <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                        Aleatorio
                    </button>
                </div>
            </div>
            <div className='flex flex-row py-2' >
                <p className='w-60'>Voluntad de interacción</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Extrovertido
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Introvertido
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Necesidades emocionales</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Dependiente
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Independiente
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Confianza en personas</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Confiado
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Desconfiado
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>
        </>

    );
};

export default RelacionesSociales;