import SkillsItem from '../main/skills/SkillsItem'
import { SiNextdotjs, SiTailwindcss, SiThreedotjs, SiFramer } from 'react-icons/si'

const techs = [
    {
        name: 'NEXTJS',
        Icon: SiNextdotjs,
        color: 'black'
    },
    {
        name: 'TAILWINDCSS',
        Icon: SiTailwindcss,
        color: 'black'
    },
    {
        name: 'THREEJS',
        Icon: SiThreedotjs,
        color: 'black'
    },
    {
        name: 'MOTION',
        Icon: SiFramer,
        color: 'black'
    }
]

export default function Footer() {
    return (
        <footer className="relative bg-white w-full">
            <div className="flex flex-col items-center z-[9999] pb-2 sm:pb-2 p-2 sm:p-8 relative bg-white w-full">
                <div className="w-full justify-center items-center max-w-7xl flex flex-col p-2 sm:p-8">
                    <h1 className="text-3xl font-bold text-center">My Biography</h1>
                    <div className="flex flex-col flex-wrap max-w-5xl font-semibold p-2 pt-8 pb-8">
                        <p>I was brought up in a middle-class family who worked hard to give their children a good education.
                           I used to love computer science from a very young age and performed outstandingly in whatever opportunities I got.
                           When I completed my early education, I had three major areas of interest Humanities, Entrepreneurship, and Computer Science
                           Crazy! Isn't it? However, I decided to pursue a bachelor's degree in computer science. 
                           Talking about my region, women aren’t encouraged to pursue a technical degree, but I have put in my best efforts
                           from the early stages to gain admission to one of the finest and most prestigious technical institutes in India.
                        </p>
                        <p>As soon as I joined college, I tried my level best to advance my career in the field of computer science.</p>
                       
                        <p>I faced various hardships and struggled with career development due to a lack of guidance and mentorship.
                           But my passion for computer science led me to expand my horizons, I connected with various people across 
                           the globe through LinkedIn, Joined various communities that empower young minds in computer science.
                        </p>
                        <p>I have always believed in the power of community. I have volunteered myself to various communities such as
                           Women Who Code Delhi, Gilrscript Tech, Lean In@NIT Hamirpur, App Team NITH, and others that empower, mentor,
                           support, and promote youths; my motive is to uplift the status of people belonging to the underrepresented communities.
                           I have seen people struggling around me, I myself have struggled through it and I can never let my next generation face 
                           the same hurdles. I am connected with tech communities on Linkedin and twitter, I follow the contents.
                           I am enthusiast of learning new technologies and have strong interest in emerging fields of AR/VR, Cybersecurity,
                           Web and App developed using awesome frameworks like vanilla.js, Next.js. I love participating in hackathons and provide
                           creative solutions of the challenging themes. 

                            
                        </p>
                        <p>
                           Other than that I am a multi tasker, who grabs each opportunity. I love journalism, story telling, travelling, reading, writing, music.
                           A Fun fact about me- I watch a lot of stand-up comedy!  
                        </p>
                    </div>
                </div>
                <div className="flex w-full justify-center border-t-[1px] border-black">
                    <p className="p-2 pt-3 text-xs text-bold">© Copyright | Khushboo Kumari </p>
                </div>
            </div>
        </footer>
    )
}