import React, { FC, useState } from 'react';

interface SexoProps {
    sexo: string;
    setSexo: React.Dispatch<React.SetStateAction<string>>;  
}

const Sexo: FC<SexoProps> = ({ sexo, setSexo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const opciones = ['masculino', 'femenino',];


    return (
        <div className="relative w-full">
            <div
                className="w-full bg-transparent border border-gray-100 border-opacity-20 p-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {sexo ? sexo : 'Selecciona un sexo'}
            </div>

            {isOpen && (
                <div className="absolute w-full mt-1 bg-gray-500 bg-opacity-30 border border-gray-100 border-opacity-20 z-10">
                    {opciones.map((opcion) => (
                        <div
                            key={opcion}
                            className="p-2 bg-transparent  hover:bg-opacity-10 cursor-pointer text-gray-100"
                            onClick={() => {
                                setSexo(opcion);
                                setIsOpen(false);
                            }}
                        >
                            {opcion}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sexo;