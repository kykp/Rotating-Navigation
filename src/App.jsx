import {useState} from "react";

function App() {
  const [active, setActive] = useState(false);

  return (<>
    <div className={active? "container show-nav": "container"}>
      <div className="circle-container">
        <div className="circle">
          <button id="close" onClick={() => setActive(false)}>
            <i class="fas fa-times"></i>
          </button>
          <button id="open" onClick={() => setActive(true)}>
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <div className="content">
        <h1> Amazing Article</h1>
        <small>Florin Pop</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          facilis cumque, reprehenderit totam praesentium ex aperiam harum dicta
          sunt, ipsa voluptas! Facere voluptatibus iure consequuntur impedit
          molestiae beatae sit modi earum neque quidem. Possimus, adipisci
          distinctio? Totam rerum, dolores sunt unde omnis quas aperiam, quo
          numquam, voluptas labore incidunt suscipit! Nam fugit possimus ad
          natus reiciendis culpa aspernatur numquam quos at! Quas porro quidem
          commodi nisi doloremque officia, neque quaerat cupiditate repudiandae
          voluptate blanditiis aliquam iure reprehenderit veritatis soluta ad,
          voluptates deserunt. Officiis eius quasi veritatis ratione, dolorem
          explicabo totam officia vitae quidem inventore, tenetur quam eos
          molestias quaerat repellat!
        </p>

        <h3>My cat</h3>
        <img
          alt="cat"
          src="https://images.unsplash.com/photo-1593004088154-ea5f31c34f75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1463&q=80"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, perferendis ipsam aut nobis rerum dignissimos veritatis exercitationem iure non magni inventore earum? Iure maxime deserunt enim animi minima corrupti optio officiis laboriosam sed dolore cum numquam ad est magni fuga nulla odio, a odit quisquam alias distinctio harum rem. Esse vel itaque, mollitia recusandae earum neque quas nihil. Ipsum fugiat magnam laboriosam mollitia eum quaerat amet. Necessitatibus hic numquam mollitia officiis debitis velit aliquid ea.</p>
      </div>
    </div>
    <nav>
    <ul>
      <li><i className="fas fa-home"></i>Home</li>
      <li><i className="fas fa-user-alt"></i>About</li>
      <li><i className="fas fa-envelope"></i>Contact</li>
    </ul>
    </nav>
    </>
  );
}

export default App;
