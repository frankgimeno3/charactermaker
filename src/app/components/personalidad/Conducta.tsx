import React, { FC } from 'react';

interface ConductaProps {
    orden: any;
    setOrden: any;
    tenacidad: any;
    setTenacidad: any;
    fobias: any;
    setFobias: any;
    abstraccion: any;
    setAbstraccion: any;
    politica: any;
    setPolitica: any;
}

const Conducta: FC<ConductaProps> = ({ orden, setOrden, tenacidad, setTenacidad, fobias, setFobias, abstraccion, setAbstraccion,
    politica, setPolitica }) => {
    return (

        <>
            <p className='font-bold pt-5'>Conducta</p>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Orden</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Disciplinado
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Caótico
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Tenacidad</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Resiliente
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Frágil
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>


            <div className='flex flex-row py-2' >
                <p className='w-60'>Fobias</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Cobarde
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Valiente
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Abstracción</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Idealista
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Pragmático
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2' >
                <p className='w-60'>Política</p>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Conservador
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Progresista
                </button>
                <button className='mx-2 text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
                    Aleatorio
                </button>
            </div>
        </>
    );
};

export default Conducta;