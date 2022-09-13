import React from "react";
import Header from "../tools/bar";
import Footer from "../tools/footer";
import {
    AccordionDetails,
    AccordionSummary,
    Accordion,
    Paper,
    Typography,
    Grid
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const classList = [
    {
        className: "Graphical User Interface Programming",
        classNum: "CSC 468",
        classDesc: "Introduction to the theory and practice of programming graphical user interfaces. Topics will include GUI design and the fundamentals of GUI programming for desktop, Web, and mobile device applications.",
    },{
        className: "Operating Systems and Virtual Machines",
        classNum: "CSC 458",
        classDesc: "A detailed study of the internal structure of operating systems and virtual machines. The design, architecture, functions and structures associated with low level software are discussed in the context of embedded operating systems and virtual machines in respect to process and processor management, memory management, GPU, and auxiliary storage management. Topics include: central processing versus distributed computing, memory management, processor control, and cybersecurity at the operating systems level.",
    },{
        className: "Computer Organization and Architecture",
        classNum: "CENG 325",
        classDesc: "A course in microprocessor and graphics processor organization with emphasis on the hierarchical structure of digital systems. Covers such topics as: components of computer systems, peripherals and their configuration, design of basic digital circuits, the microprogram level, the conventional machine level, the operating system level, assembly language, addressing modes, interpreters/translators, computer arithmetic.",
    },{
        className: "Machine Learning",
        classNum: "CSC 448",
        classDesc: "A systematic study of the theory and algorithms that constitute machine learning. It covers learning based on examples including genetic algorithms, case-based reasoning, decision trees, and Bayesian methods.",
    }, {
        className: "Artificial Intelligence",
        classNum: "CSC 447",
        classDesc: "Concepts in Artificial intelligence: programming in languages such as Prolog or LISP; knowledge representation; search algorithms.",
    }, {
        className: "Intro to Theory of Computation",
        classNum: "CSC 445",
        classDesc: "Introduction to a series of models for computation and their relationship to formal languages that are useful in the definition of programming languages along with a look at the theoretical limits of computers. Topics include finite and pushdown automata, Turing machines, grammars, decidability and computational complexity.",
    }, {
        className: "Networking and Data Communications",
        classNum: "CSC 441",
        classDesc: "This course is the study of the principles and design of computer networks, their protocols, and application programs. The course has equal emphasis on practical experience as well as theoretical foundations. The course focuses on understanding the fundamental concepts in design and implementation of computer communication networks, particularly on analysis and development of the software architecture of the protocol stack, and network programming. The topics include layered network architectures, network programming interfaces (e.g., sockets), TCP/IP networking, packet switching, network routing, rate and congestion control, Quality-of-Service, wireless communications, and fundamentals of network security.",
    }, {
        className: "Programming Languages",
        classNum: "CSC 461",
        classDesc: "This course consists of two parts. The first part introduces how programming languages are designed, including an introduction to the concepts of parsing and compiling. Issues related to implementation such as type checking, binding, and memory management are discussed. Secondly, the course will survey the spectrum of programming languages paradigms, including traditional imperative, object oriented, functional, and logic languages.",
    }, {
        className: "Mobile Comuting and Development",
        classNum: "CSC 476",
        classDesc: "This course introduces students to the major components of mobile application development. Topics will include an overview of the market, mobile development environments, designing the user interface/user experience, lifecycle considerations, MVC patterns, power, storage, and performance considerations, persistent data, location, and web services. Students will design and create applications on at least one of the dominant mobile platforms.",
    }, {
        className: "Database Management",
        classNum: "CSC 484",
        classDesc: "The study of formalized database design. This course will focus on relational model design and the use of SQL. Students will use a modern relational database to implement designs and learn the basics of data management.",
    }, {
        className: "Software Engineering and Design",
        classNum: "CSC 340",
        classDesc: "An introduction to the software engineering process including a survey of development methodologies (waterfall, iterative, incremental, agile). The class includes modules on fundamental software engineering tools and skills in the areas of testing, test plan development, performance analysis and tuning, and requirements analysis. Teams and teaming are a central theme supported by extensive use of project management systems for communication, source code/revision control, and project estimation.",
    }, {
        className: "Analysis of Algorithms",
        classNum: "CSC 372",
        classDesc: "Design and analysis of algorithms for numeric and nonnumeric problems, general problem-solving approaches, theory of computation. Topics will be selected from searching, sorting, graph algorithms, numerical algorithms, geometric algorithms, cryptography, and parallel algorithms.",
    }, {
        className: "Data Structures and Algorithms",
        classNum: "CSC 315",
        classDesc: "A systematic study of data structures and accompanying algorithms with an emphasis on implementation and algorithmic complexity. Program development is done on Linux systems using standard software engineering tools. Topics may include: principles of object-oriented programming, such as inheritance, abstraction, polymorphism, encapsulation, and late binding; binary and m-ary trees, heaps, maps, sets, disjoint sets, and graphs; sorting techniques, hashing, shortest path and minimal spanning tree algorithms, string matching algorithms and an introduction to dynamic programming.",
    }, {
        className: "Finite Structures",
        classNum: "CSC 251",
        classDesc: "Selected topics from Boolean algebra, set theory, congruencies, equivalence relations, complexity, graph theory, combinatorics, induction, difference equations, and logic.",
    }, {
        className: "Proggramming Techniques",
        classNum: "CSC 215",
        classDesc: "Topics include binary files, bit manipulation, memory management, recursion, linked lists, stacks, queues and object oriented programming. Problem solving, algorithm design, standards of program style, debugging and testing are emphasized in this course.",
    }, {
        className: "RISC Assembly",
        classNum: "CENG 320",
        classDesc: "Assembly language programming using a modern RISC processor. The course includes structured programming techniques and abstract data types. The theory component covers integral, fixed point, and floating point mathematics, and introduces the CPU/FPU instructions for dealing with those data types. Other topics include interfacing assembly language code with C/C++ code, I/O device programming, interrupts and concurrency issues, as well as ethical considerations.",
    },
]

export default function Classes() {
    return (
        <>
            <Header />
            <Paper elevation={3} sx={{
                m: 1, display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                bgcolor: '#e8e8e8',
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "25px",
            }}>
                
                <Grid container spacing={2} sx={{m:1}} justifyContent="center">
                {classList.map((clas) => {
                    return (
                        <Grid item xs={5}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{clas.classNum} {clas.className}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{clas.classDesc}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    )
                })}
                </Grid>
            </Paper>
            <Footer />
        </>
    )
}