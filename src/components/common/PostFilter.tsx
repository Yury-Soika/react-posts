import React from 'react';
import { ChangeEvent } from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import { Post, PostFilterProps } from '../../types';
import { selectOptions } from '../../constants';

const PostFilter: React.FC<PostFilterProps> = ({ filter, setFilter }) => {
  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: e.target.value });
  };

  const handleSortChange = (selectedSort: keyof Post | null) => {
    setFilter({ ...filter, sort: selectedSort });
  };

  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={handleQueryChange}
        placeholder='Search...'
      />
      <MySelect
        value={filter.sort ?? ''}
        onChange={handleSortChange}
        defaultValue='Sort'
        options={selectOptions}
      />
    </div>
  );
};

export default PostFilter;
