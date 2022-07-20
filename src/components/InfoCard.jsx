import React from 'react'

const isIncome = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style = {{textAlign : 'center' , padding : '0 10%' , fontSize : '14px'}}>
             Try saying : <br/>
              Add {isIncome ? 'Income ' : 'Expense '} 
              for Rs. {isIncome ? '10,000 ' : '1,000 '} 
              in Category {isIncome ? 'Business ' : 'House '} 
              for {isIncome ? 'Monday.' : 'Sunday.'}
        </div>
    )
}

export default InfoCard
