import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import Authors from './pages/Authors';
import AuthorPosts from './pages/AuthorPosts';
import CategoryPosts from './pages/CategoryPosts';
import PostDetail from './pages/PostDetail';
import UserProfile from './pages/UserProfile';

//List of required routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: 'login', element: <Login />},
      {path: 'logout', element: <Logout />},
      {path: 'register', element: <Register />},
      {path: 'create', element: <CreatePost />},
      {path: 'authors', element: <Authors />},
      {path: 'myposts/:id', element: <Dashboard />},
      {path: 'posts/:id', element: <PostDetail />},
      {path: 'profile/:id', element: <UserProfile />},
      {path: 'posts/users/:id', element: <AuthorPosts />},
      {path: 'posts/category/:category', element: <CategoryPosts />},
      {path: 'posts/:id/edit', element: <EditPost />},
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

