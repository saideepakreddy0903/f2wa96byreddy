var express=require('express');
var router = express.Router();

router.get('/',function(req,res,next){
   var number1=Math.random()+1
   var number2=Math.random()+2
   var number3=Math.random()+3
   var atanfunction=Math.atan(number1);
   var expfunction=Math.exp(number2);
   var expm1function=Math.expm1(number3);
   res.render('computation',
   {
    title:'Sai Deepak Reddy Byreddy computation',
    number1:number1,
    number2:number2,
    number3:number3,
    atan:atanfunction,
    exp:expfunction,
    expm1:expm1function,
    });
});

module.exports=router;