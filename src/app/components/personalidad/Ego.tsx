import React, { FC } from 'react';

interface EgoProps {
    alineamientoObjetivos: any;
    setAlineamientoObjetivos: any;
    aspiraciones: any;
    setAspiraciones: any;
    maquiavelismo: any;
    setMaquiavelismo: any;
    lealtad: any;
    setLealtad: any;
    humildad: any;
    setHumildad: any;
    actitudVictoria: any;
    setActitudVictoria: any;
}

const Ego: FC<EgoProps> = ({ alineamientoObjetivos,
    setAlineamientoObjetivos, aspiraciones, setAspiraciones, maquiavelismo, setMaquiavelismo,
    lealtad, setLealtad, humildad, setHumildad, actitudVictoria, setActitudVictoria }) => {
    return (

        <>
            <p className='font-bold pt-5'>Ego</p>
            <div className='flex flex-row py-2' >
                <p className='w-60'>Alineamiento de objetivos</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Altruista
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Egocéntrico
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Aspiraciones</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Ambicioso
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Progresista
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Maquiavelismo</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Honesto
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Manipulador
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Lealtad</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Leal
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Traidor
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Humildad</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Humilde
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Arrogante
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Actitud tras victoria</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Compasivo
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Despiadado
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>
        </>

    );
};

export default Ego;