import React from 'react';
import projectData from './data/projects.json';

const Projects = () => {
  return (
    <div className="container projects my-3" id='projects'>
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {projectData.map((data) => (
          <div className="col-md-4 mb-4 my-4 col-lg-3 col-sm-6 mx-3 mx-4" key={data.id}>
            <div className="card bg-dark text-light" style={{ width: '18rem', border: '2px solid yellow', boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)',  }}
            data-aos="flip-right"
            data-aos-duration="1000"
            >
              <div className="img text-center">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                  style={{
                    width: "250px",
                    height: "200px",
                    border: "2px solid yellow",
                    borderRadius: "10px"


                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.demo} className="btn btn-primary mx-3" target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
                 <a href={data.source} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
