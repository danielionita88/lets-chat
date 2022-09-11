import PostsList from "./PostsList";

const POST_DUMMIES = [
  {
    id: "p1",
    first_name: "John",
    last_name: "Ryan",
    date: new Date('September 10, 2022 17:31:00'),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt hic quas beatae vitae id illum vero at quia ea.",
  },
  {
    id: "p2",
    first_name: "Mike",
    last_name: "Wazousky",
    date: new Date('September 9, 2022 13:24:00'),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam sunt dolore dolor voluptatibus voluptates.",
  },
  {
    id: "p3",
    first_name: "Donatelo",
    last_name: "Tortuga",
    date: new Date('September 8, 2022 14:32:00'),
    content:
      "Esse obcaecati repellendus iusto, voluptatem accusantium molestiae voluptatibus enim eius fugit minus veniam voluptate dicta illum? Ipsa nostrum consequatur exercitationem ea quos.",
  },
];

const Posts = (props) => {
  return (
    <div>
      <PostsList posts={POST_DUMMIES} />
    </div>
  );
};

export default Posts;
