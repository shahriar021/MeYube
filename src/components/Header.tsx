import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToOpenSideBar } from "../redux/feature/header/headerSlice";
import { YOU_TUBE_API_SEARCH_SUGGESTION } from "../constant";
import { cacaheResults } from "../redux/feature/header/searchSlice";

const Header = () => {
  const [searchuery, setSearchQuery] = useState("");
  const [searcResult, setSearcResult] = useState([]);
  const [searcSuggestionList, setSearcSuggestionList] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  const handleToggle = () => {
    dispatch(toggleToOpenSideBar());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchuery]) {
        setSearcSuggestionList(searchCache[searchuery]);
      } else {
        getSearchSuggestion();
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchuery]);

  const getSearchSuggestion = async () => {
    console.log("api calling..");
    const data = await fetch(YOU_TUBE_API_SEARCH_SUGGESTION + searchuery);
    const jsonData = await data.json();
    setSearcResult(jsonData[1]);

    dispatch(
      cacaheResults({
        [searchuery]: jsonData[1]
      })
    );
  };

  return (
    <div className="flex justify-between p-3 my-3 items-center shadow-2xl">
      <div className="flex items-center ">
        <img
          onClick={() => handleToggle()}
          alt="image"
          src="https://icons.veryicon.com/png/o/miscellaneous/conventional-use/hamburg-menu-2.png"
          className="w-[30px] h-[30px] hover:cursor-pointer"
        />
        <img
          alt="youtube"
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/youtube-logo.jpg"
          className="w-[60px] h-[60px] "
        />
      </div>

      <div className="flex  items-center">
        <div className="flex">
          <input
            className="border border-gray-400  w-[800px] h-[50px] rounded-l-3xl p-5"
            type="text"
            value={searchuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearcSuggestionList(true)}
            onBlur={() => setSearcSuggestionList(false)}
          />
          <img
            className="border border-gray-400 w-[50px] h-[50px] rounded-r-3xl"
            src="data:image/png;base64,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"
          />
        </div>
        {searcSuggestionList && (
          <div className="absolute top-20 bg-white w-[800px]  p-5 text-xl">
            {searcResult &&
              searcResult.map((item, index) => (
                <ul key={index}>
                  <li className="hover:cursor-pointer">{item}</li>
                </ul>
              ))}
          </div>
        )}
      </div>

      <div className="div">
        <img
          className="w-[30px] h-[30px]"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;
