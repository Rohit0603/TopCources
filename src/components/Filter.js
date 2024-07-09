import React from 'react';

const Filter = (props) => {
  let newData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {newData.map((value) => (
        <button
          className={`text-lg px-2 py-1 rounded-md font-medium text-white
          bg-black hover:bg-opacity-50 border-2 transition-all duration-300
          ${category === value.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}
          key={value.id}
          onClick={() => filterHandler(value.title)}
        >
          {value.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;