import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const handleClick = (e) => {
    //     console.log('Hello', e)
    // }
    // const handleClickAgain = (name, e) => {
    //     console.log(`Hello ${name}`, e)
    // }
    // let [name, setName] = useState('Promise')
    // let [age, setAge] = useState(25)
    // const handleClick = () => {
    //     setName('Anuoluwa')
    //     setAge(30)
    //     console.log(name)
    //     console.log(age)
    // }
    

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => (blog.id !== id))
    //     setBlog(newBlogs)
    // }

    //const [name, setName] = useState('Promise')

    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs'/>}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} />
                <button onClick={()=> setName("Seyifunmi")}>Click Here</button>
                <p>{name}</p> */}
            {/* <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Promise', e)}>Click again</button>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
        </div>
     );
}

 
export default Home;