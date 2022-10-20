import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Yan Gurgel"
            content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, doloribus veniam. Debitis vitae animi ab omnis pariatur libero consequuntur dolorum quos cupiditate illo unde, asperiores ipsa dolore. Voluptas, fugiat ullam."
          />
          <Post
            author="Yan Gurgel"
            content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, doloribus veniam. Debitis vitae animi ab omnis pariatur libero consequuntur dolorum quos cupiditate illo unde, asperiores ipsa dolore. Voluptas, fugiat ullam."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
