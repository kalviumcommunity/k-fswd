# Lab Exercise: Validating Input with Joi

## Objectives 🎯
- Understand how to use Joi for input validation in a Node.js application.
- Learn to create a function that returns `true` or `false` based on input validity.

## Prerequisites 📚
- Basic knowledge of JavaScript and Node.js.

## Steps 🛠️

1. **Install Joi**: Use `npm` or `yarn` to install the `joi` package.

2. **Create a Validation Schema**: Define a Joi schema that represents the rules for your input.

3. **Develop the Validation Function**: Write a function that uses the Joi schema to validate the input:

	```json
	{
		"name": "<your name>",
		"squad": "<your squad>",
		"dob": "<your dob>",
		"github": "<your github>"
	}
	```

4. **Handle Validation Results**: Modify the function to return `true` if the input is valid, and `false` otherwise.

5. **Test Your Function**: Create several test inputs to ensure the function accurately validates data.

## Outcome ✅
- A reusable function that leverages Joi for efficient input validation.
