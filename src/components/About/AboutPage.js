import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutPage.css'; // Import custom CSS for styling

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* <header className=" bg-light">
                <Container>
                    <h1 className=" text-center mb-0 p-0">About Us</h1>
                </Container>
            </header> */}

            <main className="">
                <section id="mission" className="bg-light py-5">
                    <Container>
                        <h2 className="mb-4 text-center">About Us</h2>
                        <p className="lead text-center">At Online Exam, our mission is to revolutionize the way students and teachers interact with assessments. We aim to empower educators to design dynamic tests that reflect real-world challenges and enhance student learning outcomes. By offering live exams, we strive to create an environment where students can thrive under the pressure of timed assessments and gain confidence in their knowledge.</p>
                    </Container>
                </section>

                <section id="teachers" className="py-5">
                    <Container>
                        <h2 className="mb-4 text-center">For Teachers</h2>
                        <Row className="text-center">
                            <Col lg={4} className="mb-4">
                                <Card className="h-100 shadow">
                                    <Card.Body>
                                        <Card.Title>Create Engaging Tests</Card.Title>
                                        <Card.Text>
                                            Teachers can effortlessly create tests tailored to their curriculum and teaching style. Our intuitive platform allows for flexible customization, including multiple-choice questions, timed sections, and multimedia integration.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} className="mb-4">
                                <Card className="h-100 shadow">
                                    <Card.Body>
                                        <Card.Title>Monitor Student Progress</Card.Title>
                                        <Card.Text>
                                            Track student performance in real-time during live exams. Gain valuable insights into student comprehension and identify areas for improvement with detailed analytics and performance metrics.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} className="mb-4">
                                <Card className="h-100 shadow">
                                    <Card.Body>
                                        <Card.Title>Build a Community</Card.Title>
                                        <Card.Text>
                                            Join a vibrant community of educators dedicated to innovation in teaching and learning. Share insights, collaborate on best practices, and inspire fellow teachers to elevate their classroom experiences.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="students" className="bg-light py-5">
                    <Container>
                        <h2 className="mb-4 text-center">For Students</h2>
                        <Row className="text-center">
                            <Col lg={4} className="mb-4">
                                <Card className="h-100 shadow">
                                    <Card.Body>
                                        <Card.Title>Real-time Assessment</Card.Title>
                                        <Card.Text>
                                            Experience the thrill of live exams in a secure and user-friendly environment. Test your knowledge under timed conditions and receive immediate feedback on your performance.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} className="mb-4">
                                <Card className="h-100 shadow">
                                    <Card.Body>
                                        <Card.Title>Comprehensive Study Resources</Card.Title>
                                        <Card.Text>
                                            Access a rich repository of study materials, including past exams, practice tests, and subject-specific resources. Prepare confidently for exams with curated content designed to support your learning journey.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} className="mb-4">
                                <Card className="h-100 shadow">
                                    <Card.Body>
                                        <Card.Title>Track Your Progress</Card.Title>
                                        <Card.Text>
                                            Monitor your progress over time with personalized performance dashboards. Identify strengths and weaknesses, set goals, and improve your skills with actionable insights from our analytics tools.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>

            {/* <footer className="bg-dark text-white py-3 text-center">
                <Container>
                    <p>&copy; 2024 Your Website Name. All rights reserved.</p>
                </Container>
            </footer> */}
        </div>
    );
}

export default AboutPage;
