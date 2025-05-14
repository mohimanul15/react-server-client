import React from 'react';
import { useLoaderData } from 'react-router';

const Post = () => {
    const posts = useLoaderData()
    
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    posts.map(ele => <div key={ele.id} className='card bg-slate-100 p-4 shadow-sm'>
                        <h1 className='card-title'>{ele.name}</h1>
                        <p className='card-body'>{ele.body}</p>
                        <h3 className='card-actions'>{ele.email}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Post;