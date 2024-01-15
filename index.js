// Helper Function to calculate average grade
function averageGrade(grades) {
  let sum = grades.reduce((a, b) => a + b, 0);
  return sum / grades.length;
}

/**
 *
 * data = [
 *  {
 *    name: 'John Doe',
 *    age: 25,
 *    grades: [90, 80, 70, 60, 50]
 *  }
 * ]
 */

function transformData(data) {
  // 1. add a property "average" to each student
  // 1. filter out students with average grade < 70
  // 2. sort students by average grade (descending)
  // 3. add a property "passed" to each student
  return data
}

module.exports = transformData;
