import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo"
        className='w-28 object-contain'/>
        <button
          type="button"
          onClick={() =>window.open('https://github.com/irtiza-khalid/AI-based-Article-summerizer-web-app-project-') }
          className='black_btn'>Github
        </button>
      </nav>

<h1 className='head_text'>Intelligent Article Summarizer with <br className='max-md:hidden'/>
<span className='orange_gradient'>OpenAI GPT-4</span></h1>

<h2 className='desc'>This is an AI-based article summarizer website application based with OpenAI GPT-4, is an innovative tool that uses advanced AI technology to help users quickly and easily summarize lengthy articles. This web application analyzes the content of an article using various ML models to identify key concepts and important sentences.</h2>

    </header>
  )
}

export default Hero