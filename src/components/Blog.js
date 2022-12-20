import '../assets/scss/Blog.scss';
import BlogItem from './BlogItem';
import Title from './Title';

function Blog() {
    return (
        <section className='blog'>
            <div className='container'>
                <Title titleH2="Blog" />
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