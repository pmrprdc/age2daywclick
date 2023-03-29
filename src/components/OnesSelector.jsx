

export default function OnesSelector (props) {
    
    const {setSecondDigit} = props


    const newArr = []
    for(let i=0; i<10; i++) {
            newArr.push({buttonValue: i,
                buttonName: `${i}`
            })
    }
    
    const clickHandler = (e) => {
        setSecondDigit(e.target.value)
    }

    return (newArr.map(button =>{
        return (<button onClick={clickHandler} value={button.buttonValue} key={button.buttonValue}>{button.buttonName}</button>)
    }))
}