const users = [
  {
  id: 167464,
  firstName: "Jimmy",
  lastName: "Arnold",
  email: "jimmya@gmail.com",
  },
  {
  id: 578447,
  firstName: "Martha",
  lastName: "Goldman",
  email: "gold@hotmail.com",
  },
  {
  id: 864578,
  firstName: "Tim",
  lastName: "Burton",
  email: "timmy.hotmail.com",
  },
  ];


  const orderList = document.createElement('OL');
  document.body.appendChild(orderList);
  //!222222222222222222222222222
  orderList.style.listStyleType = "none";

  users.forEach(personObj => {
    const listIteam = document.createElement('LI');
    orderList.appendChild(listIteam);
    //!333333333333333333333333333333333333333
    listIteam.setAttribute('data-id', personObj.id);
    
    // listIteam.innerText=(personObj.firstName +" " +personObj.lastName);
    listIteam.innerText=`${personObj.firstName} ${personObj.lastName}`;
  });