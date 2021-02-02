'use sctrict'

var gProjects = [{
    id: 'minesweeper',
    name: "Mine Sweeper",
    title: "Staying Alive",
    desc: "Try not to explode",
    url: 'a href="https://oren-karaso.github.io/Sprint1/" target="_blank"',
    publishedAt: '23/1/2021',
    labels: ["Matrixes", "Games"],
},
{
    id: 'bookshop',
    name: "Book Shop",
    title: "Get in The Story",
    desc: "A platform for bookshop owners to run the business",
    url: 'a href="https://oren-karaso.github.io/Book-Shop/" target="_blank"',
    publishedAt: '28/1/2021',
    labels: ["Books", "Managment"],
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