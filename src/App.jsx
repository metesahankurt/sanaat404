import HomeImg from "./assets/images/home-img.png";

import Header from "./components/Header";

export default function App() {
  return (
    <div className="h-screen w-full bg-white-600 text-gray-900">
      {/* ==== HEADER SECTION ===== */}
      <Header />

      {/* ==== HOME SECTION ===== */}
      <section className="home grid h-screen pt-32 pb-16">
        <div className="home__container container grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center">
          <div className="home__data justify-self-center text-center lg:text-left">
            <p className="pb-2 font-semibold">Hata 404: Kayıp Harabeler</p>
            
            <h1 className="pb-6 text-5xl font-bold lg:text-6xl">Kaybolmuş gibisiniz! </h1>
            <p className="pb-4 font-semibold">
            
            Üzgünüz, aradığınız sayfa eski harabelerde kaybolmuş gibi görünüyor.
            Ancak yalnız değilsiniz, kazı ekibimiz hala bu kayıp bilgi hazinesini aramak için çalışıyor. </p>

            <p className="pb-4 font-semibold"> Belki de bu arada biraz geriye gidip başka bir yol denemek istersiniz.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-red-600 py-4 px-8 font-bold text-white"
            >
              Ana sayfaya Dön
            </a>
          </div>

          <div className="home__img justify-self-center">
            <img
              src={HomeImg}
              className="w-64 animate-floting lg:w-[400px]"
              alt="home image"
            />
            <div className="home__shadow mx-auto h-8 w-36 animate-shadow rounded-[50%] bg-gray-900/30 blur-md lg:w-64"></div>
          </div>
        </div>

        <div className="home__footer flex items-center justify-center gap-2 self-end text-sm font-semibold">
          <p>0533 579 01 53</p>
          <p>|</p>
          <p>iletisim@sanaat.org</p>
        </div>
      </section>
    </div>
  );
}
