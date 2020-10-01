// class Csd {
//     constructor(exten, position, sched){
//         this.exten = exten;
//         this.position = position;
//         this.sched = sched;
//     }

//     addAgent(){
//         console.log('this function is adding agent');
//     }
//     removeAgent(){
//         console.log('this function is removing agent');
//     }
// }

// class Inbound extends Csd {
    
//      constructor(exten, position, sched,summary, details){
//         super(exten, position, sched);
//         this.summary = summary;
//         this.details = details
//      }
//     inboundCallSummary(){
//         console.log('return all inbound summary')
//     }
//     getAllThis(){
//         console.log(this)
//     }
// }

// var inbound = new Inbound(6336,'IT','AM','sumamrary', 'details')
var Person = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;

    

    
}

Person.prototype.calcAge = function(){
    console.log(this.name)
}

var p = new Person('Rogmer', 36, 'IT')


p.calcAge()
