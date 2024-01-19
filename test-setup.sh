#!/bin/bash
set -e 1

# Install vitest and testing util
cd /home/damner/code
yarn add jest supertest --dev
mkdir -p /home/damner/code/.labtests

# Move test file
mv $TEST_FILE_NAME /home/damner/code/.labtests/nodecheck.test.js

# process.js file
cat > /home/damner/code/.labtests/process.js << EOF
import fs from 'node:fs'
const payload = JSON.parse(fs.readFileSync('./payload.json', 'utf8'))
const answers = payload.testResults[0].assertionResults.map(test => test.status === 'passed')

fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(answers))
EOF

# package.json
cat > /home/damner/code/.labtests/package.json << EOF
{
    "type": "module"
}
EOF

# run test
(yarn jest --json --silent --outputFile=/home/damner/code/.labtests/payload.json || true)  | tee /home/damner/code/.labtests/evaluationscript.log

# Write results to UNIT_TEST_OUTPUT_FILE to communicate to frontend
cd /home/damner/code/.labtests
node process.js

# Cleanup: Remove .labtests directory
cd /home/damner/code
rm -rf /home/damner/code/.labtests
