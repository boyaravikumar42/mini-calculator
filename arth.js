var s="";

seven=()=>{
    let i=document.getElementById("prefix");
    s+="7";
    i.innerHTML=s;
}
//function for reading eight
eight=()=>{
     let i=document.getElementById("prefix");
     s+="8";
     i.innerHTML=s;
 }
 //function for reading nine

 nine=()=>{
     let i=document.getElementById("prefix");
     s+="9";
     i.innerHTML=s;
 }
 //function for reading zero

 zero=()=>{
     let i=document.getElementById("prefix");
     s+="0";
     i.innerHTML=s;
 }
 //function for reading one

 one=()=>{
     let i=document.getElementById("prefix");
     s+="1";
     i.innerHTML=s;
 }
 //function for reading six

 two=()=>{
     let i=document.getElementById("prefix");
     s+="2";
     i.innerHTML=s;
 }
 //function for reading three
 three=()=>{
     let i=document.getElementById("prefix");
     s+="3";
     i.innerHTML=s;
 }
 //function for reading four
 four=()=>{
     let i=document.getElementById("prefix");
     s+="4";
     i.innerHTML=s;
 }
 //function for reading five
five=()=>{
  
     let i=document.getElementById("prefix");
     s+="5";
     i.innerHTML=s;
 }
 six=()=>{
    // alert("seven reading");
     let i=document.getElementById("prefix");
     s+="6";
     i.innerHTML=s;
 }
 //functions for the reading operators
 //-----------------------------------//
 prod=()=>{
    // alert("seven reading");
     let i=document.getElementById("prefix");
     s+="*";
     i.innerHTML=s;
 }
 plus=()=>{
    // alert("seven reading");
     let i=document.getElementById("prefix");
     s+="+";
     i.innerHTML=s;
 }
 minus=()=>{
    // alert("seven reading");
     let i=document.getElementById("prefix");
     s+="-";
     i.innerHTML=s;
 }
 div=()=>{

     let i=document.getElementById("prefix");
     s+="/";
     i.innerHTML=s;
 }
 //bracket reading
 obracket=()=>{
     let i=document.getElementById("prefix");
     s+="(";
     i.innerHTML=s;
 }
 //bracket reading
 cbracket=()=>{
     let i=document.getElementById("prefix");
     s+=")";
     i.innerHTML=s;
 }
 //percent reading
 percent=()=>{
    let i=document.getElementById("prefix");
    s+="%";
    i.innerHTML=s;
}
//function to read dot
dot=()=>{
    let i=document.getElementById("prefix");
    s+=".";
    i.innerHTML=s;
}
//-----------------------------------//
/* here i needed two funtions for converting 
infix 
to
postfix  */
res=()=>{
    let i=document.getElementById("res");
    const arr=postfixConvert(s);
    operation(arr);
    



    i.innerHTML="= "+s;

}
//--------------------------------//
ac=()=>{
    let i=document.getElementById("prefix");
    let j=document.getElementById("res");
    console.log(s)
    s="";
    i.innerHTML=""+s;
    j.innerHTML=""+s;

}

//---operation function to obtain the results from the
// postfix expression prefix;
operation =(arr)=>{
    
    const res=new Array();
    //here RES array is used as the stack to calculate 
    // the result from the given post fix array;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]=='+')
        {
            var a=parseInt(res.pop());
            var b=parseInt(res.pop());
            res.push(a+b);
        }
       else if(arr[i]=='-')
            {
                var a=parseInt(res.pop());
                var b=parseInt(res.pop());
                res.push(b-a);
            }
           else if(arr[i]=='*')
                {
                    var a=parseInt(res.pop());
                    var b=parseInt(res.pop());
                    res.push(a*b);
                }
            else if(arr[i]=='/')
            {
                var a=parseInt(res.pop());
                var b=parseInt(res.pop());
                res.push(b/a);
            }  
            else if(arr[i]=='%')
                {
                    var a=parseInt(res.pop());
                    var b=parseInt(res.pop());
                    res.push(b%a);
                }
           else{
            res.push(arr[i]);
           }
    }
    console.log(res);

}
/*********************************************
 * 
 * function to convert the string into infix array
 * it will take string as input
 * 
 **********************************************/
function stringToArray(str)
{
   var temp="";
   const infix=new Array();
   for(let i=0;i<str.length;i++)
   {
        if(str[i]=='+'||str[i]=='-'||str[i]=='%'||str[i]=='/'||str[i]=='*')
              {
               infix.push(temp);
               infix.push(str[i]);
                   temp='';
              }
              else if(str[i]=='(') //'(100+200)+10/30-(15*10)'
              {
               infix.push(str[i]);
      
              }
              else if(str[i]==')')
              {
               infix.push(temp);
               infix.push(')');
               temp="";
              }
              else{
                  temp+=""+str[i];
              }
           }
           if(temp!="")
           infix.push(temp);
           
           return infix; 
   }

/***********************************************
 * 
 * function to convert infix array to postfix array;
 * 
 ************************************************/
  postfixConvert=(infix)=>
  {
     const postfix=new Array();
     const stack=new Array();
     for(var i=0;i<arr.length();i++)
     {
        if(infix[i]=='+'||infix[i]=='-'||infix[i]=='%'||infix[i]=='/'||infix[i]=='*')
        {
            if(precedence(infix[i])>precedence(stack[stack.length()-1]))
            {
                postfix.push(stack.pop());
            }
            stack.push(infix[i]);
            
            temp=null;
        }
        else if(str[i]=='(')
        {
            stack.push(str[i]);

        }
        else if(str[i]==')')
        {
            while(stack.length!=0 && stack[stack.length()-1]!='(')
            {
                arr.push(stack.pop());
            }
            stack.pop();
        }
        else{
            postfix.push(arr[i]);
        }
     }
     while(stack.length!=0)
        {
            arr.push(stack.pop());
        }
    console.log(arr);
    operation(arr) ;
  }
  //function for the presidence
  precedence=(op)=>{
    switch (op) {
        case '+': return 1;
        case '-':return 1;
            
            break;
        case '/': return 2;
        case '%': return 2;
        case '*': return 2;
        default:return null;
            break;
    }

  }







 

 









 

 

