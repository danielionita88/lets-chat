import PostItem from './PostItem'

const PostsList = ({posts}) => {

    return <div>
        <ul>
        {posts.map(post => <PostItem
        key={post.id}
        post={post}
        />)}
        </ul>
    </div>
}

export default PostsList;