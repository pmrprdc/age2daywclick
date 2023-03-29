export default function TensSelector (props) {
    
    const {setFirstDigit} = props;

    const newArr = []
    for(let i=1; i<11; i++) {
            newArr.push({buttonValue: i,
                buttonName: `${i*10} to ${(i*10)+9}`
            })
    }
    const clickHandler = (e) => {
        setFirstDigit(e.target.value)
    }

    return (newArr.map(button =>{
        return (<button onClick={clickHandler} value={button.buttonValue} key={button.buttonValue}>{button.buttonName}</button>)
    }))
}