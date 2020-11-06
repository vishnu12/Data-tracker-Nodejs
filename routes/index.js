var express = require('express');
const { getDetails, chartDataConfirmed, chartDataRecovered,chartDataPositive } = require('../helpers/script');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const data=await getDetails()
  res.render('contents/home',{data});
});

router.get('/chart-data-confirm',async(req,res)=>{
  const chartDetails=await chartDataConfirmed()
  res.json(chartDetails)

  // console.log(chartDetails)
})

router.get('/chart-data-recover',async(req,res)=>{
  const chartDetails=await chartDataRecovered()
  res.json(chartDetails)

})

router.get('/chart-data-positive',async(req,res)=>{
  const chartDetails=await chartDataPositive()
  res.json(chartDetails)
  
})

module.exports = router;
