import React, { useState } from 'react';
import { Container, Card, Button, Collapse } from 'react-bootstrap';

const Programs = () => {
  const programData = [
    {
      title: 'Cardio Blast',
      shortDescription: 'High-intensity cardio workout.',
      longDescription: `Experience the energy of our Cardio Blast program. This dynamic workout is designed to boost your cardiovascular fitness, increase calorie burn, and elevate your endurance. Through a mix of heart-pumping exercises, you'll improve your lung capacity, enhance circulation, and enjoy the rush of endorphins that come with a great cardio session.`,
    },
    {
      title: 'Strength Training',
      shortDescription: 'Build muscle and increase strength.',
      longDescription: `Unleash your inner strength with our Strength Training program. Using a variety of equipment and exercises, you'll build lean muscle, enhance metabolism, and sculpt a toned physique. Strength training not only enhances your appearance but also improves bone health, posture, and overall functional fitness. Join us to experience the empowering benefits of lifting weights.`,
    },
    {
      title: 'Hot Yoga',
      shortDescription: 'Flexibility for proper balance.',
      longDescription: `Discover tranquility and vitality in our Hot Yoga program. Practicing yoga in a heated room enhances flexibility, promotes detoxification, and offers a space for mental relaxation. Through a series of poses, you'll find balance, release tension, and foster mindfulness. Join us to embrace the warmth, improve flexibility, and find your zen.`,
    },
  ];

  const [openDescriptionIndex, setOpenDescriptionIndex] = useState(null);

  // Function to handle the "Learn More" button click event
  const handleLearnMore = (index) => {
    if (openDescriptionIndex === index) {
      setOpenDescriptionIndex(null);
    } else {
      setOpenDescriptionIndex(index);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Our Programs</h2>
      <div className="row mt-3">
        {programData.map((program, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{program.title}</Card.Title>
                <Card.Text>
                  {openDescriptionIndex === index ? program.shortDescription : program.shortDescription}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleLearnMore(index)}
                  aria-controls={`description-${index}`}
                  aria-expanded={openDescriptionIndex === index}
                >
                  Learn More
                </Button>
                <Collapse in={openDescriptionIndex === index}>
                  <div id={`description-${index}`} className="mt-3">
                    <p>{program.longDescription}</p>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Programs;
