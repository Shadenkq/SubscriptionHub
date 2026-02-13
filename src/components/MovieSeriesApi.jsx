import { useEffect, useState } from "react";


function MovieSeriesApi() {
  const [MovieSeriesName, setMovieSeriesName] = useState([]);
  const [MovieSeriesData, setMovieSeriesData] = useState(null);

  const [selectedMovieSeriesName, setselectedMovieSeriesName] = useState(null);
  const [searchType, setsearchType] = useState("");
  const [loading, setloading] = useState(false);
  const [searchloading, setSearchloading] = useState(false);
  const [showDropDown, setshowDropDown] = useState(false);

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setloading(true);

    fetch("https://697e349497386252a26a2668.mockapi.io/Movies")
      .then((res) => res.json())
      .then((movies) => {
        fetch("https://697e349497386252a26a2668.mockapi.io/Series")
          .then((res) => res.json())
          .then((series) => {
            const combined = [...movies, ...series];
            setAllData(combined);
            setloading(false);
          });
      })
      .catch((error) => {
        console.error("Error Fetching", error);
        setAllData([]);
        setloading(false);
      });
  }, []);

  useEffect(() => {
    if (searchType.length < 1) {
      setMovieSeriesName([]);
      setshowDropDown(false);
      setSearchloading(false);
      setMovieSeriesData(null);
      setselectedMovieSeriesName(null);
      return;
    }

    setSearchloading(true);

    const timer = setTimeout(() => {
      const filtered = allData.filter((item) =>
        (item.SeriesName || "").toLowerCase().includes(searchType.toLowerCase())
      );


      setMovieSeriesName(filtered);
      setshowDropDown(true);

      if (filtered.length > 0) {
        setMovieSeriesData(filtered[0]);
        setselectedMovieSeriesName(filtered[0]);
      } else {
        setMovieSeriesData(null);
        setselectedMovieSeriesName(null);
      }

      setSearchloading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchType, allData]);

  const handleSelect = (item) => {
    setselectedMovieSeriesName(item);
    setMovieSeriesData(item);
    setshowDropDown(false);
    setsearchType(item.SeriesName);
  };

  return (
    <div className="ms-container">
      <h2 className="ms-title">Movie & Series Search</h2>

      <div className="ms-searchWrap">
        <span className="ms-searchIcon">🔍</span>

        <input
          className="ms-input"
          value={searchType}
          onChange={(e) => setsearchType(e.target.value)}
          placeholder="Search movie or series..."
        />
      </div>


      {loading && <p className="ms-text">Loading...</p>}
      {searchloading && <p className="ms-text">Searching...</p>}

      {showDropDown && MovieSeriesName.length > 0 && (
        <ul className="ms-dropdown">
          {MovieSeriesName.slice(0, 8).map((item) => (
            <li
              key={item.id}
              className="ms-item"
              onClick={() => handleSelect(item)}
            >
              <span className="ms-name">{item.SeriesName}</span>
              <span className="ms-platform">{item.PlatformName}</span>
            </li>
          ))}
        </ul>
      )}

      {showDropDown && MovieSeriesName.length === 0 && searchType.length > 0 && (
        <div className="ms-empty">No results found</div>
      )}

      {MovieSeriesData && (
        <div className="ms-card">
          <h3 className="ms-cardTitle">{MovieSeriesData.SeriesName}</h3>
          <p>Platform: {MovieSeriesData.PlatformName}</p>
          <p>Genre: {MovieSeriesData.genre}</p>
          <p>Rating: {MovieSeriesData.rating}</p>
        </div>
      )}
    </div>
  );
}

export default MovieSeriesApi;
