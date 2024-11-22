import aboutimg from "../assets/about.jpeg"
import circletext from "../assets/text2.svg"
import workingemoji from "../assets/working-emoji.png"
const About = () => {
  return (
 
        <section id="about" className={`about w-full mx-auto flex-col items-center justify-center py-10 `}>
          <h1 className={`text-center m-3 mb-8 text-4xl font-bold `}>About Me</h1>
          <div className='w-full mx-auto lg:flex flex-col lg:flex-row justify-center items-center gap-20'>
            <div className={`section-about-img m-2 flex justify-center items-center `}>
              <div className='about-img md:max-w-md max-w-80  relative'>
                <img className='aboutimg' src={aboutimg} alt='img' />
                <img className='absolute bottom-0 right-0 z-10' width={65} src={workingemoji} alt='text' />
                <div className='circle absolute -right-10 -bottom-10 max-w-36'>
                  <img src={circletext} alt='text' />
                </div>
              </div>
            </div>
            <div className={`section-text flex flex-col justify-center lg:items-start items-center p-3 mt-5`}>
              <div className='w-full mx-auto texts sm:text-lg text-base p-2 flex flex-col justify-center items-start gap-5 max-w-96'>
                <h1 className='sm:text-2xl text-xl text-center relative font-bold  '>
                  Full-Stack Developer
                  based in Baku, Azerbaijan 📍
                </h1>
                <p className=' font-medium lg:text-start text-center'>Hey, my name is Ali, I&apos;m 21, and I&apos;m a FullStack Developer. My passion is to create and develop a clean Web Site for my users. 📍</p>
                <p className=' font-medium lg:text-start text-center'>My main stack currently is React.js, Redux in combination with Tailwind CSS and Material</p>
              </div>
              <div className=' flex flex-col mx-auto justify-center sm:text-lg text-base p-2'>
                <p className='font-medium text-left'><b>Name</b>: Ali Aghayev</p>
                <p className='font-medium text-left'><b>Education</b>: Coumputer Science</p>
                <p className='font-medium text-left'><b>University</b>: BDU</p>
                <p className='font-medium text-left'><b>Email</b>: aghayev_ali@yahoo.com</p>
              </div>
              <div className=' mt-6 rounded-xl sm:text-lg text-sm border-2 border-gray-400 flex flex-col justify-start p-3 '>
                <p className='text-black font-medium text-left poppins'>Experience: Front-end Development</p>
                <p className='text-black font-base text-left poppins'>Front-end Dev Course - EvoCoding | 2022</p>
                <p className='text-black font-base text-left poppins'>Front-end Dev Course - Algorithmics | 2023</p>
                <p className='text-black font-base poppins'>Front-end Dev Intern - Caspian Innovation Center | 2024</p>
                <p className='text-black font-base poppins'>Front-end Dev Mentor - EvoAcademy | 2024 - Still</p>
                <p className='text-black font-base poppins'>Front-end Dev - CoffeeMe | 2024 - Still</p>


              </div>
            </div>
          </div>
        </section>
  )
}

export default About

