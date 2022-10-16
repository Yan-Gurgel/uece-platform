import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Yan Gurgel"
        content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, doloribus veniam. Debitis vitae animi ab omnis pariatur libero consequuntur dolorum quos cupiditate illo unde, asperiores ipsa dolore. Voluptas, fugiat ullam."
      />
    </div>
  );
}

export default App;
