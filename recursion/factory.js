/**
 * Created by doremonsun on 5/5/17.
 */
// 5! = 5*4*3*2*1
let n =5;
factory = (n)=>{
    if(n==0){
        return 1
    } else{
        console.log(n);
        return factory(n-1)*n
    }

}
console.log(factory(n));