import {
    // ==> [Company]
    syneos,

    studydesign,
    statthink,
    statprog,
    
    // ==> [Project]
    
    // ==> [Tech]
    // css,
    // html,
    // javascript,
    // nodejs,
    // reactjs,
    sas,
    rlang,
    python,
    gitcolor,
    postgresql,
} from '../assets';

export const navLinks = [
    {
        id: '',
        title: 'Main',
    },
    {
        id: 'about',
        title: 'About',
    },
    // {
    //     id: 'work',
    //     title: 'Experience',
    // },
    {
        id: '',
        title: 'Blog',
    },
    // {
    //     id: 'projects',
    //     title: 'Projects',
    // },
    // {
    //     id: 'contact',
    //     title: 'Contact',
    // },
];

const services = [
    {
        title: 'Clinical Study Design',
        icon: studydesign,
    },
    {
        title: 'Statistical Thinking',
        icon: statthink,
    },
    {
        title: 'Statistical Programming',
        icon: statprog,
    },
];

const technologies = [
    {
        name: 'sas',
        icon: sas,
    },
    {
        name: 'rlang',
        icon: rlang,
    },
    {
        name: 'python',
        icon: python,
    },
    {
        name: 'gitcolor',
        icon: gitcolor,
    },
    // {
    //     name: 'HTML 5',
    //     icon: html,
    // },
    // {
    //     name: 'CSS 3',
    //     icon: css,
    // },
    // {
    //     name: 'JavaScript',
    //     icon: javascript,
    // },
    // {
    //     name: 'React JS',
    //     icon: reactjs,
    // {
    //     name: 'Node JS',
    //     icon: nodejs,
    // },
    {
        name: 'postgresql',
        icon: postgresql,
    },
];

const experiences = [
    {
        title: 'Senior Biostatistician',
        company_name: 'Syneos Health',
        icon: syneos,
        iconBg: 'lightgray',
        date: 'Feb 2022 - present',
    },
    // {
    //     title: '',
    //     company_name: '',
    //     icon: ,
    //     iconBg: '#333333',
    //     date: 'Mon Year - Mon Year',
    // },
];

const projects = [
    // {
    //     id: 'project-1',
    //     name: '',
    //     description: '',
    //     tags: [
    //         {
    //             name: '',
    //             color: '',
    //         },
    //         {
    //             name: '',
    //             color: '',
    //         },
    //         {
    //             name: '',
    //             color: '',
    //         },
    //     ],
    //     image: ,
    //     repo: '',
    //     demo: '',
    // },
];

export { services, technologies, experiences, projects };
