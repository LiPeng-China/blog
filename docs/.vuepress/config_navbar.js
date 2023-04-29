import {navbar} from 'vuepress-theme-hope';
export const navBar = navbar([
    { text: '首页', link: '/', },
    { text: '开发环境', link: '/Environment/', },
    { 
        text: '命令手册', 
        children: [
            { text: 'Linux', link: '/Command/Linux/' }, 
            { text: 'MarkDown', link: '/Command/Markdown/' }
        ] 
    },
    {
        text: '数据库',
        children: [
            { text: 'MySQL', link: '/DataBase/MySQL/' },
            { text: 'Redis', link: '/DataBase/Redis/' }
        ]
    }
]);