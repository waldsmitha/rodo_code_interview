// import searchIcon from "../assets/icons/social/social_facebook_white.svg";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
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
    console.log(searchValue);
  }, [searchValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={onChangeHandler}
      />
      {/* <img
        src={require("../assets/icons/social/social_facebook_white.svg")}
        alt=""
      /> */}
      <div className="search-results">
        {searchResults.length > 0 &&
          searchResults.map((item, i) => (
            <div className="search-result">
              <li className="car-type" key={`carType${i}`}>
                - {item.carType}
              </li>
              {item.models.map((model, i) => (
                <li className="model" key={`model${i}`}>
                  {model}
                </li>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

const searchContainer = document.getElementById("search_container");
ReactDOM.render(<Search />, searchContainer);
