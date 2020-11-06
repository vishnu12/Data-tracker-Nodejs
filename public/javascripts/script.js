
async function addPiechartConfirm(){

    $.ajax({
        url:'/chart-data-confirm',
        method:'GET',
        success:(response)=>{
            if(response){
                console.log(response)
                var ctx = document.getElementById('myChart').getContext('2d');
                var myPieChart = new Chart(ctx, {
                type: 'pie',
                data: response,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
                
            });
            }else{
                console.log(error)
            }
        }
    })
    
}


async function addPiechartRecover(){

    $.ajax({
        url:'/chart-data-recover',
        method:'GET',
        success:(response)=>{
            if(response){
                console.log(response)
                var ctx = document.getElementById('myChart2').getContext('2d');
                var myPieChart = new Chart(ctx, {
                type: 'pie',
                data: response,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
                
            });
            }else{
                console.log(error)
            }
        }
    })
    
}

async function addPiechartPositive(){

    $.ajax({
        url:'/chart-data-positive',
        method:'GET',
        success:(response)=>{
            if(response){
                console.log(response)
                var ctx = document.getElementById('myChart3').getContext('2d');
                var myPieChart = new Chart(ctx, {
                type: 'pie',
                data: response,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
                
            });
            }else{
                console.log(error)
            }
        }
    })
    
}