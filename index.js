// code your solution here
function superbowlWin(record) {
const winObjects = record.find(obj => obj.result === "W");
if (winObjects) {return winObjects.year;} 
else {return undefined;}}