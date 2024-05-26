import React, { useState } from "react";
import Select from 'react-select';

const SortBy = ({ inputValue, options }) => {
  const [query, setQuery] = useState('');

  const getValue = (selectedOption) => {
    setQuery(selectedOption);
    inputValue(selectedOption);
  };
  
  return (
    <Select
      value={query}
      onChange={getValue}
      options={options}
    />
  );
};

export default SortBy;
