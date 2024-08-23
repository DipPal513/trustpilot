import Image from "next/image";
import React from "react";
import "./blog.css";
import { useRouter } from "next/navigation";
export default function BlogCard({ blog }) {
    const router = useRouter();
  return (
    <div className=" border cursor-pointer hover:shadow-lg transition duration-300 blogCard hover:bg-gray-100" onClick={() => router.push(`/blogs/${blog.id}`)}>
      <div className="relative overflow-hidden">
        <Image
          src={
            "https://images.ctfassets.net/b7g9mrbfayuu/7oph9H4ek8eGAnoJdYMM5S/8ebddaf7f170d5488ad54549f161f5ab/romance-scams.jpg?q=80&w=256&fm=webp"
          }
          className="blogImage transition duration-200"
          width={300}
          height={200}
          alt="blogimage"
        />
      </div>
      <div className="content p-3">
        <div className="user flex items-center">
            <Image src={"https://i.pinimg.com/736x/02/97/10/029710368a1212667464fac5958cb413.jpg"} width={30} height={30} className="rounded-full"/>
            <p className="ms-2 font-semibold text-gray-500">Muzan Kibutsuzi</p>
        </div>
        <h2 className="text-xl font-bold my-3">{blog.title}</h2>
        <p className="text-gray-500">January 17, 2024</p>
      </div>
    </div>
  );
}
