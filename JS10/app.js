class Human {

  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.height = options.height
  }

  likesToSleep() {
    console.log('I like to sleep')
  }

  ridingABicycle() {
    console.log('I like riding')
  }

  sticksToProperNutrition() {
    console.log('I stick to the right diet')
}
}

  const human = new Human ({
    name: 'Alex',
    age: 22,
    height: '1.79 m'
  })
  


  class Employer extends Human{
  
    constructor(options){
      super(options)
      this.workExperience = options.workExperience
      this.communicative = options.communicative
      this.likesCookies = options.likesCookies
    }

    isLate() {
    }

    knowsALot() {
      console.log('I am clever person')
    }

    knowsEnglish() {

    }
  } 

    let employer = new Employer({
      name: 'Mark',
      age: 38,
      height: '1.98 m',
      workExperience: '5 years',
      communicative: 'yes',
      likesCookies: 'yes'
    })
  
  
  
  class Engineer extends Employer{
    constructor(options){
      super(options)
      this.knowsJava = options.knowsJava
      this.knowsJS = options.knowsJS
      this.knowsPHP = options.knowsPHP
    }

    slowly() {
    }

    driveCar() {
    }

    likesAnimal() {

    }
  } 

  let engineer = new Engineer({
    name: 'Tony',
    age: 47,
    height: '1.45 m',
    workExperience: '20 years',
    communicative: 'yes',
    likesCookies: 'no',
    knowsJS: 'yes',
    knowsJava: 'yes',
    knowsPHP: 'no',
    
  })
 
   
  class Tester extends Employer{
    constructor(options){
      super(options)
      this.likesToTestSmth = options.likesToTestSmth
      this.hasAGoodComputer = options.hasAGoodComputer
      this.lovesToRead = options.lovesToRead
    }

    typingCode() {
      
    }

    sleeping() {
    }

    fixesTheComputer() {

    }
  } 
  
  let tester = new Tester({
    name: 'John',
    age: 41,
    height: '1.95 m',
    workExperience: '25 years',
    communicative: 'yes',
    likesCookies: 'no',
    knowsJS: 'no',
    knowsJava: 'no',
    knowsPHP: 'yes',
    likesToTestSmth: 'yes',
    hasAGoodComputer: 'yes',
    lovesToRead: 'no',
    
  })