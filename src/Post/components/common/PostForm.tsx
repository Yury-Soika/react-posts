import React, { useState, FormEvent, useContext } from 'react';
import MyInput from '../../../shared/components/UI/input/MyInput';
import MyButton from '../../../shared/components/UI/button/MyButton';
import { FormPost, NewPost } from '../../types';
import { AuthContext } from '../../../shared/context';
import { AuthContextProps, FormProps } from '../../../shared/types';

const PostForm: React.FC<FormProps<NewPost>> = ({ create }) => {
  const { authUser } = useContext<AuthContextProps>(AuthContext);

  const [post, setPost] = useState<FormPost>({ title: '', description: '' });

  const addNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: NewPost = {
      ...post,
      userId: authUser.id,
    };

    create(newPost);

    setPost({ title: '', description: '' });
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setPost({
      ...post,
      [fieldName]: value,
    });
  };

  return (
    <form onSubmit={addNewPost}>
      <MyInput
        value={post.title}
        onChange={(e) => handleInputChange('title', e.target.value)}
        type='text'
        placeholder='Post title'
      />

      <MyInput
        value={post.description}
        onChange={(e) => handleInputChange('description', e.target.value)}
        type='text'
        placeholder='Post description'
      />

      <MyButton type='submit'>Create post</MyButton>
    </form>
  );
};

export default PostForm;
