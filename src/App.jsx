import "./App.css"
import img from "../404-not-found-master/Scarecrow.png"
function App() {

  return (
    <>
      <h1 class="lg:py-10 lg:px-16 2xl:py-10 2xl:px-16 font-inconsolata lg:text-xl text-lg my-4 mx-4 font-extrabold tracking-tighter">
        404 NOT FOUND
      </h1>
      <div class="lg:flex lg:w-42 2xl:flex 2xl:w-42">
        <img class="lg:max-w-md lg:mt-16 lg:ml-14 2xl:max-w-md xs:max-w-xs 2xl:mt-12 2xl:ml-16 mt-16 mx-auto" src={img} alt="Scarecrow" />
        <div class="lg:flex lg:flex-col ">
          <h1 class="font-spacemono lg:text-7xl 2xl:text-8xl lg:mx-28 lg:my-16 text-5xl mx-6 my-16 font-bold tracking-tighter mb-6 text-[#333333] ">I have bad news for you</h1>
            <p class="text-[#4F4F4F] lg:mx-28 lg:text-3xl lg:text-justify lg:w-96 mx-6 text-2xl">The page you are looking for might be removed or is temporarily unavailable</p>
        </div>
      </div>
    </>
  )
}

export default App
