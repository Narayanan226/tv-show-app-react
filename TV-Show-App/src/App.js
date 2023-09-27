import axios from "axios";
import style from "./style.module.css";
import notfound from "./assets/image/404.jpg";
import { useEffect, useState } from "react";
import { IMAGE_BASE_URL, API_BASE_URL, OPTIONS } from "./config";
import Header from "./components/header/Header";
import MovieDetails from "./components/movieDetail/MovieDetails";
import RecommendationsList from "./components/RecommendationsList/RecommendationsList";

function App() {
  const [currentShow, setCurrentShow] = useState({});
  const [recommendationsList, setRecommendationsList] = useState([]);

  const number = Math.floor(Math.random() * 20);

  const getShowsList = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tv/top_rated`, OPTIONS);
      setCurrentShow(response.data.results[number]);
    } catch (error) {
      console.log();
    }
  };

  const onSearch = async (show) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/search/tv?query=${show}`,
        OPTIONS
      );
      setCurrentShow(response.data.results[0]);
    } catch (error) {
      console.log();
    }
  };

  const getRecommendationsList = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/tv/${currentShow.id}/recommendations`,
        OPTIONS
      );
      setRecommendationsList(response.data.results);
    } catch (error) {
      console.log();
    }
  };

  const onSeriesSelected = (show) => {
    setCurrentShow(show);
  };

  useEffect(() => {
    getShowsList();
  }, []);

  useEffect(() => {
    if (currentShow) getRecommendationsList();
  }, [currentShow]);

  return (
    <div
      className={`row container-fluid ${style.container}`}
      style={{
        background: currentShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${IMAGE_BASE_URL}${currentShow.backdrop_path}) no-repeat center / cover`
          : `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${notfound}) no-repeat center / cover`,
      }}
    >
      <div className={`col-xs-12 ${style.header}`}>
        <Header onSearch={onSearch} />
      </div>
      <div className={`col ${style.movieDetail}`}>
        {currentShow && <MovieDetails show={currentShow} />}
      </div>
      <div className={`col ${style.footer}`}>
        {currentShow && (
          <RecommendationsList
            shows={recommendationsList}
            onSeriesSelected={onSeriesSelected}
          />
        )}
      </div>
    </div>
  );
}

export default App;
