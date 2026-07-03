# Password Strength Checker

A responsive web-based Password Strength Checker built using HTML, CSS, and JavaScript that analyzes password strength in real time based on common security best practices.

**Live Demo:**  
https://nikunj-cyber.github.io/password-strength-checker/

---

## Overview

This project was created as one of my first hands-on cybersecurity projects while learning web development fundamentals and secure authentication concepts.

The goal was to build a simple but practical application that helps users understand whether their passwords meet commonly recommended security standards. As users type, the application evaluates password complexity and provides immediate feedback based on multiple security criteria.

Although the application itself is relatively simple, building and deploying it became a valuable learning experience that introduced me to modern development tools, version control, and deployment workflows.


password-strength-checker/
│
├── images/
│   ├── home.png <img width="679" height="610" alt="password checker ss" src="https://github.com/user-attachments/assets/1b7190fe-d2af-413a-8129-8f8d2bda40f9" />

│   ├── weak-password.png <img width="674" height="577" alt="password checker ss weak password" src="https://github.com/user-attachments/assets/3a087b3c-c388-432c-9a9f-5cc5f62cd653" />

│   ├── medium-password.png <img width="673" height="600" alt="password checker fair" src="https://github.com/user-attachments/assets/11440df2-85ea-4726-b894-a07c26057107" />

│   ├── strong-password.png <img width="674" height="608" alt="passsword checker strong" src="https://github.com/user-attachments/assets/41ee6793-f0e4-4b3e-afd6-21519e3454da" />

│
├── index.html
├── styles.css
├── script.js
├── passwordStrength.js
├── README.md
---

## Features

- Real-time password strength evaluation
- Password visibility toggle
- Password copy functionality
- Responsive user interface
- Instant strength feedback
- Modern web-based design

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Git
- GitHub
- GitHub Pages
- Visual Studio Code

---

## Password Evaluation Criteria

The application checks whether the password contains:

- Minimum recommended length
- Uppercase letters
- Lowercase letters
- Numbers
- Special characters

Based on these checks, the application categorizes the password strength and provides visual feedback to the user.

---

# Development Journey

This project represents much more than just writing HTML, CSS, and JavaScript.

It was my first experience building, debugging, version-controlling, and deploying a complete web application.

During development I encountered several challenges that required learning completely new tools and workflows.

### 1. Setting up the Development Environment

Initially, I was unable to execute the project because Node.js was not recognized by the terminal. This required learning how environment variables work, verifying software installations, and configuring the development environment correctly.

After resolving the installation issue, I learned how to verify software installations using the command line before continuing development.

---

### 2. Understanding the Difference Between JavaScript and Web Applications

At first I attempted to execute JavaScript directly through Node.js, expecting the graphical application to appear.

This helped me understand an important concept:

- Node.js executes JavaScript programs.
- HTML renders the user interface.
- CSS controls the styling.
- JavaScript provides interactivity inside the browser.

Once I understood this relationship, I began testing the application using Live Server instead of Node.js.

---

### 3. Learning Live Server

Running the application through Live Server introduced me to the workflow used by many front-end developers.

Instead of executing scripts manually, I learned how local development servers automatically refresh changes while developing web applications.

---

### 4. Learning Git and Version Control

This project also introduced me to Git.

I learned how to:

- Initialize a Git repository
- Stage files
- Create commits
- Configure Git user identity
- Connect a local repository to GitHub
- Work with remote repositories

These were completely new concepts, but understanding them made me appreciate how professional software projects are managed.

---

### 5. Deploying with GitHub Pages

One of the biggest challenges came during deployment.

Initially, GitHub Pages displayed only my README instead of the actual application.

After investigating the issue, I discovered that although the repository existed, the project files themselves had never been pushed from my local machine.

I then:

- Initialized Git locally
- Connected the project to the existing GitHub repository
- Pulled the remote repository
- Merged both histories safely
- Uploaded the website files
- Triggered a new GitHub Pages deployment

Once deployment completed successfully, the application became publicly accessible online.

---

## What I Learned

This project helped me develop practical experience with:

- Building responsive web applications
- Debugging development environments
- Using browser-based testing tools
- Understanding client-side JavaScript
- Git fundamentals
- GitHub workflows
- Deploying applications using GitHub Pages
- Troubleshooting deployment issues
- Reading and interpreting terminal errors

More importantly, it taught me that solving technical problems is often a process of researching, testing, and learning rather than finding an immediate solution.

---

## Future Improvements

Planned enhancements include:

- Password entropy calculation
- Password breach detection using the Have I Been Pwned API
- Estimated password crack time
- Accessibility improvements
- Dark mode
- Improved password recommendations
- Additional security indicators

---

## Project Structure

```
password-strength-checker/
│
├── index.html
├── styles.css
├── script.js
├── passwordStrength.js
├── tests/
│   └── passwordStrength.test.js
├── package.json
└── README.md

---

## About This Project

This project marks the beginning of my cybersecurity portfolio.

As I continue learning, I plan to build additional projects covering topics such as password generation, file integrity monitoring, network utilities, log analysis, and other practical security tools to strengthen both my programming skills and cybersecurity knowledge.

---

## Author

**Nikunj**

Aspiring Cybersecurity Professional

Building practical cybersecurity projects while working toward a career in Blue Team / SOC Operations.
