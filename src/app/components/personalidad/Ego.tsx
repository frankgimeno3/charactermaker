import React, { FC } from 'react';

interface EgoProps {
    alineamientoObjetivos: string;
    setAlineamientoObjetivos: React.Dispatch<React.SetStateAction<string>>;  
    aspiraciones: string;
    setAspiraciones: React.Dispatch<React.SetStateAction<string>>;  
    maquiavelismo: string;
    setMaquiavelismo: React.Dispatch<React.SetStateAction<string>>;  
    lealtad: string;
    setLealtad: React.Dispatch<React.SetStateAction<string>>;  
    humildad: string;
    setHumildad: React.Dispatch<React.SetStateAction<string>>;  
    actitudVictoria: string;
    setActitudVictoria: React.Dispatch<React.SetStateAction<string>>;  
}

const Ego: FC<EgoProps> = ({
    alineamientoObjetivos,
    setAlineamientoObjetivos,
    aspiraciones,
    setAspiraciones,
    maquiavelismo,
    setMaquiavelismo,
    lealtad,
    setLealtad,
    humildad,
    setHumildad,
    actitudVictoria,
    setActitudVictoria
}) => {
    return (
        <>
            <p className='font-bold pt-5'>Ego</p>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Alineamiento de objetivos</p>
                <button
                    className={`mx-2 text-sm bg-white ${alineamientoObjetivos === 'altruista' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setAlineamientoObjetivos('altruista')}
                >
                    Altruista
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${alineamientoObjetivos === 'egocéntrico' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setAlineamientoObjetivos('egocéntrico')}
                >
                    Egocéntrico
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${alineamientoObjetivos === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setAlineamientoObjetivos('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Aspiraciones</p>
                <button
                    className={`mx-2 text-sm bg-white ${aspiraciones === 'ambicioso' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setAspiraciones('ambicioso')}
                >
                    Ambicioso
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${aspiraciones === 'progresista' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setAspiraciones('progresista')}
                >
                    Progresista
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${aspiraciones === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setAspiraciones('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Maquiavelismo</p>
                <button
                    className={`mx-2 text-sm bg-white ${maquiavelismo === 'honesto' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setMaquiavelismo('honesto')}
                >
                    Honesto
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${maquiavelismo === 'manipulador' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setMaquiavelismo('manipulador')}
                >
                    Manipulador
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${maquiavelismo === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setMaquiavelismo('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Lealtad</p>
                <button
                    className={`mx-2 text-sm bg-white ${lealtad === 'leal' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setLealtad('leal')}
                >
                    Leal
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${lealtad === 'traidor' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setLealtad('traidor')}
                >
                    Traidor
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${lealtad === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setLealtad('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Humildad</p>
                <button
                    className={`mx-2 text-sm bg-white ${humildad === 'humilde' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setHumildad('humilde')}
                >
                    Humilde
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${humildad === 'arrogante' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setHumildad('arrogante')}
                >
                    Arrogante
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${humildad === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setHumildad('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Actitud tras victoria</p>
                <button
                    className={`mx-2 text-sm bg-white ${actitudVictoria === 'compasivo' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setActitudVictoria('compasivo')}
                >
                    Compasivo
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${actitudVictoria === 'despiadado' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setActitudVictoria('despiadado')}
                >
                    Despiadado
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${actitudVictoria === 'aleatorio' ? 'bg-opacity-10' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'} border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setActitudVictoria('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>
        </>
    );
};

export default Ego;
