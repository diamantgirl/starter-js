const t = 8;
let num = 1;
let ans = 1;
if(t<1){
  console.log(t);
} else {
  while(num<t) {
    num++;
    ans = ans + num;
  } 
  console.log(ans)
}
