import React, { Component } from "react";
import { Button,Card,Badge } from 'react-bootstrap';

class Cards extends Component {
  render() {
    const { title, source, info, url, image, author } = this.props.value;
    
    return (
      <Card style={{ width: '26rem', margin: 5 }}>
          <Card.Img variant="top" src={`https://static01.nyt.com/${image}`}  />
          <Card.Body>
              <Card.Title>{ title}</Card.Title>
              <Card.Text>
                {info}
              </Card.Text>
              <blockquote className="blockquote mb-0">
                  <footer footer className="blockquote-footer">
                  <cite title="Source Title">{author}</cite> 
                  </footer>
              </blockquote>
                  <Badge Badge pill bg="dark" style={{ margin: 10 }}>{source}</Badge>
                  <Button variant="primary" href={url}>Go somewhere</Button>
            </Card.Body>
  </Card>
     );
  }
}

export default Cards;
