
const fs = require('fs');

try {
    const data = fs.readFileSync('step_for_submit_assignment.txt');
    console.log(data.toString());
} catch (err) {
    console.error(err);
}
