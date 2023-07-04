import self from "../img/self.png"
import Pro1 from "../img/Pro1.png"
import Pro2 from "../img/Pro2.png"
import Pro3 from "../img/Pro3.png"
import Pro4 from "../img/Pro4.png"

export let colors = ["#00FF00", "#006400"];

export const info = {
    firstName: "Adarsh",
    lastName: "Khatri",
    initials: "ad007", 
    position: "currently learning C++ and React",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(190deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🧑‍💻',
            text: 'fueled by code'
        },
        {
            emoji: '🌎',
            text: 'Nepal'
        },
        {
            emoji: "💼",
            text: "Student"
        },
        {
            emoji: "📧",
            text: "dhitaladarsh6@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/adarshdhital007",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/adarshdhital007",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/adarshdhital",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/adarshdhital007",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I'm Adarsh, a Computer Science student at LPU. I have a keen interest in learning C++ and DSA. I am confident in my abilities and believe that my skills and passion make me a strong candidate for any role.You should hire me!",
    skills:
        {
            proficientWith: ['C++','Java','Python','Docker'],
            exposedTo: ['nodejs','Adobe Photoshop','React','MongoDB','Tailwind']
        }
    ,
    hobbies: [
        {
            label: 'Programming',
            emoji: '📖'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        }

    ],
    portfolio: [ 
       
        {
            title: "Covid Variant Analysis",
            live: " https://colab.research.google.com/drive/1v0VbDk_qGYN8LPwuXE1qNk4R21KwV6P4?usp=sharing",
            source: "https://github.com/adarshdhital007/PythonProjects/tree/main/CovidVariantAnalysis", 
            image: Pro4
        },
        {
            title: "TicTacToe with React ",
            live: "https://adarshdhital007.github.io/tictactoeusingreact",
            source: "https://github.com/adarshdhital007/tictactoeusingreact", 
            image: Pro1
        },
        {
            title: "Diabetes Analysis",
            live: "https://colab.research.google.com/drive/1afqUE9KGkr5m3REJKe11CWdVh6khOK2C?usp=sharing",
            source:'https://github.com/adarshdhital007/PythonProjects/tree/main/DiabetesAnalysis',
            image: Pro3
        },
        {
            title: "Productive Stopwatch",
            live: "https://adarshdhital007.github.io/ProductiveStopwatch",
            source: "https://github.com/adarshdhital007/ProductiveStopwatch",
            image: Pro2
        }
        
    ]
}