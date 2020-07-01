import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ListImages from "./components/ListImages";
import { getImages } from "./services/ImagesService";
import { imagesPerPage } from "./config/config";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [totalpages, setTotalPages] = useState(1);

  useEffect(() => {
    if (search === "") {
      return;
    }

    const searchApi = async () => {
      const results = await getImages(search, currentpage);
      setImages(results.hits);

      const totalPagesCalc = Math.ceil(results.totalHits / imagesPerPage);
      setTotalPages(totalPagesCalc);
    };

    searchApi();
  }, [search, currentpage]);

  const prevPage = (e) => {
    e.preventDefault();

    const newPage = currentpage - 1;

    if (newPage === 0) return;

    setCurrentPage(newPage);
  };

  const nextPage = (e) => {
    e.preventDefault();

    const newPage = currentpage + 1;

    if (newPage > totalpages) return;

    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImages images={images} />
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {currentpage === 1 ? null : (
              <li className="page-item">
                <a className="page-link" href="#" onClick={prevPage}>
                  Previous
                </a>
              </li>
            )}

            {currentpage === totalpages ? null : (
              <li className="page-item">
                <a className="page-link" href="#" onClick={nextPage}>
                  Next
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
