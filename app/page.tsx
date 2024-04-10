import ThreeScene from './globe-component/three-scene';

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Top section, grey */}
      <section className="min-h-screen flex items-center justify-center bg-gray-300">
        <p className="text-white text-2xl">Top Section</p>
      </section>
      {/* Middle section, black */}
      <section className="flex items-center justify-center bg-black overflow-hidden relative" style={{ height: '120vh' }}>
        {/* Encapsulating div for ThreeScene with custom styling */}
        <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          overflow: 'hidden',
          background: 'radial-gradient(\
            circle at 20%,\
            #301934bb 60vh,\
            #301934ff 70vh,\
            #301934bb 80vh,\
            #30193400 100vh\
          )\
          #000000;'
        }}>
          <ThreeScene />
        </div>
      </section>
      {/* Bottom section, grey */}
      <section className="min-h-screen flex items-center justify-center bg-gray-300">
        <p className="text-white text-2xl">Bottom Section</p>
      </section>
    </main>
  );
}
