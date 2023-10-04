import Desktop from "./components/desktop";
import Mobile from "./components/mobile";
import Button from './components/button';
import Description from './components/description';
import Footer from "./components/footer";


function App() {

  return (
    <>
      <main className="bg-cream h-screen flex flex-col justify-center items-center">
        <article className="w-[343px] h-[611px] md:w-[600px] md:h-[450px] bg-white rounded-2xl flex flex-col md:flex-row">
          <Desktop />
          <Mobile />
          <div class="px-6 md:px-8">
            <Description />
            <Button />
          </div>
        </article>
      </main>
      <Footer />
   </> 
  )
}

export default App
