const express = require ('express');
const router = express.Router();
const mongoose = require ("mongoose");


require('../db.js');
const Vocabdata = require('../model/userSchema'); 

router.get('/', (req, res) => {
  res.send('hello world')
})

router.post('/savedata', (req,res) => {
  const { number, word, meaning, example } = req.body;
  if ( !number || !word || !meaning || !example ){
    return res.status(422).json({error : "Please fill the data"});
  };

  Vocabdata.findOne({word : word})
  .then((wordExist) => {
    if(wordExist){
      return res.status(422).json({error : "word already exists"});
    };
    const vocabdata = new Vocabdata({ number, word, meaning, example });
    vocabdata.save().then(() => {
      res.status(201).json({message: "word saved successfully"});
    }).catch((err) => res.status(500).json({message: "word not saved"}));
  }).catch(err => {console.log(err);});

});


router.post('/getdata', async(req, res) => {
  const { word } = req.body;

  if (!word){
    return res.status(422).json({error: "please write word "});
  }
  const getWord = await Vocabdata.findOne({word:word});
console.log(getWord);
  res.send(getWord);
})

// -- for about page______

router.post('/getnumber', async(req, res) => {
  const { number1 , number2} = req.body;

  // if (!number1){
  //   return res.status(422).json({error: "please write number "});
  // }
  const getNumber1 = await Vocabdata.findOne({number:number1});
  const getNumber2 = await Vocabdata.findOne({number:number2});
console.log(getNumber1);
  console.log(getNumber2);
  res.send([getNumber1, getNumber2]);
})


module.exports = router;

// router.post('/getdata', async(req, res) => {
//   const { email } = req.body;

//       if( !email ) {
//           return res.status(400).json({ error: "plese fill the data"});
//       }
//       const userLogin = await User.findOne({email: email});
//       // console.log(userLogin);
//       res.send(userLogin);
//   // res.json("Its working till here");
// })