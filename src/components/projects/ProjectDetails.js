import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>diojqwwwww wwwwwwwwwwwwwwwq djoiwjdoiqjmdoiq ndoi2 wqnd oinqw oidnoi2nsdo iiqnoin wdin wqdoinqwoid noindoiq w ndoioqndionqoindcoinio nqodinoiqnwiondi onqiondiqnwdnwiod n qoiwndiqn dinqini odniqwnd in qdi nwdqwdqd</p>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by The Net Ninja</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {};

export default ProjectDetails;
