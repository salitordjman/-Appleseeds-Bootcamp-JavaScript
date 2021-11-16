const school = {
  teachers: [
  {
  id: 1,
  name: "Pinchas",
  subjects: ["chemistry", "biology", "physics"],
  students: [],
  capacityLeft: 3,
  },
  {
  id: 2,
  name: "Williams",
  subjects: ["history", "ethics"],
  students: [],
  capacityLeft: 2,
  },
  ],
  students: [
  {
  id: 10,
  name: "Jennifer",
  age: 20,
  },
  {
  id: 11,
  name: "Howard",
  age: 23,
  },
  {
  id: 12,
  name: "Old-Timmy",
  age: 86,
  },
  {
  id:13,
  name: "Houston",
  age: 21,
  },
  ],
  };

//!1111111111111111111-------------------------
const findPerson=(teSt,id)=>{
  // let neww="";
  // for(let ind in school){
  //   if(ind===teSt){neww=teSt;}}
  // const howIsThat = school[neww].find(check =>check.id===id); 

  const howIsThat = school[teSt].find(check =>check.id===id); 

  return howIsThat
}
console.log(findPerson('teachers',2));

//!222222222222222222222-------------------------

const assignStudent=(studId,subject)=>{ 
  const howIsThat = school.teachers.filter(check =>check.subjects.includes(subject));
  
  for(let inn in howIsThat){
    // console.log(howIsThat);    
    if(howIsThat[inn].capacityLeft>0){
      howIsThat[inn].students.push(school.students.find(check =>check.id===studId));
    howIsThat[inn].capacityLeft--;
    break;
  }else if(inn==(howIsThat.length-1)){
    console.log(`Sorry, no available teachers left`);
  }
}

}
assignStudent(10,"biology")
assignStudent(11,"biology")
assignStudent(12,"biology")
assignStudent(13,"biology")

console.log(school);

//!33333333333333333333333-------------------------

const assignTeachersSubject=(teachersId,newSubject)=>{
  const newSubTeac = school.teachers.find(check =>check.id===teachersId);
  const newSub =newSubTeac.subjects.find(check =>check===newSubject);
  if(newSub){
    console.log("The subject already exists with this teacher");
  }else{
    newSubTeac.subjects.push(newSubject);
  }
  
}
assignTeachersSubject(2,"programing")
console.log(school);


//!444444444444444444444444-------------------------

const newTeachersName=(teachersId,newName)=>{
  const newNameTeac = school.teachers.find(check =>check.id===teachersId);
  newNameTeac.name=newName;
}
newTeachersName(2,"Sali")
console.log(school);