import React, { useEffect, useState } from "react";
import AppNavbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import { Container, Row, Col } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";

interface NewsItem {
  title: string;
  description: string;
  source: string;
  date: number; // Date is stored as a number in Firestore
  img: string;
}

const App: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollection = collection(db, "cardNews"); // Correct collection name
        const newsSnapshot = await getDocs(newsCollection);
        const newsData = newsSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            title: data.title,
            description: data.description,
            source: data.source,
            date: data.date, // Keep as number or convert to desired format
            img: data.img,
          } as NewsItem;
        });
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <AppNavbar />
      <Container className="mt-4">
        <Row>
          {news.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <NewsCard
                title={item.title}
                description={item.description}
                source={item.source}
                date={item.date}
                img={item.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
