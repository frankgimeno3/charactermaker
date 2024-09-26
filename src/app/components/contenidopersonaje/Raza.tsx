import React, { FC, useState } from 'react';

interface RazaProps {
    raza: string;
    setRaza: React.Dispatch<React.SetStateAction<string>>;  
}

const Raza: FC<RazaProps> = ({ raza, setRaza }) => {
    const [isOpen, setIsOpen] = useState(false);

    const opciones = ['humano', 'dwargul', 'orgruck', 'silvano'];

    return (
        <div className="relative w-full">
            <div
                className="w-full bg-transparent border border-gray-100 border-opacity-20 p-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {raza ? raza : 'Selecciona una raza'}
            </div>

            {isOpen && (
                <div className="absolute w-full mt-1 bg-gray-500 bg-opacity-30 border border-gray-100 border-opacity-20 z-10">
                    {opciones.map((opcion) => (
                        <div
                            key={opcion}
                            className="p-2 bg-transparent  hover:bg-opacity-10 cursor-pointer text-gray-100"
                            onClick={() => {
                                setRaza(opcion);
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

export default Raza;
