import React from 'react';

const ListOptions = ({options}) => {
  console.log(options)
    return (
        <>
        {options.map((option, index) => (
          <div key={index}>
            <h2>Option {index + 1}: {option}</h2>
          </div>
        ))}
      </>
    )
}
export default ListOptions;