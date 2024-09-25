"use client";
import Personalidad from "./components/personalidad/Personalidad";
import { useState } from "react";
import Raza from "./components/contenidopersonaje/Raza";
import Sexo from "./components/contenidopersonaje/Sexo";
import Edad from "./components/contenidopersonaje/Edad";

export default function Home() {
  const [raza, setRaza] = useState("")
  const [sexo, setSexo] = useState("")
  const [edad, setEdad] = useState("")

  const [faccionNatal, setFaccionNatal] = useState("Aleatorio");
  const [anioNacimiento, setAnioNacimiento] = useState("Aleatorio");
  const [lugarNatal, setLugarNatal] = useState("Aleatorio");
  const [subFaccionActual, setSubFaccionActual] = useState("Aleatorio");
  const [clase, setClase] = useState("Aleatorio");
  const [orientacionSexual, setOrientacionSexual] = useState("Aleatorio");
  const [temperamento, setTemperamento] = useState("Aleatorio");
  const [voluntadInteraccion, setVoluntadInteraccion] = useState("Aleatorio");
  const [necesidadesEmocionales, setNecesidadesEmocionales] = useState("Aleatorio");
  const [confianzaPersonas, setConfianzaPersonas] = useState("Aleatorio");
  const [alineamientoObjetivos, setAlineamientoObjetivos] = useState("Aleatorio");
  const [aspiraciones, setAspiraciones] = useState("Aleatorio");
  const [maquiavelismo, setMaquiavelismo] = useState("Aleatorio");
  const [lealtad, setLealtad] = useState("Aleatorio");
  const [humildad, setHumildad] = useState("Aleatorio");
  const [actitudVictoria, setActitudVictoria] = useState("Aleatorio");
  const [orden, setOrden] = useState("Aleatorio");
  const [tenacidad, setTenacidad] = useState("Aleatorio");
  const [fobias, setFobias] = useState("Aleatorio");
  const [abstraccion, setAbstraccion] = useState("Aleatorio");
  const [politica, setPolitica] = useState("Aleatorio");

  return (
    <main className="bg-gradient-to-r from-gray-900 via-teal-950 to-gray-950 flex flex-row min-h-screen h-full px-8">
      <div className="flex flex-col w-full text-white h-full">
        <p className="pt-24 px-12 text-xl text-gray-200">Configuración</p>
        <div className="px-12">
          <div className=" flex flex- justify-between bg-white bg-opacity-10 border border-gray-500 text-gray-200 my-5 p-5 rounded">
            <p className="w-full">Raza</p>
            <Raza raza={raza} setRaza={setRaza}/>
          </div>
          <div className=" flex flex-row justify-between bg-white bg-opacity-10 border border-gray-500 text-gray-200 my-5 p-5 rounded">
            <p className="w-full">Sexo</p>
            <Sexo sexo={sexo} setSexo={setSexo}/>

          </div>
          <div className=" flex flex-row justify-between bg-white bg-opacity-10 border border-gray-500 text-gray-200 my-5 p-5 rounded">
            <p className="w-full">Edad</p>
            <Edad edad={edad} setEdad={setEdad}/>

          </div>
          <Personalidad raza={raza} sexo={sexo} edad={edad} 
 faccionNatal={faccionNatal} setFaccionNatal={setFaccionNatal}
anioNacimiento={anioNacimiento} setAnioNacimiento={setAnioNacimiento}
lugarNatal={lugarNatal} setLugarNatal={setLugarNatal}
subFaccionActual={subFaccionActual} setSubFaccionActual={setSubFaccionActual}
clase={clase} setClase={setClase}
orientacionSexual={orientacionSexual} setOrientacionSexual={setOrientacionSexual}
temperamento={temperamento} setTemperamento={setTemperamento}
voluntadInteraccion={voluntadInteraccion} setVoluntadInteraccion={setVoluntadInteraccion}
necesidadesEmocionales={necesidadesEmocionales} setNecesidadesEmocionales={setNecesidadesEmocionales}
confianzaPersonas={confianzaPersonas} setConfianzaPersonas={setConfianzaPersonas}
alineamientoObjetivos={alineamientoObjetivos} setAlineamientoObjetivos={setAlineamientoObjetivos}
aspiraciones={aspiraciones} setAspiraciones={setAspiraciones}
maquiavelismo={maquiavelismo} setMaquiavelismo={setMaquiavelismo}
lealtad={lealtad} setLealtad={setLealtad}
humildad={humildad} setHumildad={setHumildad}
actitudVictoria={actitudVictoria} setActitudVictoria={setActitudVictoria}
orden={orden} setOrden={setOrden}
tenacidad={tenacidad} setTenacidad={setTenacidad}
fobias={fobias} setFobias={setFobias}
abstraccion={abstraccion} setAbstraccion={setAbstraccion}
politica={politica} setPolitica={setPolitica}
/>
        </div>
      </div>
      <div className="flex flex-col w-full text-white">
        <p className="pt-24 px-12 text-xl text-gray-200">Resultados</p>
        <div className="mx-12 mt-5 bg-white bg-opacity-10 border border-gray-500 text-gray-200   rounded h-full">
          
        </div>
        <div className="h-full"></div>
      </div>
    </main>
  );
}
