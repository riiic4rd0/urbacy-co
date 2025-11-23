import Contact from '../components/sections/Contact';

const KontaktPage = () => {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihre digitale Transformation gestalten
          </p>
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default KontaktPage;