'use sctrict'

var gProjects = [{
    id: 'minesweeper',
    name: 'Mine Sweeper',
    title: 'Staying Alive',
    desc: 'Try not to explode',
    url: 'https://oren-karaso.github.io/Sprint1/',
    publishedAt: '23/1/2021',
    labels: ['Matrixes', 'Games'],
},
{
    id: 'bookshop',
    name: 'Book Shop',
    title: 'Get in The Story',
    desc: 'A platform for bookshop owners to run the business',
    url: 'https://oren-karaso.github.io/Book-Shop/',
    publishedAt: '28/1/2021',
    labels: ['Books', 'Managment'],
}
];


function getProj(projectId) {
    return gProjects.find(function (project) {
        return project.id === projectId;
    });
}

function getProjects() {
    return gProjects;
}