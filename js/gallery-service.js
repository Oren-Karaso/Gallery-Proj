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
},
{
    id: 'ballNBoard',
    name: 'Ball and Board',
    title: 'Collect \'em All!',
    desc: 'Ball game',
    url: 'https://oren-karaso.github.io/BallNBoard/',
    publishedAt: '28/1/2021',
    labels: ['Games', 'Ball games'],
},
{
    id: 'design2LivePage',
    name: 'Design2LivePage',
    title: 'A Perfect Pixel Attempt',
    desc: 'Work Still On Progress',
    url: 'https://oren-karaso.github.io/Design2LivePage/',
    publishedAt: '28/1/2021',
    labels: ['Design', 'Pages'],
},
{
    id: 'inPicture',
    name: 'In-Picture',
    title: 'Guess The Creature!',
    desc: 'An Animals Guessing Game',
    url: 'https://oren-karaso.github.io/Design2LivePage/',
    publishedAt: '28/1/2021',
    labels: ['Game', 'Guess'],
},
{
    id: 'packman',
    name: 'Packman',
    title: 'Avoid Being Eaten and Finish All The Pizzas!',
    desc: 'Classic Packman Game',
    url: 'https://oren-karaso.github.io/Packman/',
    publishedAt: '28/1/2021',
    labels: ['Game', 'Classics'],
},
{
    id: 'todos',
    name: 'Todos',
    title: 'Never Forget Your Tasks',
    desc: 'A Basic Keep-Style App',
    url: 'https://oren-karaso.github.io/Todos/',
    publishedAt: '28/1/2021',
    labels: ['Tools', 'Tasks'],
},
{
    id: 'touchNums',
    name: 'Touch-Nums',
    title: 'It\'s Just A Numbers Game',
    desc: 'Tap The Numbers By Order',
    url: 'https://oren-karaso.github.io/Touch-Nums/',
    publishedAt: '28/1/2021',
    labels: ['Tools', 'Tasks'],
},
{
    id: 'favoritePlaces',
    name: 'Favorite-Places',
    title: 'Find And Mark Your Favorite Places',
    desc: 'A Map App',
    url: 'https://oren-karaso.github.io/favorite-places/',
    publishedAt: '28/1/2021',
    labels: ['Tools', 'Maps'],
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