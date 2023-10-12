import self from "../img/self.png"
import Pro1 from "../img/Pro1.png"
import Pro2 from "../img/Pro2.png"
import Pro3 from "../img/Pro3.png"
import Pro4 from "../img/Pro4.png"
import Pro5 from "../img/Pro5.png"
import Pro6 from "../img/Pro6.png"
import Pro7 from "../img/Pro7.png"
import Pro8 from "../img/Pro8.png"

export let colors = ["#00FF00", "#006400"];

export const info = {
    firstName: "Adarsh",
    lastName: "Khatri",
    initials: "ad007",
    position: "currently learning CPP and Java",
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
    bio: "Hello! I'm Adarsh, a Computer Science student at LPU. I have a keen interest in learning C++ and DSA.",
    skills:
    {
        proficientWith: ['C++', 'Java', 'Python', 'Docker'],
        exposedTo: ['C#', 'node.js', 'Adobe Photoshop', 'React', 'MongoDB', 'Tailwind']
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
            title: "Coffee Shop with Angular",
            live: "https://coffeeshop-ivory.vercel.app",
            source: "https://github.com/adarshdhital007/coffeeshop",
            image: Pro8
        },
        // {
        //     title: "Realtime Chat using Firebase",
        //     live: "https://realtimechat-phi.vercel.app",
        //     source: "https://github.com/adarshdhital007/realtimechat",
        //     image: Pro4
        // },
        {
            title: "Weather App with Angular",
            live: " https://weather-app-phi-weld-99.vercel.app",
            source: "https://github.com/adarshdhital007/weather-app",
            image: Pro6
        },
        {
            title: "Product Manager + Backend",
            live: "https://product-manager-mu.vercel.app",
            source: "https://github.com/adarshdhital007/product-manager",
            image: Pro5
        },
        {
            title: "To-Do App with Angular",
            live: "https://to-do-appwith-angular.vercel.app",
            source: "https://github.com/adarshdhital007/ToDoAppwithAngular",
            image: Pro7
        },

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
            source: 'https://github.com/adarshdhital007/PythonProjects/tree/main/DiabetesAnalysis',
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