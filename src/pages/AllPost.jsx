import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/conf";

function AllPost() {
  const [post, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPost([]).then((post) => {
    if (post) {
      setPosts(post.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w-/4">
                <PostCard></PostCard>
            </div>
          ))}
        </div>
      </container>
    </div>
  );
}

export default AllPost;
