const PostItem = (props) => {
    const {first_name, last_name, content, date} = props.post
    const month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date.getMonth())
    const dateNumber = date.getDate()
    const time = date.toLocaleTimeString()
    
  return <li>
    <h3>{first_name} {last_name}</h3>
    <p>{month} {dateNumber}, {time} </p>
    <p>{content}</p>
    <button>Like</button>
    <button>Comment</button>
    <button>Share</button>
  </li>;
};

export default PostItem;
