# Lab Exercise: Write Mongoose Schema for the Given JSON Object

## 🎯 Objectives
This exercise is designed to help you understand how to convert a JSON object into a Mongoose schema. You'll be able to map JSON objects to a MongoDB document model effectively.

## 📚 Prerequisites
You should have a basic understanding of JavaScript, JSON, and MongoDB.

## 🚀 Steps
1. **Understand the JSON Object:** Take a close look at the given JSON object and understand its structure and data types.

2. **Initialize Mongoose:** Start by importing Mongoose and initializing it. Mongoose provides a straightforward, schema-based solution to model your application data.

3. **Create a Schema:** Use the `mongoose.Schema` function to create a new schema. The keys of the schema should correspond to the keys in the JSON object.

4. **Define Data Types:** For each key, define the corresponding data type as per the JSON object. Mongoose provides a range of data types like `String`, `Number`, `Date`, `Buffer`, `Boolean`, `Mixed`, `ObjectId`, `Array`, and `Decimal128`.

5. **Compile Model:** Once the schema is defined, compile the model using `mongoose.model(modelName, schema)`. This model is a class with which we construct documents.

## 🏁 Outcome
By the end of this exercise, you will have a Mongoose schema that accurately represents the given JSON object, ready to be used in your MongoDB database operations. 🎉

Remember, practice makes perfect! Keep experimenting with different JSON objects to strengthen your understanding of Mongoose schemas. 🚀
