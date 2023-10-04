import Button from './component/Button';
import Data from './component/Data';

function App() {

  return (
    <>

      <main className='font-haken py-8'>
        <section className='w-[90%] max-w-md mx-auto bg-white shadow-2xl md:flex md:rounded-2xl md:max-w-4xl'>
          <article className='bg-gradient-to-b from-grdnt-slate to-grdnt-royal rounded-b-2xl p-10 text-white text-center md:rounded-2xl md:w-1/2 md:grid md:content-center'>
            <h1 className='text-xl font-bold text-ntl-lvndr'>Your Result</h1>
            <div className='w-36 aspect-square bg-gradient-to-b from-grdnt-violet to-grdnt-persian rounded-full mx-auto my-8 grid content-center md:w-56'>
              <p className='text-5xl font-bold mb-2 md:text-7xl'>76</p>
              <p className='font-bold text-ntl-lvndr'>of 100</p>
            </div>
            <h3 className='text-2xl mb-4 font-bold'>Great</h3>
            <p className='text-ntl-lvndr'>You scored higher than 65% of the people who have taken these tests.</p>
          </article>

          <article className='p-10 grid gap-6 md:w-1/2'>
            <h3 className='text-xl font-bold '>Summary</h3>

            <Data />

            <Button />
          </article>
        </section>
          
      </main>
    
      <footer className='text-xs text-center my-2.5'>
        Challenge by <a className='no-underline hover:underline hover:text-ntl-grayblue' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className='no-underline hover:underline hover:text-ntl-grayblue' href="https://www.github.com/yalfmm" target="_blank">yalfMM</a>.
      </footer>
    
    </>
  )
}

export default App
