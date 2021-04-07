let activities = [
    ['sleep', 8],
    ['code', 8],
    ['eat', 2],
    ['Play', 1],
    ['breaks', 3]
];

//insert an element in the second index
activities.splice(1, 0, ['Programming', 2]); 
//add a new element at the end of the multidimensional array
activities.push(['study', 2]); 

//percentage of hours spend in each activity

activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + '%';
});

//returns the 2nd element of the first inner array in the activities array
console.log(activities[0][1]) ;

//iterate a multi-dimensional array using a nested loop
//get length of the outer array
for (let i = 0; i < activities.length; i++) {
//get the size of the inner array
var innerArrayLength = activities[i].length;
//loop the inner array
for (let j = 0; j < innerArrayLength; j++) {
    console.log('['+ i + ',' + j + '] = ' + activities[i][j]);}
}
//loop using forEach method
activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);
    });
});

//prints all the table activities
console.table(activities); 