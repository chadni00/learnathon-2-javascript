console.log('HI');


var a =10;
console.log(a);

let b =15;
console.log(b);

const x=5;
console.log(x);

if(a==10){
    let y = 78;
}


//Arrow function


/*function square (number){
    return number* number;
};

console.log(square(6));*/

//arrow  function e convert

/*const square = (number)=>{   
    return number* number;

};
console.log(square(6));*/

//shrtcut
const square = (number)=> number* number;
console.log(square(6));


//object
const person ={
    name: 'chadni',
    profession: 'student'

};

const clone ={...person,
location :'Dhaka'
};
console.log(clone);

 const first = [1,2,3];
 const second =[5,6,7];

 const result =[...first, ...second];
 console.log(result);


 //object structure
/*const person1 ={
    name: 'chadni',
    profession: 'student',
    

};
const clone1 ={...person1,
    location :'Dhaka'
    };


// const name = clone1.name;
// const profession = clone1.profession;
// const location1 = clone1.location1;
//const {name , profession,location1 }=clone1;

const {location: lt, name: nm, profession:pf }=clone1;
//const {location: lt }=clone1;

console.log(clone1);*/

const abc=[1,2,3];
abc.map(value => 
    {
        return console.log('<li>'+value+'</li>');

    });


    const person2 ={
        name: 'jahani',
        profession: 'student',
        walk(){
            console.log('walking',this);

        }
    
    }
    person2.walk();

  

    //console.log(this);   //global object

    //  constructor(name1, person2);{
    //     this.name = name1;               //this empty object e value assign 
    //     this.person1 =person2;
    //  }


    // const walk =() => {
    //     console.log(this);
    // }
