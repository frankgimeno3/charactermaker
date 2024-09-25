import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-blue-900 flex flex-row">
      <div className="flex flex-col   w-full text-white">
        <p className="p-12">Configuración</p>
      </div>     
      <div className="flex flex-col  w-full  text-white">
        <p className="p-12">Resultados</p>
      </div>     
    </main>
  );
}
