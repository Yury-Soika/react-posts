import React, { useState, FormEvent } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { Post, PostFormProps } from '../../types';

const PostForm: React.FC<PostFormProps> = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: Post = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({ title: '', body: '' });
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
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type='text'
        placeholder='Post description'
      />

      <MyButton type='submit'>Create post</MyButton>
    </form>
  );
};

export default PostForm;
