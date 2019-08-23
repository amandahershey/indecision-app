var nameVar = 'Amanda';
nameVar = 'Mandy';
console.log('nameVar',nameVar);

let nameLet = "Paul";
nameLet = "Pauly";
// cannot redeclare a let variable
//let nameLet = "P-dog";
console.log('nameLet',nameLet);

const nameConst = "June";
console.log("nameConst", nameConst);

// Block scoping

var fullName = 'Amanda Hershey';

if(fullName){
  const firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);
