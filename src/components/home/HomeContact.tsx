import "../../assets/styles/home/HomeCtStyle.css";

const Contact = () => {
  return (
    <div id="contact" className="text-center">
      <div className="container">
        <div className="section-title center">
          <h2>Contactanos👁</h2>
          <hr />
        </div>
        <div className="col-md-8 col-md-offset-2">
          <form action="https://wa.me/573165363587" method="get">
            <div className="form-group">
              <textarea
                name="text"
                id="text"
                className="form-control"
                placeholder="Dime como quieres tu proxima Pagina web o como te puedo ayudar!"
                required
              ></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <div>💻</div>
            <button type="submit" className="btn btn-default btn-lg">
              Enviar!
            </button>
          </form>
          <div className="social">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/daniel_dmngz">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-codepen"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
