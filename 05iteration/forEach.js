const coding = ["js", "c++", "c", "rust", "ruby on rails"]
const webD = ['MongoDB','Express' ,'React', 'Node']

//forEach with named function
webD.forEach(function name(ele){
    console.log(ele);
    
})
//forEach with arrow function
coding.forEach((value)=>{
    console.log(value);
});
//passing function declared outside
function printMe(val){
    console.log(val + ", ");
    
}

coding.forEach(printMe)

//forEach syntax
coding.forEach((item,index, coding)=>{
    console.log(item, index, coding);
});

//forEach with arrayOfObjects

const profile = [
    {userName: 'TechFosters',
     profileCode: 101 },

    {userName: 'MechFosters',
        profileCode: 102,},

    {userName: 'LuckFosters',
        profileCode: 103},

    {userName: 'AutoFosters',
        profileCode: 104}
]

profile.forEach( (item)=>{
    console.log(item.profileCode);
    
} )