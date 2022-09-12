import PostItem from './PostItem'
import './PostsList.css'

const PostsList = ({posts}) => {

    return <div className='postsList'>
        <ul>
        {posts.map(post => <PostItem
        key={post.id}
        post={post}
        />)}
        </ul>
    </div>
}

export default PostsList;