class Customer{
    constructor(name){
        this.name = name
        this.coffe=[]
    }

    addCoffe(coffe){
        this.coffe.push(coffe)

    }

    reciept(){
        console.log(this.name)
        this.coffe.forEach(
            (item) =>{
                console.log(item.coffeName, item.addOnes,item.pricing[item.coffeName][item.addOnes])
            }
        )
    }


}

class Coffe{
    constructor(){
        this.pricing = {
            Espresso : {
                Milk : 60,
                Cream : 75,
                Latte : 100},
            Cappuccino :{ 
                Milk: 80,
                Cream: 90,
                Latte: 125},
            Latte :{
                Milk: 100,
                Cream: 125,
                Latte: 150}
        }
        this.typeOfCoffe = ['Espresso', 'Cappuccino', 'Latte'];
        this.typeOfAddOnes=['Milk', 'Cream', 'Latte']
    }
    menu(){
        this.typeOfCoffe.forEach(
            (coffe) => {
                this.typeOfAddOnes.forEach(
                    (addOn) => {
                        console.log(coffe, addOn)
                    }
                )
            }
        )
    }
    getCoffeDetails(){
        console.log("type of coffes")
        this.typeOfCoffe.forEach((item)=>{ console.log(item)})
        
        console.log("type of Addones")
        this.typeOfAddOnes.forEach((item)=>{ console.log(item)})
    }

    setCoffeType(coffeNo) {
        this.coffeName = this.typeOfCoffe[coffeNo-1]
    }
    setAddOnes(addOnesNo){
        this.addOnes = (this.typeOfAddOnes[addOnesNo-1])

    }

    getCoffeType(){
        console.log(this.coffeName)
    }
    getAddOnes(){
        console.log(this.addOnes)
    }

    show(){
        console.log(this.coffeName, this.addOnes)
    }
}

let customer1 = new Customer("Rahul")
let coffe1 = new Coffe()
coffe1.setCoffeType(2)
coffe1.setAddOnes(1)
let coffe2 = new Coffe()
coffe2.setCoffeType(3)
coffe2.setAddOnes(2)
customer1.addCoffe(coffe2)
customer1.addCoffe(coffe1)
//menu
coffe1.menu()
/*
Espresso Milk
Espresso Cream
Espresso Latte
Cappuccino Milk
Cappuccino Cream
Cappuccino Latte
Latte Milk
Latte Cream
Latte Latte
*/
//Reciept
customer1.reciept()
/*
Rahul
Latte Cream 125
Cappuccino Milk 80
*/



