import React, { FC } from 'react';
import RasgosIdentitarios from './RasgosIdentitarios';
import RelacionesSociales from './RelacionesSociales';
import Ego from './Ego';
import Conducta from './Conducta';

interface PersonalidadProps {
  raza: string;
  sexo: string;
  edad: string;
  faccionNatal: string;    
  setFaccionNatal: React.Dispatch<React.SetStateAction<string>>;  
  anioNacimiento: string;    
  setAnioNacimiento: React.Dispatch<React.SetStateAction<string>>;  
  lugarNatal: string;    
  setLugarNatal: React.Dispatch<React.SetStateAction<string>>;  
  subFaccionActual: string; 
  setSubFaccionActual: React.Dispatch<React.SetStateAction<string>>;  
  clase: string;    
  setClase: React.Dispatch<React.SetStateAction<string>>;  
  orientacionSexual: string;    
  setOrientacionSexual: React.Dispatch<React.SetStateAction<string>>;  
  temperamento: string;    
  setTemperamento: React.Dispatch<React.SetStateAction<string>>;  
  voluntadInteraccion: string;    
  setVoluntadInteraccion: React.Dispatch<React.SetStateAction<string>>;  
  necesidadesEmocionales: string;    
  setNecesidadesEmocionales: React.Dispatch<React.SetStateAction<string>>;  
  confianzaPersonas: string;    
  setConfianzaPersonas: React.Dispatch<React.SetStateAction<string>>;  
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
 
const Personalidad: FC<PersonalidadProps> = ({ raza, sexo, edad, faccionNatal,
  setFaccionNatal, anioNacimiento, setAnioNacimiento, lugarNatal, setLugarNatal,
  subFaccionActual, setSubFaccionActual, clase, setClase, orientacionSexual, setOrientacionSexual,
  temperamento, setTemperamento, voluntadInteraccion, setVoluntadInteraccion, necesidadesEmocionales,
  setNecesidadesEmocionales, confianzaPersonas, setConfianzaPersonas, alineamientoObjetivos,
  setAlineamientoObjetivos, aspiraciones, setAspiraciones, maquiavelismo, setMaquiavelismo,
  lealtad, setLealtad, humildad, setHumildad, actitudVictoria, setActitudVictoria, orden,
  setOrden, tenacidad, setTenacidad, fobias, setFobias, abstraccion, setAbstraccion, politica,
  setPolitica }) => {

  const handleButtonClick = ()=>console.log("patata")
 
  return (
    <div className="flex flex-col bg-white bg-opacity-10 border border-gray-500 text-gray-200 my-5 p-5 rounded h-full">
      <div className='flex flex-row justify-between'>
        <p className='w-60'>Contenido específico para {raza}, {sexo}, {edad}</p>
        <button className='text-sm bg-white bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 border border-gray-100 px-5 rounded shadow text-gray-100'
        onClick={()=>handleButtonClick()}>
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