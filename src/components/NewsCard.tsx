import React from "react";
import { Card } from "react-bootstrap";

interface NewsCardProps {
  title: string;
  description: string;
  source: string;
  date: number;
  img: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, source, date, img }) => {
  // Convert the date to a string if necessary (or leave it as is if it's already formatted)
  const formattedDate = date.toString();

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {source} - {formattedDate}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
