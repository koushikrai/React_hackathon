import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav>
          <div className="favicon"></div>
          <div className="left">
            <img src="img/favicon.jpg" alt="logo" />
            Koushik`Portfolio
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About me</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <section className="firstSection">
            <div className="leftSection">
              Howdy! Im <span className="purple">Koushik</span>
              <div>
                Im a <span id="element">Developer</span>
                <div className="buttons">
                  <a href="/">
                    <button className="btn">Download Resume</button>
                  </a>
                  <a href="https://github.com/koushikrai">
                    <button className="btn">Visit Github</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="rightSection">
              <img src="img/pic1.png" alt="img/images" />
            </div>
          </section>
          <hr />
          <section className="secondSection">
            <span className="text-Gray"> what i have done so far </span>
            <h1>Languages Known</h1>
            <div className="box">
              <div className="vertical">
                <img src="img/developer.png" alt="" className="image-top" />
                <div className="vertical-title">Java</div>
                <div className="vertical-desc">nknvknkvnkfnvknvknnvkndv</div>
              </div>
              <div className="vertical">
                <img src="img/developer.png" alt="" className="image-top" />
                <div className="vertical-title">Html</div>
                <div className="vertical-desc">nknvknkvnkfnvknvknnvkndv</div>
              </div>
              <div className="vertical">
                <img src="img/developer.png" alt="" className="image-top" />
                <div className="vertical-title">Cascading style sheets</div>
                <div className="vertical-desc">nknvknkvnkfnvknvknnvkndv</div>
              </div>
              <div className="vertical">
                <img src="img/developer.png" alt="" className="image-top" />
                <div className="vertical-title">Java script</div>
                <div className="vertical-desc">nknvknkvnkfnvknvknnv</div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="footer">
            <div className="footer-first">Koushiks Developer Portfolio</div>
            <div className="footer-second">
              <ul>
                <li>Home</li>
                <li>About me</li>
              </ul>
            </div>
            <div className="footer-third">
              <ul>
                <li>Projects</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className="textcenter">
            Copyright &#169; koushiksportfolio.com | All rights reserved
          </div>
        </footer>
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
        <script src="../js/index.js"></script>
      </div>
    </>
  );
}

export default App;
