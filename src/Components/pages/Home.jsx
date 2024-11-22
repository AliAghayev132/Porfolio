import profileimage from "../assets/ali.jpg"
import {github} from 'react-icons-kit/icomoon/github'
// import {instagram} from 'react-icons-kit/fa/instagram'
import TrackVisibility from 'react-on-screen';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Icon from 'react-icons-kit'

const Home = () => {
  const [text] = useTypewriter({
    words: ['oper'],
    loop: {},
    typeSpeed: 300,
    deleteSpeed: 200,
    delaySpeed: 4000
  });

  return (
    <TrackVisibility
      once>
      {({ isVisible }) =>
        <section id="home" className='profile mx-auto pb-6 w-full flex items-center min-h-[90vh]'>
          <div className='w-full mx-auto lg:flex flex-col lg:flex-row-reverse justify-center items-center gap-10'>
            <div className={`section-profile-img  flex justify-center items-center p-3 ${ isVisible ? "animate__animated animate__fadeInRight" : " "}`}>
              <div className='img-container flex items-center sm:w-80 sm:h-80 h-72 w-72'>
                <img src={profileimage} alt='profileimage' />
              </div>
            </div>
            <div className='section-text flex justify-center items-center p-3'>
              <div className='texts flex flex-col justify-center lg:items-start items-center gap-5 max-w-96'>
                <h1 className={`md:text-5xl sm:text-4xl text-2xl relative lg:text-left text-center font-bold  ${ isVisible ? "animate__animated animate__fadeInUp" : " "}`}>
                  Full-Stack<span className='text-purple-700'> Devel{text}</span>  <Cursor cursorColor='purple'/> 🖥️ 
                 </h1> 
                <p className={`section-text-p1 lg:text-left text-center font-medium ${ isVisible ? "animate__animated animate__fadeInDown" : " "}`}>Hi, I&apos;m Ali Aghayev. A passionate Full-Stack Developer based in Baku, Azerbaijan. 📍</p>
                <div className={`socials flex items-center gap-3 ${ isVisible ? "animate__animated animate__fadeInDown" : " "}`}>
                  <a className='text-black hover:text-blue-600 transition-all duration-300' href='https://github.com/AliAghayev132' rel="noreferrer" target='_blank'><Icon icon={github} size={35}/></a>
                  {/* <a className='text-black hover:text-blue-600 transition-all duration-300' href='https://www.instagram.com/muraesthetics' rel="noreferrer" target='_blank'><Icon icon={instagram} size={40}/></a> */}

                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </TrackVisibility>
  )
}

export default Home
