import { Card } from "react-bootstrap";

const Frase = () => {
  return (
    <section className="my-5">
      <h2>Nelson Muntz</h2>
      <hr />
      <img className="mb-3" src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185" alt="Nelson Muntz" />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>"Shoplifting is a victimless crime, like punching someone in the dark."</p>
            </blockquote>
            <figcaption className="blockquote-footer">
            "Nelson Muntz" in <cite title="Source Title">The simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
