import React, { Component } from "react";
import "./Experience.css";
import Card from 'react-bootstrap/Card'
import { alignPropType } from "react-bootstrap/esm/types";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "Emily Cheng > Experience"
    }

    render() {
        return(
            <div id="experience">
                <div id="header">
                  <h1>Experience</h1>
                </div>

                <div id="experience-cards">

                    <Card>
                        <Card.Body>
                            <Card.Title >Technical Program Management Intern @ Tesla </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> Palo Alto, California
                            <br/>
                            May 2023-August 2023</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li> Worked with the Engineering Fleet Team under Vehicle Software.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title >Undergraduate Researcher @ MIT Sports Lab </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> Cambridge, Massachusetts
                            <br/>
                            February 2023-May 2023</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li> Expand the library of football events, namely determining passes or shots, detected by an algorithm from 2D and 3D tracking data from the World Cup through the use of Python, Pandas, and machine learning techniques. </li>
                                    <li> Research sponsored by FIFA.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title >Teaching Assistant @ MIT Sloan School of Management </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> Cambridge, Massachusetts
                            <br/>
                            January 2023-May 2023</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li> Lead weekly office hours, advise final projects, and formulate and grade exams and problem sets for over 100 students. </li>
                                    <li> TA for Optimization in Business Methods (15.053) in collaboration with 9 other TAs and 2 Professors.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Grader for Linear Algebra 18.06 & Mathematics for Computer Science 6.042 @ MIT </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> Cambridge, Massachusetts
                            <br/>
                            September 2022-December 2022</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Graded weekly problem sets for 600+ students across 2 classes.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title >Software Engineering Intern @ Google </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> Mountain View, California
                            <br/>
                            May 2022-August 2022</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li> Streamlined testing infrastructure to save 100 Google Pixel devices daily and implemented scalable logic for other software.</li>
                                    <li> Optimized existing testing pipeline for Android software updates by reducing bottleneck and testing only revised code while surfacing tests results from previous runs for unchanged segments. </li>
                                    <li> Worked with the Android Engineering Productivity Team.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Undergraduate Researcher @ MIT Mathematics Department </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> Cambridge, Massachusetts
                            <br/>
                            February 2022-May 2022</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Created an interactive webpage to visualize class dependencies to organize department website (math.mit.edu) and assist students in choosing classes via roadmaps.</li>
                                    <li>Scraped data from MIT registrar and wrote scripts to construct a network with hover text of class blurbs and hidden prerequisites to be reused each semester.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Grader for Differential Equations 18.03 @ MIT Mathematics Department </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> Cambridge, Massachusetts
                            <br/>
                            January 2022-May 2022</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Graded weekly problem sets for 350+ students.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Product Management Intern @ BitGo</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> Palo Alto, California
                            <br/>
                            June 2021-August 2021</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Constructed data-driven dashboards in Domo that identify and minimize shortcomings in BitGo's onboarding process.</li>
                                    <li>Led and motivated engineers and cross-functional stakeholders in the legal, compliance, product, and executive teams in building analytical solutions.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Undergraduate Researcher @ MIT Sloan School of Management</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                            September 2020-January 2021</Card.Subtitle> Cambridge, Massachusetts (Remote)
                            <Card.Text>
                                <ul>
                                    <li> Conducted cybersecurity through the Undergraduate Research Opportunities Program.</li>
                                    <li>Expanded evaluation offered by the Factor Analysis of Information Risk model through literary and data analysis.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Software Engineering Intern @ Cepton Technologies</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> San Jose, California
                            <br/>
                            December 2018-August 2019</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Created quality control programs in C# that verify the scan range and laser-firing frequency of lidar sensors.</li>
                                    <li>Designed UI with WPF after planning a preliminary sketch and collaborating with sensor engineers.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Genetics Research Intern @ Stanford University: Howard Chang Lab </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> Stanford, California
                            <br/>
                            May 2019-August 2019</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Invented methods (ATAC-seq) for epigenomic profiling and mapping RNA occupancy on chromatin.</li>
                                    <li>Investigated the effect of the HOTAIR gene on long-noncoding RNAs on breast cancer tumor metastasis into the lungs.</li>
                                    <li>Performed PCR, qPCR, and genotyping gels tests and performed histology on cancerous tumors in the heart and lungs.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                <div id="header">
                  <h1>Coursework</h1>
                </div>
                <div id="experience-cards">

                    <Card>
                        <Card.Body>
                            <Card.Title>Fall 2023</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>6.7201 [6.215]: Optimization Methods </li>
                                    <li>11.111: Leadership in Negotiation: Advanced Applications</li>
                                    <li>18.404: Theory of Computation</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Spring 2023</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>6.3000 [6.003]: Signal Processing</li>
                                    <li>9.00: Introduction to Psychology</li>
                                    <li>11.123: Big Cities and Mega Urban Landscapes</li>
                                    <li>18.204: Seminar in Discrete Mathematics</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>IAP 2023</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>15.2671: Negotiation Analysis</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Fall 2022</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>5.111: Principles of Chemical Science</li>
                                    <li>6.1220 [6.046]: Design and Analysis of Algorithms</li>
                                    <li>6.4590 [6.805]: Foundations of Internet Policy</li>
                                    <li>11.011: The Art and Science of Negotiation</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Spring 2022</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>15.053: Optimization for Business Methods</li>
                                    <li>15.075: Statistical Thinking and Data Analysis</li>
                                    <li>18.065: Matrix Methods in Data Analysis, Signal Processing, and Machine Learning</li>
                                    <li>18.100P: Real Analysis</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Fall 2021</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>6.036: Introduction to Machine Learning</li>
                                    <li>18.03: Differential Equations</li>
                                    <li>18.06: Linear Algebra</li>
                                    <li>18.600: Probability and Random Variables</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Spring 2021</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>2.00B: Toy Product Design</li>
                                    <li>6.006: Introduction to Algorithms</li>
                                    <li>6.009: Fundamentals of Programming</li>
                                    <li>18.S191: Special Subject in Mathematics - Introduction to Computational Thinking in Julia</li>
                                    <li>21M.710: Script Analysis</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>IAP 2021</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>6.S191: Introduction to Deep Learning</li>
                                    <li>15.S50: Poker Theory and Analytics</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Fall 2020</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>6.042: Mathematics for Computer Science </li>
                                    <li>8.02: Physics II</li>
                                    <li>14.009: Economics and Society's Toughest Problems</li>
                                    <li>18.022: Multivariable Calculus</li>
                                    <li>24.00: Problems of Philosophy</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Experience; 