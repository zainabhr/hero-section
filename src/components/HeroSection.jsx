// import "../App.css"

export default function HeroSection(){
    return(
        <>
        <div className="mobile-container w-full h-screen flex flex-row justify-center items-center p-[25px]">

            <div className='w-1/2'>
                <h1 className="text-5xl font-bold text-[rgb(67,67,255)] mx-2.5 my-[25px]">UNLOCK YOUR CREATIVE FLOW</h1>
                <p className='text-xl text-[gray] mx-2.5 my-[25px]'>Simplify your projects, collaborate effortlessly, and bring ideas to life with our intuitive platform </p>
                <button className='bg-[rgb(67,67,255)] text-[lightblue] transition-[background-color] duration-[0.8s] m-[25px] hover:bg-[lightblue] hover:text-[rgb(71,70,70)] hover:scale-[1.2]'>Get Started</button>
                <button className='text-[blue] border border-solid border-[rgb(67,67,255)] bg-transparent transition-[background-color] duration-[0.8s]  hover:bg-[lightblue] hover:text-[rgb(71,70,70)] hover:scale-[1.2]'>Watch Demo </button>
            </div>
            <div className='right'>
                <img src="/src/assets/hero-img.jpg" alt="Hero Illustration" className="w-full h-full shadow-[-10px_0_15px_10px_gray] rounded-[25px]" />
            </div> 
        </div>
        </>
    );
}
/*

*/