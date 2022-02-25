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

  // Data

  var _React$useState5 = React.useState([{
    brand: "Honda",
    model: [{
      type: "Honda Accord",
      cars: ["Honda Accord EX", "Honda Accord EX-L", "Honda Accord LX", "Honda Accord Sport"]
    }, {
      type: "Honda Accord Hybrid",
      cars: ["Honda Accord Hybrid Base", "Honda Accord Hybrid EX", "Honda Accord Hybrid EX-L", "Honda Accord Hybrid Touring"]
    }]
  }]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      listData = _React$useState6[0],
      setListData = _React$useState6[1];

  // Function to click out of search results


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

  var onChangeHandler = function onChangeHandler(e) {
    setSearchValue(e.target.value);
  };

  //Filters cars by brand
  React.useEffect(function () {
    if (searchValue.length === 0) {
      setSearchValue("");
      setSearchResults([]);
    }
    if (searchValue.length > 0) {
      var filteredResults = listData.filter(function (item) {
        return item.brand.toLowerCase().includes(searchValue.toLowerCase());
      });
      setSearchResults(filteredResults);
    }
  }, [searchValue]);

  var CarBrand = function CarBrand(_ref) {
    var item = _ref.item;
    return React.createElement(
      "h3",
      {
        style: {
          paddingBottom: "4.55px",
          fontSize: "17px",
          color: "#000000"
        }
      },
      item.brand
    );
  };
  var CarType = function CarType(_ref2) {
    var item = _ref2.item,
        index = _ref2.index;

    return React.createElement(
      "li",
      {
        key: item.type,
        style: {
          listStyleType: "none",
          color: "#40cbff",
          fontSize: "15px",
          fontFamily: "HaasGrotText-65Medium, sans-serif"
        }
      },
      "- ",
      item.type
    );
  };

  var Model = function Model(_ref3) {
    var input = _ref3.input,
        index = _ref3.index;

    return React.createElement(
      "li",
      {
        key: "" + input + index,
        style: {
          cursor: "pointer",
          paddingLeft: "19px",
          fontSize: "15px",
          lineHeight: "21px",
          listStyleType: "none",
          color: "#969696"
        },
        onMouseEnter: function onMouseEnter(e) {
          return e.target.style.background = "#40cbff", e.target.style.color = "white";
        },
        onMouseLeave: function onMouseLeave(e) {
          return e.target.style.background = "none", e.target.style.color = "#969696";
        }
      },
      input
    );
  };

  return React.createElement(
    "div",
    null,
    React.createElement("input", {
      type: "text",
      placeholder: "Search",
      value: searchValue,
      onChange: onChangeHandler,
      ref: inputRef,
      style: {
        width: "250px",
        height: "30px",
        fontSize: "15px",
        padding: "11.25px",
        border: "none",
        borderRadius: "0"
      }
    }),
    searchResults.length > 0 && React.createElement(
      "div",
      {
        style: {
          paddingLeft: "11.5px",
          paddingTop: "9.68px",
          background: "#ffffff",
          width: "280px",
          position: "absolute",
          top: "100%",
          zIndex: "10",
          border: "1px solid #dcdcdc",
          paddingBottom: "26.29px"
        }
      },
      searchResults.map(function (item, i) {
        return React.createElement(
          "div",
          { key: item.brand },
          React.createElement(CarBrand, { item: item }),
          item.model.map(function (item, i) {
            return React.createElement(
              "div",
              { key: "models" + i },
              React.createElement(CarType, { item: item, index: i }),
              item.cars.map(function (car, i) {
                return React.createElement(Model, { key: "model" + i, input: car, index: i });
              })
            );
          })
        );
      })
    )
  );
};

var searchContainer = document.getElementById("search_container");
ReactDOM.render(React.createElement(Search, null), searchContainer);