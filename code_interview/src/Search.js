// import searchIcon from "../assets/icons/social/social_facebook_white.svg";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    //Logic
    const handleClickOutside = (e) => {
      if (!inputRef.current.contains(e.target)) {
        setSearchValue("");
      }
    };

    //Bound event listener
    document.addEventListener("mousedown", handleClickOutside);

    //Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  //   const [listData, setListData] = React.useState([
  //     {brand: 'Honda', model:[{
  //       carType: "Honda Accord",
  //       models: [
  //         "Honda Accord EX",
  //         "Honda Accord EX-L",
  //         "Honda Accord LX",
  //         "Honda Accord Sport",
  //       ],
  //     },
  //     {
  //       carType: "Honda Accord Hybrid",
  //       models: [
  //         "Honda Accord Hybrid Base",
  //         "Honda Accord Hybrid EX",
  //         "Honda Accord Hybrid EX-L",
  //         "Honda Accord Hybrid Touring",
  //       ],
  //     },]}
  //   ]);
  const [listData, setListData] = React.useState([
    {
      carType: "Honda Accord",
      models: [
        "Honda Accord EX",
        "Honda Accord EX-L",
        "Honda Accord LX",
        "Honda Accord Sport",
      ],
    },
    {
      carType: "Honda Accord Hybrid",
      models: [
        "Honda Accord Hybrid Base",
        "Honda Accord Hybrid EX",
        "Honda Accord Hybrid EX-L",
        "Honda Accord Hybrid Touring",
      ],
    },
  ]);
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  //Filters Cars
  React.useEffect(() => {
    if (searchValue.length === 0) {
      setSearchValue("");
      setSearchResults([]);
    }
    if (searchValue.length > 0) {
      const filteredResults = listData.filter((item) =>
        item.carType.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [searchValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={onChangeHandler}
        ref={inputRef}
      />
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((item, i) => (
            <div className="search-result">
              <li
                className="car-type"
                key={`carType${i}`}
                style={{ paddingLeft: "11.5px" }}
              >
                - {item.carType}
              </li>
              {item.models.map((model, i) => (
                <li
                  className="model"
                  key={`model${i}`}
                  style={{ cursor: "pointer", paddingLeft: "30.5px" }}
                  onMouseEnter={(e) => (
                    (e.target.style.background = "#40cbff"),
                    (e.target.style.color = "white")
                  )}
                  onMouseLeave={(e) => (
                    (e.target.style.background = "none"),
                    (e.target.style.color = "#969696")
                  )}
                >
                  {model}
                </li>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const searchContainer = document.getElementById("search_container");
ReactDOM.render(<Search />, searchContainer);
