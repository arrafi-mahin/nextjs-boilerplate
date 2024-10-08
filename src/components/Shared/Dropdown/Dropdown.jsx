"use client"

/**
 * Dropdown component
 * @param {object} props - component properties
 * @param {array} props.data - array of objects with id, name, and value properties
 * @param {function} props.onChange - function to be called when an option is selected
 * @param {string} props.placeholder - placeholder text for the dropdown
 * @param {string} props.label - label text for the dropdown
 * @param {boolean} props.other - boolean indicating whether an "Other" option should be included
 * @param {object} props.error - error object with message property
 * @returns {JSX.Element} - dropdown component
 */

// Example
{/* <Dropdown
  label="Select Menu"
  data={[
    { id: 1, name: "Select 1", value: "select" },
    { id: 2, name: "Select 2", value: "select2" },
    { id: 3, name: "Select 3", value: "select3" },
  ]}
  onChange={(e) => console.log(e)}
  className
/>; */}

import { useEffect, useState, useRef } from "react";
import Arrow from "@/assets/icons/arrow-down.svg";

const Dropdown = ({
  data = [],
  onChange = () => { },
  error,
  placeholder = "Select",
  label = "label",
  other = false
}) => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
    setClicked(false);
  };
  useEffect(() => {
    setSelected(data[0] || null);
  }, [data]);

  useEffect(() => {
    setIsOpen(false);
    onChange(selected);
  }, [selected, onChange]);

  useEffect(() => {
    // Close the dropdown when the user clicks outside of it
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setClicked(false);
      }
    }

    // Add event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove the event listener when the dropdown is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col ">
      <label className="text-primary" htmlFor="">
        {label}
      </label>
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={toggleDropdown}
          className={`py-2 pl-6 pr-4 rounded-full border ${error ? "border-danger" : "border-label"
            } flex justify-between items-center cursor-pointer`}
        >
          <p className="text-primary2">
            {selected ? selected.name : placeholder}
          </p>
          <Arrow className="fill-black" />
        </div>
        <ul
          className={`${isOpen ? "" : "hidden"
            } border border-label absolute w-full max-h-[13rem] rounded-lg mt-1 overflow-y-auto`}
        >
          {data?.map((item) => (
            <li
              onClick={() => handleSelect(item)}
              key={item.id}
              className={`${selected?.id === item?.id
                ? "text-white bg-green-800"
                : "text-primary1 bg-white"
                }  py-2 px-6  hover:bg-green-800 hover:text-white cursor-pointer text-nowrap`}
            >
              {item.name}
            </li>
          ))}
          {other && !isClicked ? (
            <li
              onClick={() => setClicked(true)}
              className={` text-primary1 bg-white  py-2 px-6  hover:bg-primary2 hover:text-white cursor-pointer `}
            >
              Add New
            </li>
          ) : (
            <form className=" px-6" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                className="w-full border border-label focus:outline-none py-2 px-6 mb-2 rounded-full"
                type="text"
                placeholder="Add new"
                name=""
                id=""
              />
            </form>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
