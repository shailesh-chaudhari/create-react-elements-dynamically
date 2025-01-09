import './App.css';

function App() {
  const blogArr = [
    {
      id: 1,
      title: "Blog Title 1",
      description: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum "
    },
    {
      id: 2,
      title: "Blog Title 2",
      description: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum "
    },
    {
      id: 3,
      title: "Blog Title 3",
      description: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum "
    }
  ]

  const blogCards = blogArr.map((item, pos) => {
    console.log(item)
    return (
      <div className="BlogCard" key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    )
  })

  return (
    < div className="App" >
      {blogCards}
    </div>
  );
}

export default App;
