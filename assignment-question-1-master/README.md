
## After Following all the instructions and solving the questions, my code is running properly.

## You Can check by live link -- https://nimble-sherbet-b67039.netlify.app/


1.  In the title of the header, it displays `5 orders` but there are `6 orders` in the table. We want to display the `total` number of `orders` in the header title

Ans=> ```useEffect(() => {
    const filtered = mockData.results.filter((row) => {
      return row["&id"].toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRows(filtered);
    setTotalOrders(filtered.length);
  }, [searchText]); ```
  This code shows how many rows are present in the list. it works dynamically, when the list's rows change then order number also change.

2.  In the table order submitted date is missing, we have timestamp data included in the `src\assets\timeStamps.json` with the corresponding ids, please combine that with the order data and make sure the order submitted date is displayed in the table

Ans=> I transfer the (timeStamps.json) data to (data.json). Because all the required data is given is (data.json) and write the code ```<ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>```
and it prints output correctly.

3.  Order Volume cell is displaying USD values, can you please make it display the currency value selected on the dropdown located in the header of the dashboard

Ans=> Put currency={currency} in Dahboard.jsx. the currency variable is used to render the order volume in EUR/USD/JPY/GBP. If the user changes the currency variable to USD, the order volume will be rendered in USD.

4.  Can you please add a search feature on the order IDs with the search bar given in the header

Ans=> For search feature I use function--- ``` const filteredRows = rows.filter((row) => {
    return row["&id"].toLowerCase().includes(searchText.toLowerCase());
  });```
  a. The rows variable is an array of rows. The searchText variable is the text that the user is searching for.
  b. The filter() method takes a function as input. The function takes a row as input and returns a boolean value. If the boolean value is true, the row is included in the filtered array.
  c. The function checks if the &id property of a row contains the search text. If it does, the function returns true. Otherwise, the function returns false.
  d. The toLowerCase() method is used to convert the search text to lowercase. This is done so that the filter function is case-insensitive.


5.  Please clear the console errors and warnings.

Ans=> For removing errors I use for unique key  ```import { v4 as uuidv4 } from "uuid";``` , other errors were also removed by me and the code is working perfectly without any single error.

6.  When user selects an order, can you populate the Card on top of the listing component as shown in the image

Ans=> This code is an interpretation of the handleOrderSelect() method. This method is invoked when the user selects a order. It sets the status variables selectedOrderDetails and selectedOrderTimestamps to the contents of the selected order.

