const TEST_PACKAGE = require('test_package');

// Replace the TEST_PACKAGE with an appropriate package
function fetchData(url) {
    return TEST_PACKAGE.get(url)
        .catch(error => console.error('Error fetching data:', error));
}

module.exports = fetchData;
