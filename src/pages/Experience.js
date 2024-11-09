import React, { Component } from "react";
import "./Experience.css";
import Card from 'react-bootstrap/Card';

class Experience extends Component {
    componentDidMount() {
        document.title = "Emily Cheng > Experience";
    }

    render() {
        return (
            <div id="experience">
                <div id="header">
                    <h1>Experience</h1>
                </div>

                <div id="experience-cards">
                    {this.renderExperienceCards()}
                </div>
                
                <div id="header">
                    <h1>Coursework</h1>
                </div>
                <div id="experience-cards">
                    {this.renderCourseworkCards()}
                </div>
            </div>
        );
    }

    renderExperienceCards() {
        const experiences = [
            {
                title: "Teaching Assistant for Foundations of Information Policy 6.4590 @ MIT EECS",
                location: "Cambridge, MA",
                date: "September 2024 - present",
                details: [
                    "Facilitated in-class discussions and organized moot court and legislative hearing exercises. Coordinated grading efforts for case briefs and managed general administrative tasks.", 
                    "Served as liaison between ~60 students, 50 MIT undergraduate and graduate students and 12 BU Law students, and 8 staff members, 3 MIT professors, 2 Boston University Law professors, and 3 MIT communication instructors."
                ]
            },
            {
                title: "Global Strategy Intern @ Hyundai Motor Company",
                location: "Seoul, South Korea",
                date: "June 2024 - August 2024",
                details: [
                    "Recommended company-wide autonomous vehicles strategy after researching industry trends in technology and business.",
                    "Internship through MISTI (MIT International Science and Technology Initiatives)."
                ]
            },
            {
                title: "Teaching Assistant for Optimization in Business Methods 15.053 @ MIT Sloan School of Management",
                location: "Cambridge, Massachusetts",
                date: "Januaray 2023 - May 2024, January 2024 - May 2024",
                details: [
                    "Lead weekly office hours, advise final projects, and formulate and grade exams and problem sets for 100 students.",
                    "Collaborate with 7 other TAs and Prof. Jim Orlin and Prof. Tom Magnanti."
                ]
            },
            {
                title: "Technical Program Management Intern @ Tesla",
                location: "Palo Alto, California",
                date: "May 2023 - August 2023",
                details: [
                    "Optimized global engineering fleet by understanding critical configurations from key stakeholders and designing minimization model to eliminate gaps and redundancies. Utilized Jira to manage workflow across organization.",
                    "Identified features for mounted car computers in Tesla Showrooms and led implementation across engineering and design.",
                    "Worked with the Engineering Fleet Team under Vehicle Software."
                ]
            },
            {
                title: "Undergraduate Researcher @ MIT Sports Lab",
                location: "Cambridge, Massachusetts",
                date: "February 2023 - May 2023",
                details: [
                    "Expand the library of football events, namely determining passes or shots, detected by an algorithm from 2D and 3D tracking data from the World Cup through the use of Python, Pandas, and machine learning techniques.",
                    "Research sponsored by FIFA."
                ]
            },
            {
                title: "Grader for Linear Algebra 18.06 & Mathematics for Computer Science 6.042 @ MIT",
                location: "Cambridge, Massachusetts",
                date: "September 2022 - December 2022",
                details: [
                    "Graded weekly problem sets for 600+ students across 2 classes."
                ]
            },
            {
                title: "Software Engineering Intern @ Google",
                location: "Mountain View, California",
                date: "May 2022 - August 2022",
                details: [
                    "Streamlined testing infrastructure to save 100 Google Pixel devices daily and implemented scalable logic for other software.",
                    "Optimized existing testing pipeline for Android software updates by reducing bottleneck and testing only revised code while surfacing tests results from previous runs for unchanged segments.",
                    "Worked with the Android Engineering Productivity Team."
                ]
            },
            {
                title: "Undergraduate Researcher @ MIT Mathematics Department",
                location: "Cambridge, Massachusetts",
                date: "February 2022 - May 2022",
                details: [
                    "Created an interactive webpage to visualize class dependencies to organize department website and assist students in choosing classes via roadmaps.",
                    "Scraped data from MIT registrar and wrote scripts to construct a network with hover text of class blurbs and hidden prerequisites to be reused each semester."
                ]
            },
            {
                title: "Grader for Differential Equations 18.03 @ MIT Mathematics Department",
                location: "Cambridge, Massachusetts",
                date: "January 2022 - May 2022",
                details: [
                    "Graded weekly problem sets for 350+ students."
                ]
            },
            {
                title: "Product Management Intern @ BitGo",
                location: "Palo Alto, California",
                date: "June 2021 - August 2021",
                details: [
                    "Constructed data-driven dashboards in Domo that identify and minimize shortcomings in BitGo's onboarding process.",
                    "Led and motivated engineers and cross-functional stakeholders in the legal, compliance, product, and executive teams in building analytical solutions."
                ]
            },
            {
                title: "Undergraduate Researcher @ MIT Sloan School of Management",
                location: "Cambridge, Massachusetts (Remote)",
                date: "September 2020 - January 2021",
                details: [
                    "Expanded evaluation offered by the Factor Analysis of Information Risk model through literary and data analysis.",
                    "Conducted cybersecurity research through the Undergraduate Research Opportunities Program."
                ]
            },
            {
                title: "Software Engineering Intern @ Cepton Technologies",
                location: "San Jose, California",
                date: "December 2018 - August 2019",
                details: [
                    "Created quality control programs in C# that verify the scan range and laser-firing frequency of lidar sensors.",
                    "Designed UI with WPF after planning a preliminary sketch and collaborating with sensor engineers."
                ]
            },
            {
                title: "Genetics Research Intern @ Stanford University: Howard Chang Lab",
                location: "Stanford, California",
                date: "May 2019 - August 2019",
                details: [
                    "Invented methods (ATAC-seq) for epigenomic profiling and mapping RNA occupancy on chromatin.",
                    "Investigated the effect of the HOTAIR gene on long-noncoding RNAs on breast cancer tumor metastasis into the lungs.",
                    "Performed PCR, qPCR, and genotyping gels tests and performed histology on cancerous tumors in the heart and lungs."
                ]
            },
        ];

        return experiences.map((exp, index) => (
            <Card key={index}>
                <Card.Body>
                    <Card.Title>{exp.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {exp.location}<br />
                        {exp.date}
                    </Card.Subtitle>
                    <Card.Text>
                        <ul>
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        ));
    }

    renderCourseworkCards() {
        const coursework = [
            {
                title: "Fall 2024",
                details: [
                    '6.7960: Deep Learning',
                    "6.S890: Topics in Multiagent Learning"
                ]
            },
            {
                title: "Spring 2024",
                details: [
                    "6.8620: Spoken Language Processing",
                    "6.S963: Beyond AI & Data Science",
                    "15.285: Sports Strategy and Analytics",
                    "SOCIOL 1111 @ Harvard: Sociology of Sport"
                ]
            },
            {
                title: "Fall 2023",
                details: [
                    "6.7201 [6.215]: Optimization Methods",
                    "6.8611: Natural Language Processing",
                    "11.111: Leadership in Negotiation: Advanced Applications",
                    "18.404: Theory of Computation"
                ]
            },
            {
                title: "Spring 2023",
                details: [
                    "6.3000 [6.003]: Signal Processing",
                    "9.00: Introduction to Psychology",
                    "11.123: Big Cities and Mega Urban Landscapes",
                    "18.204: Seminar in Discrete Mathematics"
                ]
            },
            {
                title: "IAP 2023",
                details: [
                    "15.2671: Negotiation Analysis"
                ]
            },
            {
                title: "Fall 2022",
                details: [
                    "5.111: Principles of Chemical Science",
                    "6.1220 [6.046]: Design and Analysis of Algorithms",
                    "6.4590 [6.805]: Foundations of Internet Policy",
                    "11.011: The Art and Science of Negotiation"
                ]
            },
            {
                title: "Spring 2022",
                details: [
                    "15.053: Optimization for Business Methods",
                    "15.075: Statistical Thinking and Data Analysis",
                    "18.065: Matrix Methods in Data Analysis, Signal Processing, and Machine Learning",
                    "18.100P: Real Analysis"
                ]
            },
            {
                title: "Fall 2021",
                details: [
                    "6.036: Introduction to Machine Learning",
                    "18.03: Differential Equations",
                    "18.06: Linear Algebra",
                    "18.600: Probability and Random Variables"
                ]
            },
            {
                title: "Spring 2021",
                details: [
                    "2.00B: Toy Product Design",
                    "6.006: Introduction to Algorithms",
                    "6.009: Fundamentals of Programming",
                    "18.S191: Introduction to Computational Thinking in Julia",
                    "21M.710: Script Analysis"
                ]
            },
            {
                title: "IAP 2021",
                details: [
                    "6.S191: Introduction to Deep Learning",
                    "15.S50: Poker Theory and Analytics"
                ]
            },
            {
                title: "Fall 2020",
                details: [
                    "6.042: Mathematics for Computer Science",
                    "8.02: Physics II",
                    "14.009: Economics and Society's Toughest Problems",
                    "18.022: Multivariable Calculus",
                    "24.00: Problems of Philosophy"
                ]
            },
        ];

        return coursework.map((course, index) => (
            <Card key={index}>
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                        <ul>
                            {course.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        ));
    }
}

export default Experience;