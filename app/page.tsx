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
          // background: 'radial-gradient(\
          //   circle at center,\
          //   rgba(116, 108, 168, 0.3) 0%,\
          //   rgba(116, 108, 168, 0.3) 10vw,\
          //   rgba(214, 211, 243, 0.1) 40vw,\
          //   rgba(214, 211, 243, 0) 50vw\
          // )\
          // #191919;'
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
