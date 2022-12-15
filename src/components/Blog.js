import '../assets/css/Blog.css';
import BlogItem from './BlogItem';

function Blog() {
    return (
        <section className='blog'>
            <div className='container'>
                <h2 className='blog__title title'>Blog</h2>
                <ul className='blog__list'>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                </ul>
            </div>
        </section>
    );
}

export default Blog;