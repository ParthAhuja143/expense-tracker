import { useContext } from "react"
import { expenseCategories, incomeCategories, resetCategories } from "./constants/categories"
import { ExpenseTrackerContext } from "./context/context"

// [
// {id : 1 , type : 'Income' , amount : 1000 , category : 'Salary'},
// {id : 2 , type : 'Expense' , amount : 500 , category : 'Food'},
// {id : 3 , type : 'Income' , amount : 10000 , category : 'Lottery'},
// {id : 4 , type : 'Income' , amount : 130 , category : 'Rent'},
// {id : 5 , type : 'Expense' , amount : 100 , category : 'Drinks'},
// {id : 6 , type : 'Income' , amount : 8000 , category : 'Lottery'},
// ]

const useTransactions = (title) => {
      resetCategories()
      const {transactions} = useContext(ExpenseTrackerContext)
      const transactionsPerType = transactions.filter((t) => t.type === title)    // Either Income or Expense

// [
// {id : 1 , type : 'Income' , amount : 1000 , category : 'Salary'},
// {id : 3 , type : 'Income' , amount : 10000 , category : 'Lottery'},
// {id : 4 , type : 'Income' , amount : 130 , category : 'Rental Income'},
// {id : 6 , type : 'Income' , amount : 8000 , category : 'Lottery'},
// ]

      const total = transactionsPerType.reduce((accumulator , currentVal) => accumulator += currentVal.amount , 0)

      // 19130

      const categories = title === 'Income' ? incomeCategories : expenseCategories

    //      categories = [
    //     { type: 'Business', amount: 0, color: incomeColors[0] },
    //     { type: 'Investments', amount: 0, color: incomeColors[1] },
    //     { type: 'Extra income', amount: 0, color: incomeColors[2] },
    //     { type: 'Deposits', amount: 0, color: incomeColors[3] },
    //     { type: 'Lottery', amount: 0, color: incomeColors[4] },
    //     { type: 'Gifts', amount: 0, color: incomeColors[5] },
    //     { type: 'Salary', amount: 0, color: incomeColors[6] },
    //     { type: 'Savings', amount: 0, color: incomeColors[7] },
    //     { type: 'Rental income', amount: 0, color: incomeColors[8] },
    //   ];

   // console.log({transactionsPerType , total , categories})

      transactionsPerType.forEach((t) => {
          const category = categories.find((c) => c.type === t.category)

          if(category){
              category.amount += t.amount
          }

    //      categories = [
    //     { type: 'Lottery', amount: 18000, color: incomeColors[4] },
    //     { type: 'Salary', amount: 1000, color: incomeColors[6] },
    //     { type: 'Rental income', amount: 130, color: incomeColors[8] },
    //   ];


      });

      const filteredCategories =categories.filter((c) => c.amount > 0)

      //console.log('Heyyyy' , filteredCategories)

      const chartData = {
          datasets : [{
              data : filteredCategories.map((c) => c.amount) ,
              backgroundColor : filteredCategories.map((c) => c.color)
          }] ,
          labels : filteredCategories.map((c) => c.type)
      }

      return {filteredCategories , total , chartData}
}

export default useTransactions