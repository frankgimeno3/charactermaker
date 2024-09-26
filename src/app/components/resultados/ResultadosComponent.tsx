import React, { FC } from 'react';

interface ResultadosComponentProps {
  raza: string;
  sexo: string;
  edad: string;
  faccionNatal: string;
  anioNacimiento: string;
  lugarNatal: string;
  subFaccionActual: string;
  orientacionSexual: string;
  temperamento: string;
  voluntadInteraccion: string;
  necesidadesEmocionales: string;
  confianzaPersonas: string;
  alineamientoObjetivos: string;
  aspiraciones: string;
  maquiavelismo: string;
  lealtad: string;
  humildad: string;
  actitudVictoria: string;
  orden: string;
  tenacidad: string;
  fobias: string;
  abstraccion: string;
  politica: string;
}

const ResultadosComponent: FC<ResultadosComponentProps> = ({ raza, sexo, edad, faccionNatal, anioNacimiento,
  lugarNatal, subFaccionActual, orientacionSexual, temperamento, voluntadInteraccion, necesidadesEmocionales,
  confianzaPersonas, alineamientoObjetivos, aspiraciones, maquiavelismo, lealtad, humildad, actitudVictoria,
  orden, tenacidad, fobias, abstraccion, politica, }) => {
  return (
    <div className='p-5'>
      <p>Tu personaje es un {raza} de sexo {sexo}, siendo su etapa vital la de un {edad}.</p>
      <p>{faccionNatal}
        , {anioNacimiento}
        , {lugarNatal}
        , {subFaccionActual}
        , {orientacionSexual}
        , {temperamento}
        , {voluntadInteraccion}
        , {necesidadesEmocionales}
        , {confianzaPersonas}
        , {alineamientoObjetivos}
        , {aspiraciones}
        , {maquiavelismo}
        , {lealtad}
        , {humildad}
        , {actitudVictoria}
        , {orden}
        , {tenacidad}
        , {fobias}
        , {abstraccion}
        , {politica}</p>
    </div>
  );
};

export default ResultadosComponent;