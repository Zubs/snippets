const userDOB = document.querySelector('#dob') as HTMLInputElement;

const days =  userDOB.value.split("-");
const calculateDays = () => {
    console.log(userDOB);
};

// function calculateDays(birthday) { // birthday is a date
//     var ageDifMs = Date.now() - birthday.getTime();
//     var ageDate = new Date(ageDifMs); // miliseconds from epoch
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }