import {Component, OnInit} from '@angular/core';
import {CourseModel} from "../course.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList: CourseModel[] = [
    {
      title: "Web Application Programming",
      description: "This course provides a systematic introduction to programming interactive and dynamic web applications. The course is intended for individuals with little or no prior web application programming experience. This offering will use Java servlets and JSP for server side processing. The course will introduce HTML and CSS. JavaScript is a focus of the course, and is covered as a functional programming language including jQuery, Ajax, and JavaScript namespaces and modules. It is a prerequisite for the CS545 Web Application Architecture. It does not cover AngularJS or NodeJS, but the JavaScript covered here will prepare you to learn those technologies. (4 units)",
      code: "CS472",
      prerequisite: ""
    }, {
      title: "Modern Web Applications",
      description: "In this course you will learn the Reactive Programming Architecture of SPA (Single Page Web Applications) along with all the necessary skills to build a full Modern Web Application. Technologies include: NodeJS, ExpressJS, TypeScript, AngularJS2, Firebase and NoSQL databases (MongoDB)",
      code: "CS572",
      prerequisite: "CS472"
    }, {
      title: "Software Architecture",
      description: "In this course we will look at the techniques, principles and patterns of how to design flexible, scalable, testable and resilient software systems using microservices. We will study how we can split up large applications into smaller microservices that are easier to build and other advantages compared to monolithic enterprise applications. A distributed microservice architecture also gives many challenges. We will study these challenges and how to address them. Topics of this course are architectural styles, integration techniques and patterns, domain driven design, event driven architecture and reactive programming. (4 credits",
      code: "CS590",
      prerequisite: ""
    },
    {
      title: "Enterprise Architecture",
      description: "This course focuses on teaching the principles and practices used when developing larger scale enterprise applications. We will examine the different architectural layers that are frequently used and different technologies associated with these layers, including Object Relational Mapping (ORM), Dependency Injection (DI), Aspect Oriented Programming (AOP), and integration with other applications through Web Services (RESTfull and SOAP), Messaging and remote method invocation. Must have a working knowledge of relational databases and SQL. If you do not have a strong course or good working knowledge of SQL you should sign up for CS422 DBMS before signing up for EA.",
      code: "CS544",
      prerequisite: "CS472"
    },
    {
      title: "Software Engineering",
      description: "Software Engineering is a course that introduces the student to best practices in software development through a software development methodology. Students have already had some experience in previous courses with the Object Oriented paradigm and have used some of the basic UML diagrams for purposes of modeling relationships between software objects. In Software Engineering, the student will develop skills in putting these tools together to produce robust, easily maintainable software",
      code: "CS425",
      prerequisite: ""
    },
    {
      title: "Advanced Programming Languages",
      description: "This course considers advanced topics in programming language design with emphasis on formal methods and abstraction mechanisms. Topics include data and control abstraction, formal specification of syntax and semantics, proofs of program correctness, non deterministic programming, advanced control structures, and study of specific languages.",
      code: "CS505",
      prerequisite: "CS401"
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
