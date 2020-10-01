var name = 'John';
var age = 35;
var sex = 'Male'
var Person = function(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    
    return {
        greet: function(){
            console.log(this)
        }
    }

}




var rogmer = new Person('Rogmer', 36, 'Male');

rogmer.greet()


