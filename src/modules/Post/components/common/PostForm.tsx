import React, { useState, FormEvent, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MyInput from '../../../../components/UI/input/MyInput';
import MyButton from '../../../../components/UI/button/MyButton';
import { Post } from '../../types';
import { AuthContext } from '../../../../context';
import { FormProps } from '../../../../types';

const PostForm: React.FC<FormProps<Post>> = ({ create }) => {
  const { authUser } = useContext(AuthContext);

  const [post, setPost] = useState({ title: '', description: '' });

  const addNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: Post = {
      ...post,
      id: uuidv4(),
      userId: authUser.id,
    };

    create(newPost);

    setPost({ title: '', description: '' });
  };

  return (
    <form onSubmit={addNewPost}>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type='text'
        placeholder='Post title'
      />

      <MyInput
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
        type='text'
        placeholder='Post description'
      />

      <MyButton type='submit'>Create post</MyButton>
    </form>
  );
};

export default PostForm;
