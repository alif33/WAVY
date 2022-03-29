import React, { useState } from "react";
const List = ({ list }) => {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = (id) => {
    setCollapse(false);
    if (list.id === id) {
      setCollapse(!collapse);
    }
  };
  console.log(collapse);
  return (
    <>
      <li
        onClick={() => handleCollapse(list.id)}
        className="bg-[#19065b] p-3 rounded-md my-3"
      >
        <div className="flex justify-between items-center cursor-pointer text-2xl    ">
          {list.title}{" "}
          <span>
            {collapse ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.5"
                height="2.893"
                viewBox="0 0 13.5 2.893"
              >
                <path
                  id="Icon_awesome-minus"
                  data-name="Icon awesome-minus"
                  d="M12.536,14.625H.964A.964.964,0,0,0,0,15.589v.964a.964.964,0,0,0,.964.964H12.536a.964.964,0,0,0,.964-.964v-.964A.964.964,0,0,0,12.536,14.625Z"
                  transform="translate(0 -14.625)"
                  fill="#12c805"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.957"
                height="12.957"
                viewBox="0 0 12.957 12.957"
              >
                <path
                  id="Icon_ionic-md-add"
                  data-name="Icon ionic-md-add"
                  d="M19.707,14.092H14.092v5.615H12.365V14.092H6.75V12.365h5.615V6.75h1.728v5.615h5.615Z"
                  transform="translate(-6.75 -6.75)"
                  fill="#fff"
                />
              </svg>
            )}
          </span>
        </div>
        {collapse && <p className="text-sm mt-3">{list.text}</p>}
      </li>
    </>
  );
};

export default List;
