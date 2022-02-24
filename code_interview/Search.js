var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// import searchIcon from "../assets/icons/social/social_facebook_white.svg";

var Search = function Search() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      searchValue = _React$useState2[0],
      setSearchValue = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      searchResults = _React$useState4[0],
      setSearchResults = _React$useState4[1];

  var inputRef = React.useRef(null);

  React.useEffect(function () {
    //Logic
    var handleClickOutside = function handleClickOutside(e) {
      if (!inputRef.current.contains(e.target)) {
        setSearchValue("");
      }
    };

    //Bound event listener
    document.addEventListener("mousedown", handleClickOutside);

    //Cleanup function
    return function () {
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

  var _React$useState5 = React.useState([{
    carType: "Honda Accord",
    models: ["Honda Accord EX", "Honda Accord EX-L", "Honda Accord LX", "Honda Accord Sport"]
  }, {
    carType: "Honda Accord Hybrid",
    models: ["Honda Accord Hybrid Base", "Honda Accord Hybrid EX", "Honda Accord Hybrid EX-L", "Honda Accord Hybrid Touring"]
  }]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      listData = _React$useState6[0],
      setListData = _React$useState6[1];

  var onChangeHandler = function onChangeHandler(e) {
    setSearchValue(e.target.value);
  };

  React.useEffect(function () {
    if (searchValue.length === 0) {
      setSearchValue("");
      setSearchResults([]);
    }
    if (searchValue.length > 0) {
      var filteredResults = listData.filter(function (item) {
        return item.carType.toLowerCase().includes(searchValue.toLowerCase());
      });
      setSearchResults(filteredResults);
    }
  }, [searchValue]);

  return React.createElement(
    "div",
    null,
    React.createElement("input", {
      type: "text",
      placeholder: "Search",
      value: searchValue,
      onChange: onChangeHandler,
      ref: inputRef
    }),
    searchResults.length > 0 && React.createElement(
      "div",
      { className: "search-results" },
      searchResults.map(function (item, i) {
        return React.createElement(
          "div",
          { className: "search-result" },
          React.createElement(
            "li",
            {
              className: "car-type",
              key: "carType" + i,
              style: { paddingLeft: "11.5px" }
            },
            "- ",
            item.carType
          ),
          item.models.map(function (model, i) {
            return React.createElement(
              "li",
              {
                className: "model",
                key: "model" + i,
                style: { cursor: "pointer", paddingLeft: "30.5px" },
                onMouseEnter: function onMouseEnter(e) {
                  return e.target.style.background = "#40cbff", e.target.style.color = "white";
                },
                onMouseLeave: function onMouseLeave(e) {
                  return e.target.style.background = "none", e.target.style.color = "#969696";
                }
              },
              model
            );
          })
        );
      }),
      " "
    )
  );
};

var searchContainer = document.getElementById("search_container");
ReactDOM.render(React.createElement(Search, null), searchContainer);