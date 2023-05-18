# OOP Group Project

### 

the assigenmetns consists of three parts, the actual application, the

## What is SDG13?

SDG13 is the 13th goal of seventeen goals called the Sustainable Development Goals (SDGs). The SDGs were created by the United Nations General Assembly (UNGA) in 2015 as part of a plan for a better future. The SDGs are a set of goals that aim to promote peace and prosperity for people and the planet.

SDG13 is all about taking immediate action to fight climate change and its effects.

SDG 13 has five targets to accomplish by 2030. These targets address a wide range of issues related to climate action. The first three targets focus on specific outcomes: improving the ability to withstand and recover from climate-related disasters, integrating climate change measures into policies and planning, and enhancing knowledge and capacity to tackle climate change. The remaining two targets are aimed at implementing the UN Framework Convention on Climate Change (UNFCCC) and promoting mechanisms to enhance planning and management capabilities. Along with each target, there are indicators that help assess overall progress.

one of the requirements is to Design the program with at least two types of users in mind: Government (Admin) and Public (Normal User)

so we are assuming that regulators and decision makers will be using our app beside the public.

Fighting climate change from its roots is a complex and multifaceted problem that involves dealing with regulators, individuals of various backgrounds, technology, and engineering. As Java developers, we can only focus on two areas: people and technology. This makes it much easier to build an app that tackles the first and third main targets in real life, as the other three are more of a policy issue rather than a problem that can be solved with technology.

Although there can also be some applications that can help with the remaining three targets, such as an app that collects real-time data that can be used by decision makers, obtaining such data can be difficult without access to lots of restricted or paid content. 

Furthermore, it would be more appropriate to build an app targeted towards a specify niche with a specific need and a clear value proposition, rather than trying to convince them to use a more general app that deals with "individuals" without considering their age, background, financial status, or any other differences they might have especially if we chose to build an app around the third target.

These targets can be translated into practical solutions and actions at the individual, community, and organizational levels. For example, an app can be developed to provide information and resources for disaster preparedness, such as emergency evacuation routes, real-time weather updates, and tips for minimizing the impact of climate-related disasters.

An app can also help governments incorporate climate change measures into their policies, such as providing information on sustainable development, energy conservation, and carbon footprint tracking. It can also serve as a platform for sharing success stories and best practices in climate action, as well as for monitoring progress towards achieving SDG13 targets.

Enhancing knowledge and capacity to tackle climate change can be supported through educational apps that provide information on climate change science, mitigation and adaptation strategies, and opportunities for engagement in climate-related initiatives.

On the other hand, the remaining two targets of SDG 13 focus on implementing the UN Framework Convention on Climate Change (UNFCCC) and promoting mechanisms to enhance planning and management capabilities. These targets are more oriented towards institutional-level policies, regulations, and decision-making processes. While important, they may not be as directly applicable to an app-based solution, as they primarily require coordination and collaboration among governments, organizations, and international bodies.

Overall, while the first three targets of SDG 13 are more amenable to app development, the remaining two targets can still benefit from digital tools and platforms to support their implementation and monitoring processes.

### the application technical requirement:

- [ ]  minimum of five key features that help to achieve your chosen goal
1. platform fo collect denation
2. provide people widt directions to safe shelters
3. early nofitcations
4. give the ability to volunteer
- Real-time weather updates and alerts
- Emergency contact information for local authorities and first responders
- GPS location tracking and sharing for finding and rescuing people in need
- Information on nearby shelters, hospitals, and supply centers
- A communication system for connecting with friends and family during and after a disaster
- A feature for reporting missing persons or found items
- Resources for mental health support and trauma recovery
- Step-by-step guides for disaster preparedness and recovery
- Donation and volunteer coordination tools

- [ ]  Design the program with at least two types of users in mind: Government (Admin) and Public (Normal User)
- [ ]  Provide the Government user with the ability to edit, delete, and update information, while ensuring the Public user can only view and share information
- [ ]  Use at least three classes, each with three data fields and methods, to create a program that is scalable and maintainable
- [ ]  Allow users to easily search for specific information using the keyboard
- [ ]  Utilize at least one switch statement and two conditional statements in your code
- [ ]  Incorporate at least one for loop and one do-while loop statement
- [ ]  Include an Array or ArrayList, as needed, to support the program requirements
- [ ]  Use at least one access modifier to distinguish between the Public and Admin users
- [ ]  Organized Source Code

We have a very tight time constraint that will affect our design choices. Although we are free to choose between a GUI or a CLI, GUI is hands down the better choice.

For GUI apps, JavaFX seems like a good option for a Java beginner, but the web is just much better. It's accessible to Android, iOS, and lots of other devices.

Developing an "extremely attractive" app with CLI is tricky, but it's not impossible.

In addition, I believe that creating a CLI initially and then building a GUI later would be the appropriate approach. Even if we ultimately want to create a GUI, creating a CLI is much easier. It will allow us to write the business logic and features and to test and debug them much more easily than if we tried to test a feature every time with the GUI.

This will allow us to create an entire functional app and be more flexible if we don't have enough time to build the GUI.

# How to submit

1. The program must have an executable JAR file.
2. The Code Base
3. Report that has 
a. Cover page
b. Marking rubric 
c. Role and responsibility of each group member 
d. Application description and rational 
e. User Interface (UI) 
f. Lesson learned 
g. Reference
4. Source Code in MS Word or PDF file, please highlight in yellow all relevant criteria stated above.

submission deadline: Week 11 (12 noon, 11th June 2023) 

Expected timeline

Based on the provided information, here's an expected timeline to finish the project before the deadline:

1. Understanding the Requirements and Planning (1 day):
    - Read and analyze the project requirements.
    - Discuss the goals, features, and design choices with your team.
    - Create a plan outlining the tasks, responsibilities, and timeline.
2. Designing the Program and User Interface (2-3 days):
    - Identify the key features that will help achieve the chosen goal.
    - Design the program's structure using classes, data fields, and methods.
    - Design the user interface for both the Government (Admin) and Public (Normal User) users.
    - Determine how information will be edited, deleted, updated, viewed, and shared.
3. Implementing the Command-Line Interface (CLI) (3-4 days):
    - Start by implementing a CLI version of the application.
    - Focus on writing the business logic, features, and testing them.
    - Implement the search functionality using keyboard input.
    - Incorporate switch statements, conditional statements, loops, and data structures (e.g., Array or ArrayList) as required.
    - Ensure the program follows the requirements and can distinguish between user types.
4. Testing and Debugging (1-2 days):
    - Conduct thorough testing of the CLI application.
    - Identify and fix any bugs or issues found during testing.
    - Test the different functionalities and user interactions.
    - Validate that the program is scalable, maintainable, and organized.
5. Developing the Graphical User Interface (GUI) (3-4 days):
    - Begin developing the GUI version of the application.
    - Implement the designed user interface for both user types.
    - Ensure the GUI is attractive, user-friendly, and aligned with the requirements.
    - Integrate the existing business logic and features into the GUI.
    - Test the GUI extensively and address any bugs or usability issues.
6. Finalizing and Documenting (1-2 days):
    - Create an executable JAR file for the program.
    - Review the codebase, ensuring it meets all requirements.
    - Prepare the report, including the cover page, marking rubric, role and responsibility of each group member, application description, user interface details, lessons learned, and references.
    - Convert the source code to a Word or PDF document, highlighting the relevant criteria.
7. Review and Submission (1 day):
    - Allocate time for reviewing and proofreading the report and source code.
    - Make any necessary revisions and improvements.
    - Ensure all the submission requirements are met, including the JAR file, report, and source code.
    - Submit the project before the deadline (12 noon, 11th June 2023).

Please note that the timeline provided is an estimate and can vary based on factors such as team size, individual experience, workload distribution, and unforeseen challenges. It's essential to allocate extra time for unexpected obstacles that may arise during the development process.
