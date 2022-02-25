// import searchIcon from "../assets/icons/social/social_facebook_white.svg";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const inputRef = React.useRef(null);

  // Data
  const [listData, setListData] = React.useState([
    {
      brand: "Honda",
      model: [
        {
          type: "Honda Accord",
          cars: [
            "Honda Accord EX",
            "Honda Accord EX-L",
            "Honda Accord LX",
            "Honda Accord Sport",
          ],
        },
        {
          type: "Honda Accord Hybrid",
          cars: [
            "Honda Accord Hybrid Base",
            "Honda Accord Hybrid EX",
            "Honda Accord Hybrid EX-L",
            "Honda Accord Hybrid Touring",
          ],
        },
      ],
    },
  ]);

  // Function to click out of search results
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

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  //Filters cars by brand
  React.useEffect(() => {
    if (searchValue.length === 0) {
      setSearchValue("");
      setSearchResults([]);
    }
    if (searchValue.length > 0) {
      const filteredResults = listData.filter((item) =>
        item.brand.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(filteredResults);
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
        style={{
          width: "250px",
          height: "30px",
          fontSize: "15px",
          padding: "11.25px",
          border: "none",
          borderRadius: "0",
        }}
      />
      {searchResults.length > 0 && (
        <div
          style={{
            paddingLeft: "11.5px",
            paddingTop: "9.68px",
            background: "#ffffff",
            width: "280px",
            position: "absolute",
            top: "100%",
            zIndex: "10",
            border: "1px solid #dcdcdc",
            paddingBottom: "26.29px",
          }}
        >
          {searchResults.map((item, i) => (
            <div>
              <h3
                style={{
                  paddingBottom: "4.55px",
                  fontSize: "17px",
                  color: "#000000",
                }}
              >
                {item.brand}
              </h3>
              {item.model.map((item) => {
                return (
                  <div>
                    <li
                      key={`carType${i}`}
                      style={{
                        listStyleType: "none",
                        color: "#40cbff",
                        fontSize: "15px",
                        fontFamily: "HaasGrotText-65Medium, sans-serif",
                      }}
                    >
                      - {item.type}
                    </li>
                    {item.cars.map((car, i) => (
                      <li
                        key={`model${i}`}
                        style={{
                          cursor: "pointer",
                          paddingLeft: "19px",
                          fontSize: "15px",
                          lineHeight: "21px",
                          listStyleType: "none",
                          color: "#969696",
                        }}
                        onMouseEnter={(e) => (
                          (e.target.style.background = "#40cbff"),
                          (e.target.style.color = "white")
                        )}
                        onMouseLeave={(e) => (
                          (e.target.style.background = "none"),
                          (e.target.style.color = "#969696")
                        )}
                      >
                        {car}
                      </li>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const searchContainer = document.getElementById("search_container");
ReactDOM.render(<Search />, searchContainer);
