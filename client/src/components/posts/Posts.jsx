import React from 'react'
import { useState } from 'react'

import PostItem from './PostItem'

import Thumbnail1 from './images/thumbnail/post1.jpg'

const DUMMY_POSTS = [
  {
    "id": "1",
    "authorId": 1,
    "category": "technology",
    "title": "The Rise of AI",
    "description": "Exploring the advancements in Artificial Intelligence and its impact on industries.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "2",
    "authorId": 2,
    "category": "health-and-wellness",
    "title": "Healthy Living in Modern Age",
    "description": "Tips and strategies for maintaining health in a fast-paced environment.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "3",
    "authorId": 3,
    "category": "gadgets",
    "title": "Top Smartphones of 2024",
    "description": "A comprehensive review of the top smartphone models available this year.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "4",
    "authorId": 3,
    "category": "technology",
    "title": "The Future of Online Learning",
    "description": "Analyzing the trends in online education and e-learning platforms.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "5",
    "authorId": 5,
    "category": "travel",
    "title": "Exploring the Himalayas",
    "description": "An adventurous guide to trekking through the Himalayan range.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "6",
    "authorId": 2,
    "category": "technology",
    "title": "Space Exploration: Past and Future",
    "description": "A look at mankind's journey through space and the missions ahead.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "7",
    "authorId": 7,
    "category": "food-and-recipes",
    "title": "Gourmet Cooking at Home",
    "description": "How to recreate restaurant-quality meals in your own kitchen.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "8",
    "authorId": 8,
    "category": "technology",
    "title": "Blockchain Revolution",
    "description": "Understanding the potential and challenges of blockchain technology.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "9",
    "authorId": 9,
    "category": "health-and-wellness",
    "title": "Mental Health Awareness",
    "description": "Recognizing and addressing mental health issues in the modern era.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "",
    "authorId": 1,
    "category": "gadgets",
    "title": "Must-Have Smart Home Devices",
    "description": "A guide to essential smart home devices for tech enthusiasts.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "11",
    "authorId": 1,
    "category": "food-and-recipes",
    "title": "Exploring Asian Cuisine",
    "description": "A deep dive into the diverse flavors and recipes of Asian cuisine.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "12",
    "authorId": 2,
    "category": "travel",
    "title": "Backpacking Across Europe",
    "description": "Essential tips for an unforgettable backpacking experience in Europe.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "13",
    "authorId": 9,
    "category": "technology",
    "title": "The Internet of Things (IoT)",
    "description": "How IoT is connecting the world and transforming industries.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "14",
    "authorId": 4,
    "category": "gadgets",
    "title": "Wearable Tech Innovations",
    "description": "The latest trends in wearable technology, from smartwatches to fitness trackers.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "15",
    "authorId": 5,
    "category": "health-and-wellness",
    "title": "Top Fitness Regimes for Athletes",
    "description": "A guide to effective workout plans tailored for athletes.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "16",
    "authorId": 6,
    "category": "travel",
    "title": "Hidden Gems of Southeast Asia",
    "description": "Discovering lesser-known destinations in Southeast Asia.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "17",
    "authorId": 7,
    "category": "food-and-recipes",
    "title": "Mastering Italian Pasta Dishes",
    "description": "Step-by-step guide to perfecting authentic Italian pasta recipes.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "18",
    "authorId": 8,
    "category": "gadgets",
    "title": "Gaming Consoles: Which One to Choose?",
    "description": "A comparative analysis of the top gaming consoles in the market.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "19",
    "authorId": 9,
    "category": "technology",
    "title": "Understanding Quantum Computing",
    "description": "A comprehensive guide to quantum computing and its potential applications.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  },
  {
    "id": "20",
    "authorId": 2,
    "category": "health-and-wellness",
    "title": "Yoga for Beginners",
    "description": "An introductory guide to basic yoga postures and their health benefits.",
    "content": "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ligula non bibendum elementum. Nam dapibus ante ut mauris fermentum, quis interdum libero condimentum. Donec sed ex quam. Aliquam erat volutpat. Phasellus sit amet scelerisque est, id laoreet justo. Suspendisse tristique bibendum varius. Fusce in metus libero. Pellentesque at arcu efficitur, cursus tortor sit amet, tristique odio. Vestibulum nec nisl sit amet est fringilla hendrerit. Curabitur vulputate lectus justo.",
    "thumbnail": Thumbnail1
  }
]

const Posts = () => {

  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="posts">
      {
        posts.map(({ id, authorId, category, title, description, content, thumbnail }) =>
          <PostItem
            key={id}
            authorId={authorId}
            category={category}
            title={title}
            description={description}
            thumbnail={thumbnail}
            content={content}
          />)
      }
    </section>
  )
}

export default Posts