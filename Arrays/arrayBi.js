const {logSeparator} = require('../logSeparator')

// criando arrayBI

let averageTemp = []

// dia 1
averageTemp[0] = []
averageTemp[0][0] = 72
averageTemp[0][1] = 75
averageTemp[0][2] = 79
averageTemp[0][3] = 79
averageTemp[0][4] = 81
averageTemp[0][5] = 81
// dia 2
averageTemp[1] = []
averageTemp[1][0] = 81
averageTemp[1][1] = 79
averageTemp[1][2] = 75
averageTemp[1][3] = 75
averageTemp[1][4] = 73
averageTemp[1][5] = 73


//exibindo as temperaturas de cada dia
logSeparator("exibindo as temperaturas de cada dia")


for(let i=0;i<averageTemp.length;i++){  
    console.log('Dia '+(i+1))  
    for(let j=0;j<averageTemp[i].length;j++){
        console.log(averageTemp[i][j])
    }
}

//exibindo a media de cada dia
logSeparator("exibindo a media de cada dia")

for(let i=0;i<averageTemp.length;i++){  
    console.log('Dia '+(i+1))  

    let soma = 0
    for(let j=0;j<averageTemp[i].length;j++){
        soma+= averageTemp[i][j]
    }

    const media = soma/averageTemp[i].length

    console.log(media)
}