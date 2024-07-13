import React from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
}

const Posts: React.FC = () => {
    const posts: Post[] = [
        { id: 1, title: 'Post 1', content: 'This is the content of post 1' },
        { id: 2, title: 'Post 2', content: 'This is the content of post 2' },
        { id: 3, title: 'Post 3', content: 'This is the content of post 3' },
    ];

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}

            <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
            <div>
                <img src="/mountains-1.jpg" alt="" loading="lazy" />
            </div>
            <div className="col-start-3">
                <img src="/mountains-2.jpg" alt="" loading="lazy" />
            </div>
            <div>
                <img src="/mountains-3.jpg" alt="" loading="lazy" />
            </div>
            <div>
                <img src="/mountains-4.jpg" alt="" loading="lazy" />
            </div>
            <div className="row-start-1 col-start-2 col-span-2">
                <img src="/mountains-5.jpg" alt="" loading="lazy" />
            </div>
            </div>
        </div>
        
    );
};

export default Posts;