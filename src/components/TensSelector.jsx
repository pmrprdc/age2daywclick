export default function TensSelector () {
    const newArr = []
    for(let i=1; i<11; i++) {
            newArr.push({buttonValue: i*10,
                buttonName: `${i*10} to ${(i*10)+9}`
            })
    }
    

    return (newArr.map(button =>{
        return (<button value={button.buttonValue} key={button.buttonValue}>{button.buttonName}</button>)
    }))
}