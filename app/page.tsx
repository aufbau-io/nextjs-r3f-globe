import ThreeScene from './globe-component/three-scene';

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Top section, your existing code */}
      <section className="min-h-screen flex items-center justify-center bg-gray-300">
        <p className="text-white text-2xl">Top Section</p>
      </section>
      {/* Middle section, CODE TO INTEGRATE */}
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
            #232323bb 0vh,\
            #232323ff 50vh,\
            #232323bb 100vh,\
            #23232300 150vh\
          )\
          #000000;'
        }}>
          <ThreeScene />
        </div>
      </section>
      {/* Bottom section, your existing code */}
      <section className="min-h-screen flex items-center justify-center bg-gray-300">
        <p className="text-white text-2xl">Bottom Section</p>
      </section>
    </main>
  );
}
