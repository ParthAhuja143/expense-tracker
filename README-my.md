npm i
react@16.12.0
react-dom@16.12.0
@material-ui/core
@material-ui/icons
@material-ui/lab
@speechly/react-client
@speechly/react-ui
chart.js
react-chartjs-2
uuid - TO GENERATE UNIQUE ID'S

SPEECHLY CODE-------------------------------------------
category_income = [
Business
Investments
Extra income
Deposits
Lottery
Gifts
Salary
Savings
Rental income
]
category_expense = [
Bills
Car
Clothes
Travel
Food
Shopping
House
Entertainment
Phone
Pets
Other
]
*create_transaction [Create|Finish|Save] {transaction}
*cancel_transaction [Cancel|Delete|Remove|Clear] {transaction}

*add_category [Set|Change] category {to} [$category_expense|$category_income](category)
*add_category {[i mean|i meant|i said]} {the} ![category {[is|of]} | [$category_expense|$category_income](category)]

*add_date [Set|Change|Add] date {[to|for]} $SPEECHLY.DATE(date)
*add_date {[i mean|i meant|i said]} {[{the} date is|for]} $SPEECHLY.DATE(date)

*add_amount [Set|Change] amount {to} $SPEECHLY.NUMBER(amount) {Rupees}
*add_amount {[i mean|i meant|i said]} {{the} amount {[is|of]}} $SPEECHLY.NUMBER(amount) {Rupees}

*add_expense {Add} {an} expense ![{[for|of]} $SPEECHLY.NUMBER(amount) {Rupees} | {in} | {category} | [$category_expense|$category_income](category) | {[for|in]} $SPEECHLY.DATE(date)]
*add_expense $SPEECHLY.NUMBER(amount) {Rupees} expense {in} ![{category} | [$category_expense|$category_income](category)] {[for|in]} $SPEECHLY.DATE(date)

*add_income {Add} {[{an} income|{a} balance]} ![{[for|of]} $SPEECHLY.NUMBER(amount) {Rupees} | {in} | {category} | [$category_expense|$category_income](category) | {[for|in]} $SPEECHLY.DATE(date)]
*add_income $SPEECHLY.NUMBER(amount) {Rupees} [income|balance] {in} ![{category} | [$category_expense|$category_income](category)] {[for|in]} $SPEECHLY.DATE(date)
