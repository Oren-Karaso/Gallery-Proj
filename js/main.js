'use strict'

console.log('Starting up');

$(document).ready(onInit);

function onInit() {
    // console.log('In Init func');
    renderProj();
}

function renderProj() {
    var projects = gProjects.map(function (project, idx) {
        return (
            `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${project.id}', ${idx})">
            <div class="portfolio-hover">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
            </div>
            </div>
            <img class="img-fluid" src="img/portfolio/0${idx + 1}-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.labels[1]}</p>
            </div>
            </div>`
            )
        });
        $('.projects-container').html(projects.join(''));
    }
    
    function renderModal(projectId, idx) {
        var currProj = getProj(projectId);
    var modal = (
            `<!-- Project Details Go Here -->
                <h2>${currProj.name}</h2>
                <p class="item-intro text-muted">${currProj.title}.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/0${idx + 1}-full.jpg" alt="">
                <p>${currProj.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${currProj.publishedAt}</li>
                  <li>${currProj.name}</li>
                  <li>Category: ${currProj.labels[1]}</li>
                  <li><a href=${currProj.url} target="_blank">Play me!</a></li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>` );
    
    $('.modal-body').html(modal);
}


function sendMail(ev) {
  // ev.preventDefault();

}