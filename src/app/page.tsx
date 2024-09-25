"use client";
import Personalidad from "./components/personalidad/Personalidad";
import { useState } from "react";
import Raza from "./components/contenidopersonaje/Raza";
import Sexo from "./components/contenidopersonaje/Sexo";
import Edad from "./components/contenidopersonaje/Edad";
import ResultadosComponent from "./components/resultados/ResultadosComponent";

export default function Home() {
  const [raza, setRaza] = useState("humano")
  const [sexo, setSexo] = useState("mascuino")
  const [edad, setEdad] = useState("adulto medio")

  const [faccionNatal, setFaccionNatal] = useState("aleatorio");
  const [anioNacimiento, setAnioNacimiento] = useState("aleatorio");
  const [lugarNatal, setLugarNatal] = useState("aleatorio");
  const [subFaccionActual, setSubFaccionActual] = useState("aleatorio");
  const [clase, setClase] = useState("aleatorio");
  const [orientacionSexual, setOrientacionSexual] = useState("aleatorio");
  const [temperamento, setTemperamento] = useState("aleatorio");
  const [voluntadInteraccion, setVoluntadInteraccion] = useState("aleatorio");
  const [necesidadesEmocionales, setNecesidadesEmocionales] = useState("aleatorio");
  const [confianzaPersonas, setConfianzaPersonas] = useState("aleatorio");
  const [alineamientoObjetivos, setAlineamientoObjetivos] = useState("aleatorio");
  const [aspiraciones, setAspiraciones] = useState("aleatorio");
  const [maquiavelismo, setMaquiavelismo] = useState("aleatorio");
  const [lealtad, setLealtad] = useState("aleatorio");
  const [humildad, setHumildad] = useState("aleatorio");
  const [actitudVictoria, setActitudVictoria] = useState("aleatorio");
  const [orden, setOrden] = useState("aleatorio");
  const [tenacidad, setTenacidad] = useState("aleatorio");
  const [fobias, setFobias] = useState("aleatorio");
  const [abstraccion, setAbstraccion] = useState("aleatorio");
  const [politica, setPolitica] = useState("aleatorio");

  return (
    <main className="bg-gradient-to-r from-gray-900 via-teal-950 to-gray-950 flex flex-row min-h-screen h-full px-8">
      <div className="flex flex-col w-full text-white h-full">
        <p className="pt-24 px-12 text-xl text-gray-200">Configuración</p>
        <div className="px-12">
          <div className=" flex flex- justify-between bg-white bg-opacity-10 border border-gray-500 text-gray-200 my-5 p-5 rounded">
            <p className="w-full">Raza</p>
            <Raza raza={raza} setRaza={setRaza} />
          </div>
          <div className=" flex flex-row justify-between bg-white bg-opacity-10 border border-gray-500 text-gray-200 my-5 p-5 rounded">
            <p className="w-full">Sexo</p>
            <Sexo sexo={sexo} setSexo={setSexo} />

          </div>
          <div className=" flex flex-row justify-between bg-white bg-opacity-10 border border-gray-500 text-gray-200 my-5 p-5 rounded">
            <p className="w-full">Edad</p>
            <Edad edad={edad} setEdad={setEdad} />

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
          <ResultadosComponent raza={raza} sexo={sexo} edad={edad} faccionNatal={faccionNatal}
            anioNacimiento={anioNacimiento} lugarNatal={lugarNatal} subFaccionActual={subFaccionActual}
            orientacionSexual={orientacionSexual} temperamento={temperamento} voluntadInteraccion={voluntadInteraccion}
            necesidadesEmocionales={necesidadesEmocionales} confianzaPersonas={confianzaPersonas}
            alineamientoObjetivos={alineamientoObjetivos} aspiraciones={aspiraciones}
            maquiavelismo={maquiavelismo} lealtad={lealtad} humildad={humildad}
            actitudVictoria={actitudVictoria} orden={orden} tenacidad={tenacidad}
            fobias={fobias} abstraccion={abstraccion} politica={politica} />
        </div>
        <div className="h-full"></div>
      </div>
    </main>
  );
}
