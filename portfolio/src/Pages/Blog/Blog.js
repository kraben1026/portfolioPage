import Animation from "../../components/animation/Animation";
import Aside from "../../components/Aside";
import Header from "../../components/Header";

const Blog = () => {
  return (
    <>
    <Animation/>
      <div>
      
        <Header />
        <div className="homeContent">
          <main></main>
          <footer></footer>
          <Aside />
        </div>
        
      </div>
    </>
  );
};

export default Blog;
