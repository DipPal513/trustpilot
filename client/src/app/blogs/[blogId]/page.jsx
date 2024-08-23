"use client";
import { useParams } from "next/navigation";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";

const allBlogs = [
  {
    id: 4,
    category: "Technology",
    title: "The Rise of AI",
    content:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe id sequi voluptate nostrum dolor natus! Maiores dolorum magni ullam architecto. Molestiae ab nam hic laboriosam ex cumque, enim quaerat consequuntur architecto obcaecati sunt repellat commodi natus voluptatem voluptate totam et vitae non corporis, at ut. Natus quia nobis perferendis numquam fuga provident, et nam velit dignissimos eum distinctio nihil corporis libero. Laboriosam eum voluptatibus aliquid ratione nihil porro sequi reprehenderit ipsum cum nemo voluptatum error dolores quibusdam ab, quaerat ducimus delectus quam vitae veniam nam! Facere aut excepturi aperiam, tempora ipsam tenetur doloribus earum at maiores eius explicabo similique, illo iusto soluta mollitia nulla sit fugiat omnis. Praesentium voluptates reprehenderit magni, voluptatem consequuntur architecto quos molestias mollitia voluptatum suscipit veritatis impedit explicabo delectus eum maiores nulla tempora ad aliquid quo quisquam quis totam. Quas saepe dolorem quae rem illo possimus cum tempore, necessitatibus enim id illum dolor natus asperiores adipisci temporibus ad consectetur aliquam aut, fugiat, fugit ab ipsa unde. Cum voluptatibus impedit neque? Laudantium provident mollitia dicta, consequuntur inventore dolor magnam beatae exercitationem pariatur officia odio, error possimus.</p>",
    author: {
      name: "John Doe",
      avatar: "https://via.placeholder.com/150",
    },
    timestamp: "2024-08-21 10:00 AM",
  },
  {
    id: 3,
    category: "Nature",
    title: "Exploring the Wild",
    content:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe id sequi voluptate nostrum dolor natus! Maiores dolorum magni ullam architecto. Molestiae ab nam hic laboriosam ex cumque, enim quaerat consequuntur architecto obcaecati sunt repellat commodi natus voluptatem voluptate totam et vitae non corporis, at ut. Natus quia nobis perferendis numquam fuga provident, et nam velit dignissimos eum distinctio nihil corporis libero. Laboriosam eum voluptatibus aliquid ratione nihil porro sequi reprehenderit ipsum cum nemo voluptatum error dolores quibusdam ab, quaerat ducimus delectus quam vitae veniam nam! Facere aut excepturi aperiam, tempora ipsam tenetur doloribus earum at maiores eius explicabo similique, illo iusto soluta mollitia nulla sit fugiat omnis. Praesentium voluptates reprehenderit magni, voluptatem consequuntur architecto quos molestias mollitia voluptatum suscipit veritatis impedit explicabo delectus eum maiores nulla tempora ad aliquid quo quisquam quis totam. Quas saepe dolorem quae rem illo possimus cum tempore, necessitatibus enim id illum dolor natus asperiores adipisci temporibus ad consectetur aliquam aut, fugiat, fugit ab ipsa unde. Cum voluptatibus impedit neque? Laudantium provident mollitia dicta, consequuntur inventore dolor magnam beatae exercitationem pariatur officia odio, error possimus.</p>",
    author: {
      name: "Jane Smith",
      avatar: "https://via.placeholder.com/150",
    },
    timestamp: "2024-08-20 02:30 PM",
  },
  {
    id: 2,
    category: "Health",
    title: "Healthy Living Tips",
    content:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe id sequi voluptate nostrum dolor natus! Maiores dolorum magni ullam architecto. Molestiae ab nam hic laboriosam ex cumque, enim quaerat consequuntur architecto obcaecati sunt repellat commodi natus voluptatem voluptate totam et vitae non corporis, at ut. Natus quia nobis perferendis numquam fuga provident, et nam velit dignissimos eum distinctio nihil corporis libero. Laboriosam eum voluptatibus aliquid ratione nihil porro sequi reprehenderit ipsum cum nemo voluptatum error dolores quibusdam ab, quaerat ducimus delectus quam vitae veniam nam! Facere aut excepturi aperiam, tempora ipsam tenetur doloribus earum at maiores eius explicabo similique, illo iusto soluta mollitia nulla sit fugiat omnis. Praesentium voluptates reprehenderit magni, voluptatem consequuntur architecto quos molestias mollitia voluptatum suscipit veritatis impedit explicabo delectus eum maiores nulla tempora ad aliquid quo quisquam quis totam. Quas saepe dolorem quae rem illo possimus cum tempore, necessitatibus enim id illum dolor natus asperiores adipisci temporibus ad consectetur aliquam aut, fugiat, fugit ab ipsa unde. Cum voluptatibus impedit neque? Laudantium provident mollitia dicta, consequuntur inventore dolor magnam beatae exercitationem pariatur officia odio, error possimus.</p>",
    author: {
      name: "Alice Brown",
      avatar: "https://via.placeholder.com/150",
    },
    timestamp: "2024-08-19 11:15 AM",
  },
  {
    id: 1,
    category: "Politics",
    title: "Election 2024",
    content: "An in-depth analysis...",
    author: {
      name: "David Johnson",
      avatar: "https://via.placeholder.com/150",
    },
    timestamp: "2024-08-18 09:00 AM",
  },
];

export default function SingleBlog() {
  const { blogId } = useParams();
  const blog = allBlogs.find((blog) => blog.id == blogId);

  if (!blog) {
    return <div className="text-center mt-10">Blog not found</div>;
  }

  const { title, content, author, timestamp } = blog;

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-screen-sm mx-auto px-4 min-h-[30vh] py-16">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">{title}</h1>
        <div className="flex items-center mb-6">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-gray-700 font-medium">{author.name}</p>
            <p className="text-gray-500 text-sm flex items-center">
              <FaRegCalendarAlt className="mr-2" />
              {new Date(timestamp).toLocaleString()}
            </p>
          </div>
        </div>
        <div
          className="prose max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}
