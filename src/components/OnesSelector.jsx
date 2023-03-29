

export default function OnesSelector () {
    
    const newArr = []
    for(let i=0; i<9; i++) {
            newArr.push({buttonValue: i,
                buttonName: `${i}`
            })
    }
    


    return (<h1>OnesSelector</h1>)
}