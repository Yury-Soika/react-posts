import React, { ChangeEvent } from 'react';
import { MySelectProps, Post } from '../../../types';

const MySelect: React.FC<MySelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onChange(event.target.value as keyof Post);

  return (
    <select className='border-2' value={value} onChange={handleSelectChange}>
      <option disabled value=''>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
