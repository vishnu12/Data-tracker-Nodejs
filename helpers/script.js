
const axios = require('axios');

module.exports={
    getDetails:async()=>{
        let states=[]
        const {data}=await axios.get('https://api.covid19india.org/v4/data.json')
        const result=Object.keys(data).map((item,k)=>{
         states.push(item)
         for(let x in states){
             data[item].state=states[x]
         }
         return data[item]
        })

      const finalData=result.map((item,k)=>{
          let tempData={}
          tempData.state=item.state
          tempData.confirmed=item.total.confirmed
          tempData.deceased=item.total.deceased
          tempData.recovered=item.total.recovered
          tempData.tested=item.total.tested
          tempData.positivity=(Number(item.total.confirmed)/Number(item.total.tested)).toFixed(2)
       
           return tempData;
      })
        

    return finalData;
    
    },

    chartDataConfirmed:async()=>{
     
        let states=[]
        const {data}=await axios.get('https://api.covid19india.org/v4/data.json')
        const result=Object.keys(data).map((item,k)=>{
         states.push(item)
         for(let x in states){
             data[item].state=states[x]
         }
         return data[item]
        })

      const finalData=result.map((item,k)=>{
          let tempData={}
          let letters = '0123456789ABCDEF'.split('')
          let color = '#'
          for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }

          tempData.state=item.state
          tempData.confirmed=item.total.confirmed
          tempData.deceased=item.total.deceased
          tempData.recovered=item.total.recovered
          tempData.tested=item.total.tested
          tempData.positivity=(Number(item.total.confirmed)/Number(item.total.tested)).toFixed(2)
          tempData.color=color
           return tempData;
      })

      
     const stateArray=  finalData.map((item,k)=>{
          return item.state
      })

      const confirmedArray=  finalData.map((item,k)=>{
        return item.confirmed
    })

    const colorArray=finalData.map((item,k)=>{
        return item.color
    })
        return {
            datasets:[{
                data:confirmedArray,
                backgroundColor:colorArray
                
            }],
            labels:stateArray
        }
      },



      chartDataRecovered:async()=>{
     
        let states=[]
        const {data}=await axios.get('https://api.covid19india.org/v4/data.json')
        const result=Object.keys(data).map((item,k)=>{
         states.push(item)
         for(let x in states){
             data[item].state=states[x]
         }
         return data[item]
        })

      const finalData=result.map((item,k)=>{
          let tempData={}
          let letters = '0123456789ABCDEF'.split('')
          let color = '#'
          for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }

          tempData.state=item.state
          tempData.confirmed=item.total.confirmed
          tempData.deceased=item.total.deceased
          tempData.recovered=item.total.recovered
          tempData.tested=item.total.tested
          tempData.positivity=(Number(item.total.confirmed)/Number(item.total.tested)).toFixed(2)
          tempData.color=color
           return tempData;
      })

      
     const stateArray=  finalData.map((item,k)=>{
          return item.state
      })

      const recoveredArray=  finalData.map((item,k)=>{
        return item.recovered
    })

    const colorArray=finalData.map((item,k)=>{
        return item.color
    })
        return {
            datasets:[{
                data:recoveredArray,
                backgroundColor:colorArray
                
            }],
            labels:stateArray
        }
      },


      chartDataPositive:async()=>{
     
        let states=[]
        const {data}=await axios.get('https://api.covid19india.org/v4/data.json')
        const result=Object.keys(data).map((item,k)=>{
         states.push(item)
         for(let x in states){
             data[item].state=states[x]
         }
         return data[item]
        })

      const finalData=result.map((item,k)=>{
          let tempData={}
          let letters = '0123456789ABCDEF'.split('')
          let color = '#'
          for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }

          tempData.state=item.state
          tempData.confirmed=item.total.confirmed
          tempData.deceased=item.total.deceased
          tempData.recovered=item.total.recovered
          tempData.tested=item.total.tested
          tempData.positivity=(Number(item.total.confirmed)/Number(item.total.tested)).toFixed(2)
          tempData.color=color
           return tempData;
      })

      
     const stateArray=  finalData.map((item,k)=>{
          return item.state
      })

      const posityvityArray=  finalData.map((item,k)=>{
        return item.positivity
    })

    const colorArray=finalData.map((item,k)=>{
        return item.color
    })
        return {
            datasets:[{
                data:posityvityArray,
                backgroundColor:colorArray
                
            }],
            labels:stateArray
        }
      } 
    
}


