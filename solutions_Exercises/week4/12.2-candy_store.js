const candyStore = {
  candies: [
  {
  name: "mint gum",
  id: "as12f",
  price: 2,
  amount: 2
  },
  {
  name: "twix",
  id: "5hd7y",
  price: 5,
  amount: 4
  },
  ],
  cashRegister: 200
  }
//!1111111111111111111111111111---------------------

  function getCandy(candyStore, id){
    const candeId1 =candyStore.candies.find(dd =>dd.id===id);    
    return candeId1
  }
  console.log(getCandy(candyStore,"5hd7y"));
  
  //!2222222222222222222222222-------------------------
  
  function getPrice(candyStore, id){
    const candeId =candyStore.candies.find(dd =>dd.id===id); 
    return candeId.price
    
  }
  console.log(getPrice(candyStore,"5hd7y"));
  
  //!3333333333333333333333333-------------------------
  
  function addCandy(candyStore, id, name, price){ 
    const count = candyStore.candies.push( {"name": name, "id": id, "price": price, "amount": 1});
    }
    addCandy(candyStore,"23gh4e","sambalulu",8)
    console.log(candyStore);
    

    //!444444444444444444444444-------------------------
    
    function buy(candyStore, id){
        // const candeId =candyStore.candies.find(dd =>dd.id===id);
        const candeId =candyStore.candies.find(dd =>{
         return (dd.id===id)&&dd.id
           
        });
        candeId.amount-=1;
        candyStore.cashRegister-=candeId.price;
    }

    buy(candyStore,"5hd7y")
    console.log(candyStore);