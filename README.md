# Lab Exercise: Setup Linting in the Project

## 🎯 Objectives
This guide will help you set up a linter in your full stack development project to enforce code quality and consistency. You'll learn how to automate linting to catch errors before they make it into production.

## 📚 Prerequisites
Basic understanding of JavaScript and familiarity with a code editor (VS Code is recommended).

## 🚀 Steps
1. **Install ESLint:** Use npm to install ESLint globally or in your project directory by running `npm install eslint --save-dev`.

2. **Initialize ESLint:** Run the command `eslint --init` in your project directory. This will guide you through setting up a basic configuration file.

3. **Choose a Style Guide:** During initialization, you'll be asked to choose a style guide. Popular choices include Airbnb, Google, and Standard.

4. **Configure ESLint:** Modify the `.eslintrc.js` or `.eslintrc.json` file in your project directory to include the rules that you want ESLint to enforce.

5. **Install Editor Extension:** If you're using VS Code, install the ESLint extension to get real-time linting feedback.

6. **Run ESLint:** Run the command `eslint yourfile.js` to lint a specific file or `eslint .` to lint all files in your project.

## 🎁 Outcome
By the end of this guide, you should have a fully functioning linter set up in your project. This will help you maintain a clean and consistent codebase, making your project easier to read and debug. 🎉
