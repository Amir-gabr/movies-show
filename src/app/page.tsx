//
//
//
import Hero from "../components/customs/Hero";
import ToTop from "../components/customs/ToTop";
import MoviesCards from "../components/customs/MoviesCards";


export default function Home() {


  return (
    <main className="min-h-screen relative">
      <Hero/>
      <MoviesCards/>
      <ToTop/>
    </main>
  );
}
