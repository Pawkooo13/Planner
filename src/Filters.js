import { useState } from "react";
import Select from "react-select";
import _ from "lodash";

function Filters({
  listActivity,
  setListActivity,
  listActivityAddOrder,
  setListActivityAddOrder,
}) {
  const [loc, setLoc] = useState(false);
  const [date, setDate] = useState(false);

  const options = [
    { value: "null", label: "-- Choose --" },
    { value: "activ asc", label: "A-Z Activities" },
    { value: "activ desc", label: "Z-A Activities" },
    { value: "loc asc", label: "A-Z location" },
    { value: "loc desc", label: "Z-A location" },
    { value: "date asc", label: "Date ascending" },
    { value: "date desc", label: "Date descending" },
  ];

  const [selectValue, setSelectValue] = useState("");

  let uniqueLoc = [];
  let uniqueDate = [];
  let selectedLoc = [];
  let selectedDate = [];

  listActivity.forEach((e) => {
    if (!uniqueLoc.includes(e.location)) {
      uniqueLoc.push(e.location);
    }
    if (!uniqueDate.includes(e.deadline)) {
      if (e.deadline === "" && !uniqueDate.includes("")) {
        uniqueDate.push("");
      } else if (e.deadline === "") {
      } else {
        uniqueDate.push(e.deadline);
      }
    }
  });

  function RemoveAll() {
    setListActivity([]);
    setListActivityAddOrder([]);
  }

  return (
    <div className="filters">
      <input
        id="search"
        type="text"
        placeholder="Search:"
        onChange={(e) => {
          if (e.target.value === "") {
            setListActivity(listActivityAddOrder);
          } else {
            setListActivity(
              listActivityAddOrder.filter((el) =>
                el.activity.includes(e.target.value)
              )
            );
          }
        }}
      />
      <h1> Filters: </h1>
      <div className="filters-container">
        <div id="filter">
          {" "}
          <input
            id="loc"
            type="checkbox"
            onClick={() => {
              setLoc(!loc);
            }}
          />{" "}
          Location{" "}
        </div>

        {loc && (
          <div id="filter-elements">
            {uniqueLoc.map((e) => {
              return (
                <div id="filter-element">
                  <input
                    id="filter-element-checkbox"
                    type="checkbox"
                    onClick={() => {
                      if (!selectedLoc.includes(e)) {
                        selectedLoc.push(e);
                      } else {
                        selectedLoc = selectedLoc.filter((el) => el !== e);
                      }
                    }}
                  />
                  <span> {e} </span>
                </div>
              );
            })}
          </div>
        )}

        <div id="filter">
          {" "}
          <input
            id="date"
            type="checkbox"
            onClick={() => {
              setDate(!date);
            }}
          />{" "}
          Date{" "}
        </div>

        {date && (
          <div id="filter-elements">
            {uniqueDate.map((e) => {
              return (
                <div id="filter-element">
                  <input
                    id="filter-element-checkbox"
                    type="checkbox"
                    onClick={() => {
                      if (!selectedDate.includes(e)) {
                        selectedDate.push(e);
                      } else {
                        selectedDate = selectedDate.filter((el) => el !== e);
                      }
                    }}
                  />
                  <span> {e} </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <h1> Sort: </h1>
      <div id="drop-down-list">
        <Select
          id="list"
          options={options}
          onChange={(e) => setSelectValue(e.value)}
        />
      </div>
      <button
        id="apply-button"
        type="submit"
        onClick={() => {
          setListActivity(
            listActivity.filter((e) => {
              if (
                _.includes(selectedLoc, e.location) ||
                _.includes(selectedDate, e.deadline)
              ) {
                return true;
              } else {
                return false;
              }
            })
          );

          if (
            selectValue === "null" &&
            selectedLoc.length === 0 &&
            selectedDate.length === 0
          ) {
            setListActivity(listActivityAddOrder);
          }
          if (date === false && loc === false) {
            setListActivity(listActivityAddOrder);
          }
          if (selectValue === "activ asc") {
            setListActivity(_.orderBy(listActivity, ["activity"], ["asc"]));
          }
          if (selectValue === "activ desc") {
            setListActivity(_.orderBy(listActivity, ["activity"], ["desc"]));
          }
          if (selectValue === "loc asc") {
            setListActivity(_.orderBy(listActivity, ["location"], ["asc"]));
          }
          if (selectValue === "loc desc") {
            setListActivity(_.orderBy(listActivity, ["location"], ["desc"]));
          }
          if (selectValue === "date asc") {
            setListActivity(_.orderBy(listActivity, ["deadline"], ["asc"]));
          }
          if (selectValue === "date desc") {
            setListActivity(_.orderBy(listActivity, ["deadline"], ["desc"]));
          }

          selectedDate = [];
          selectedLoc = [];

          [...document.querySelectorAll("#filter-element-checkbox")].forEach(
            (e) => {
              e.checked = false;
            }
          );
        }}
      >
        {" "}
        Apply{" "}
      </button>
      <button id="remove-button" type="submit" onClick={RemoveAll}>
        {" "}
        Remove All{" "}
      </button>
    </div>
  );
}

export default Filters;
