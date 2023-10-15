import Mail_logo from './assets/Mail.jpg'
import Linkedin_logo from './assets/linkedin.svg'
import Facebook_icon from './assets/Facebook Icon.svg'
import Github_icon from './assets/GitHub Icon.svg'
import Instagram_icon from './assets/Instagram Icon.svg'
import Twitter_icon from './assets/Twitter Icon.svg'
import './App.css'

export default function AppComponent(){
    return (
        <div className='parent-wrapper'>
            <div className='child-wrapper'>
                <div className='image-section'>
                </div>
                <div className='information-section'>
                    <p className='info-name'>
                        Ahmed Hussein
                    </p>
                    <p className='info-title'>
                        Frontend Developer
                    </p>
                    <p className='info-website-name'>
                        AhmedHussein.website
                    </p>
                    <div className='buttons-wrapper'>
                        <a>
                            <img src={Mail_logo} />
                            Email
                        </a>
                        <a href='https://www.linkedin.com/in/ahmed-hussein-b33b1a241/' target='_blank' rel='noreferrer'>
                            <img src={Linkedin_logo} />
                            LinkedIn
                        </a>
                    </div>
                    <div className='sections-wrapper'>
                        <div className='about-section'>
                            <h1>
                                About
                            </h1>
                            <p>
                                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                            </p>
                        </div>
                        <div className='interests-section'>
                            <h1>
                                Interests
                            </h1>
                            <p>
                                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='contacts-section'>
                    <img src={Facebook_icon} alt='facebook'/>
                    <img src={Github_icon} alt='Github'/>
                    <img src={Instagram_icon} alt='Instagram'/>
                    <img src={Twitter_icon} alt='Twitter'/>
                </div>
            </div>
        </div>
    )
}