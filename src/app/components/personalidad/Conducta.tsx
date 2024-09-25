import React, { FC } from 'react';

interface ConductaProps {
    orden: string; 
    setOrden: React.Dispatch<React.SetStateAction<string>>;  
    tenacidad: string;
    setTenacidad: React.Dispatch<React.SetStateAction<string>>;  
    fobias: string;
    setFobias: React.Dispatch<React.SetStateAction<string>>;  
    abstraccion: string;
    setAbstraccion: React.Dispatch<React.SetStateAction<string>>;  
    politica: string;
    setPolitica: React.Dispatch<React.SetStateAction<string>>;  
}

const Conducta: FC<ConductaProps> = ({
    orden,
    setOrden,
    tenacidad,
    setTenacidad,
    fobias,
    setFobias,
    abstraccion,
    setAbstraccion,
    politica,
    setPolitica
}) => {
    return (
        <>
            <p className='font-bold pt-5'>Conducta</p>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Orden</p>
                <button
                    className={`mx-2 text-sm bg-white ${orden === 'disciplinado' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setOrden('disciplinado')}
                >
                    Disciplinado
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${orden === 'caótico' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setOrden('caótico')}
                >
                    Caótico
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${orden === 'aleatorio' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setOrden('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Tenacidad</p>
                <button
                    className={`mx-2 text-sm bg-white ${tenacidad === 'resiliente' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setTenacidad('resiliente')}
                >
                    Resiliente
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${tenacidad === 'frágil' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setTenacidad('frágil')}
                >
                    Frágil
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${tenacidad === 'aleatorio' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setTenacidad('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Fobias</p>
                <button
                    className={`mx-2 text-sm bg-white ${fobias === 'cobarde' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setFobias('cobarde')}
                >
                    Cobarde
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${fobias === 'valiente' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setFobias('valiente')}
                >
                    Valiente
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${fobias === 'aleatorio' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setFobias('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Abstracción</p>
                <button
                    className={`mx-2 text-sm bg-white ${abstraccion === 'idealista' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setAbstraccion('idealista')}
                >
                    Idealista
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${abstraccion === 'pragmático' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setAbstraccion('pragmático')}
                >
                    Pragmático
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${abstraccion === 'aleatorio' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setAbstraccion('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>

            <div className='flex flex-row py-2'>
                <p className='w-60'>Política</p>
                <button
                    className={`mx-2 text-sm bg-white ${politica === 'conservador' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setPolitica('conservador')}
                >
                    Conservador
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${politica === 'progresista' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setPolitica('progresista')}
                >
                    Progresista
                </button>
                <button
                    className={`mx-2 text-sm bg-white ${politica === 'aleatorio' ? 'bg-opacity-10 ' : 'bg-gradient-to-r from-truansparent to-blue-950 opacity-80'}  border border-gray-100 px-5 rounded shadow text-gray-100`}
                    onClick={() => setPolitica('aleatorio')}
                >
                    Aleatorio
                </button>
            </div>
        </>
    );
};

export default Conducta;
