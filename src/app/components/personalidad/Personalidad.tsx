import React, { FC } from 'react';
import RasgosIdentitarios from './RasgosIdentitarios';
import RelacionesSociales from './RelacionesSociales';
import Ego from './Ego';
import Conducta from './Conducta';

interface PersonalidadProps {
  raza: string;
  sexo: string;
  edad: string;
  faccionNatal: any;
  setFaccionNatal: any;
  anioNacimiento: any;
  setAnioNacimiento: any;
  lugarNatal: any;
  setLugarNatal: any;
  subFaccionActual: any;
  setSubFaccionActual: any;
  clase: any;
  setClase: any;
  orientacionSexual: any;
  setOrientacionSexual: any;
  temperamento: any;
  setTemperamento: any;
  voluntadInteraccion: any;
  setVoluntadInteraccion: any;
  necesidadesEmocionales: any;
  setNecesidadesEmocionales: any;
  confianzaPersonas: any;
  setConfianzaPersonas: any;
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

const Personalidad: FC<PersonalidadProps> = ({ raza, sexo, edad, faccionNatal,
  setFaccionNatal, anioNacimiento, setAnioNacimiento, lugarNatal, setLugarNatal,
  subFaccionActual, setSubFaccionActual, clase, setClase, orientacionSexual, setOrientacionSexual,
  temperamento, setTemperamento, voluntadInteraccion, setVoluntadInteraccion, necesidadesEmocionales,
  setNecesidadesEmocionales, confianzaPersonas, setConfianzaPersonas, alineamientoObjetivos,
  setAlineamientoObjetivos, aspiraciones, setAspiraciones, maquiavelismo, setMaquiavelismo,
  lealtad, setLealtad, humildad, setHumildad, actitudVictoria, setActitudVictoria, orden,
  setOrden, tenacidad, setTenacidad, fobias, setFobias, abstraccion, setAbstraccion, politica,
  setPolitica }) => {
  const handleButtonClick = (setter: React.Dispatch<React.SetStateAction<string | null>>, value: string) => {
    setter(value);
  };
  return (
    <div className="flex flex-col bg-white bg-opacity-10 border border-gray-500 text-gray-200 my-5 p-5 rounded h-full">
      <div className='flex flex-row justify-between'>
        <p className='w-60'>Contenido específico</p>
        <button className='text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'>
          Rellenar campos vacíos aleatoriamente
        </button>
      </div>
      <p className='font-bold pt-5 text-xl '>Personalidad</p>

      <RasgosIdentitarios faccionNatal={faccionNatal}
        setFaccionNatal={setFaccionNatal} anioNacimiento={anioNacimiento} setAnioNacimiento={setAnioNacimiento}
        lugarNatal={lugarNatal} setLugarNatal={setLugarNatal} subFaccionActual={subFaccionActual}
        setSubFaccionActual={setSubFaccionActual} clase={clase}
        setClase={setClase} orientacionSexual={orientacionSexual} setOrientacionSexual={setOrientacionSexual} />

      <RelacionesSociales temperamento={temperamento} setTemperamento={setTemperamento} voluntadInteraccion={voluntadInteraccion}
        setVoluntadInteraccion={setVoluntadInteraccion} necesidadesEmocionales={necesidadesEmocionales}
        setNecesidadesEmocionales={setNecesidadesEmocionales} confianzaPersonas={confianzaPersonas}
        setConfianzaPersonas={setConfianzaPersonas} />

      <Ego alineamientoObjetivos={alineamientoObjetivos} setAlineamientoObjetivos={setAlineamientoObjetivos}
        aspiraciones={aspiraciones} setAspiraciones={setAspiraciones} maquiavelismo={maquiavelismo}
        setMaquiavelismo={setMaquiavelismo} lealtad={lealtad} setLealtad={setLealtad} humildad={humildad}
        setHumildad={setHumildad} actitudVictoria={actitudVictoria} setActitudVictoria={setActitudVictoria} />

      <Conducta orden={orden} setOrden={setOrden} tenacidad={tenacidad} setTenacidad={setTenacidad} fobias={fobias}
        setFobias={setFobias} abstraccion={abstraccion} setAbstraccion={setAbstraccion}
        politica={politica} setPolitica={setPolitica} />
    </div>

  );
};

export default Personalidad;