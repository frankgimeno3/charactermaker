import React, { FC } from 'react';

interface ResultadosComponentProps {
    raza:any;
    sexo:any;
    edad:any;
    faccionNatal:any;
    anioNacimiento:any;
    lugarNatal:any;
    subFaccionActual:any;
    orientacionSexual:any;
    temperamento:any;
    voluntadInteraccion:any;
    necesidadesEmocionales:any;
    confianzaPersonas:any;
    alineamientoObjetivos:any;
    aspiraciones:any;
    maquiavelismo:any;
    lealtad:any;
    humildad:any;
    actitudVictoria:any;
    orden:any;
    tenacidad:any;
    fobias:any;
    abstraccion:any;
    politica:any;
}

const ResultadosComponent: FC<ResultadosComponentProps> = ({raza, sexo, edad, faccionNatal, anioNacimiento, 
    lugarNatal, subFaccionActual, orientacionSexual, temperamento, voluntadInteraccion, necesidadesEmocionales,
     confianzaPersonas, alineamientoObjetivos, aspiraciones, maquiavelismo, lealtad, humildad, actitudVictoria, 
     orden, tenacidad, fobias, abstraccion, politica, }) => {
  return (
    <div className='p-5'>
        <p>Tu personaje es un {raza} de sexo {sexo}, siendo su etapa vital la de un {edad}.</p> 
    </div>
  );
};

export default ResultadosComponent;