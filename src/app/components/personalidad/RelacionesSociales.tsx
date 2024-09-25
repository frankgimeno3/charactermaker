import React, { FC } from 'react';

interface RelacionesSocialesProps {
    temperamento: string;
    setTemperamento: (value: string) => void;
    voluntadInteraccion: string;
    setVoluntadInteraccion: (value: string) => void;
    necesidadesEmocionales: string;
    setNecesidadesEmocionales: (value: string) => void;
    confianzaPersonas: string;
    setConfianzaPersonas: (value: string) => void;
}

const RelacionesSociales: FC<RelacionesSocialesProps> = ({
    temperamento,
    setTemperamento,
    voluntadInteraccion,
    setVoluntadInteraccion,
    necesidadesEmocionales,
    setNecesidadesEmocionales,
    confianzaPersonas,
    setConfianzaPersonas,
}) => {
    return (
        <>
            <div>
                <p className='font-bold pt-5'>Relaciones sociales</p>

                <div className='flex flex-row py-2 pt-4'>
                    <p className='w-60'>Temperamento</p>
                    <button
                        className={`mx-2 text-sm bg-white ${temperamento === 'afable' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                        onClick={() => setTemperamento('afable')}
                    >
                        Afable
                    </button>
                    <button
                        className={`mx-2 text-sm bg-white ${temperamento === 'hostil' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                        onClick={() => setTemperamento('hostil')}
                    >
                        Hostil
                    </button>
                    <button
                        className={`mx-2 text-sm bg-white ${temperamento === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                        onClick={() => setTemperamento('aleatorio')}
                    >
                        Aleatorio
                    </button>
                </div>
            </div>
            
            <div className='flex flex-row py-2'>
                <p className='w-60'>Voluntad de interacción</p>
                <button
                    className={`mx-2 text-sm bg-white ${voluntadInteraccion === 'extrovertido' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setVoluntadInteraccion('extrovertido')}
                >
                    Extrovertido
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${voluntadInteraccion === 'introvertido' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setVoluntadInteraccion('introvertido')}
                >
                    Introvertido
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${voluntadInteraccion === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setVoluntadInteraccion('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Necesidades emocionales</p>
                <button
                    className={`mx-2 text-sm bg-white ${necesidadesEmocionales === 'dependiente' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setNecesidadesEmocionales('dependiente')}
                >
                    Dependiente
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${necesidadesEmocionales === 'independiente' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setNecesidadesEmocionales('independiente')}
                >
                    Independiente
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${necesidadesEmocionales === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setNecesidadesEmocionales('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Confianza en personas</p>
                <button
                    className={`mx-2 text-sm bg-white ${confianzaPersonas === 'confiado' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setConfianzaPersonas('confiado')}
                >
                    Confiado
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${confianzaPersonas === 'desconfiado' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setConfianzaPersonas('desconfiado')}
                >
                    Desconfiado
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${confianzaPersonas === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setConfianzaPersonas('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>
        </>
    );
};

export default RelacionesSociales;
