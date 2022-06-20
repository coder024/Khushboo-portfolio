import ProjectItem from "./projects/ProjectItem"
import { useMediaQuery } from "../../lib/useMediaQuery"
import ProjectsTitle from "./projects/ProjectsTitle"

const projects = [
    {
        link: 'https://coder024.github.io/Indian-Culture/',
        color: '#1ed760',
        title: "INDIAN CULTURE",
        description: "With this site, our primary goal is to promote Indian culture and tradition, particularly among the country's youth, and to show them how India is indeed “Incredible” in every way. Google My Maps has been used to create a location picker that locates top heritage sites in India.",
        techs: [
            'HTML',
            'CSS',
            'Javascript',
            'Google Maps Api',
            
        ],
        gitLink: 'https://github.com/coder024/Indian-Culture',
        bgPath: '/project_1.png'
    },
    {
        link: 'https://coder024.github.io/Sashakt-Stree/',
        color: '#5c16c5',
        title: "Sashakt Stree",
        description: "Sashakt Stree means “Strong Woman”. Our mission is to educate, inspire, and empower rural women. Our goal is to reach out to women in ever-more creative ways through technology and to make them “Sashakt” in their own ways!",
        techs: [
            'Microsoft Azure',
            'HTML',
            'CSS',
            'Javascript',
            'PHP'
        ],
        gitLink: 'https://github.com/coder024/SashaktStree-Microsoft-Azure-Hackathon',
        bgPath: '/project_2.png'
    },
    {
        link: 'https://coder024.github.io/bekind.com/',
        color: '#FF7A00',
        title: "Be Kind",
        description: "Developed a dynamic multi-page website inspired by the theme “Giving back to society. Influences us to take steps towards volunteer work in Non-Profit Organizations, Care for animals and Nature",
        techs: [
            'Javascript',
            'HTML',
            'CSS',
            'SCSS',
            'Canva'
        ],
        gitLink: 'https://github.com/coder024/bekind.com',
        bgPath: '/project_3.png'
    },
    {
        link: "https://elastic-pare-046868.netlify.app/",
        color: '#007FE3',
        title: "Finance-learning app for kids",
        description: "A finance learning site for kids that features chapter based on crypto, NFTs, mutual funds etc. One can also check the learnings gained by giving quiz on this site.",
        techs: [
            'React-native',
            'Redux',
            'React',
            'Python',
            'Netlify'
        ],
        gitLink: 'https://github.com/coder024/Finance-learning-app',
        bgPath: '/project_4.png'
    },
]

export default function Projects() {
    const md = useMediaQuery(768)

    return (
        <section id="projects" className="flex justify-center items-center w-full mt-8">
            <div className="max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14 overflow-hidden">
                <ProjectsTitle />
                {projects.map((project, index) => <ProjectItem 
                    key={index}
                    link={project.link}
                    color={project.color}
                    title={project.title}
                    description={project.description}
                    techs={project.techs}
                    gitLink={project.gitLink}
                    bgPath={project.bgPath}
                    index={index}
                    md={md}
                />)}
            </div>
        </section>
    )
}