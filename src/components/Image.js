import React from "react";

const Image = ({ image }) => {
  const { previewURL, largeImageURL, likes, tags, views } = image;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p>{likes} Me Gusta</p>
          <p>{views} Vistas</p>
        </div>

        <div className="card-footer">
          <a
            href={largeImageURL}
            className="btn btn-primary btn-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
