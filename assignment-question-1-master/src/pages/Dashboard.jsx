import { useState, useEffect } from "react";

// Data
import mockData from "../assets/data.json";


// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimestamps, setSelectedOrderTimestamps] = useState({}); 

  const [filteredRows, setFilteredRows] = useState(mockData.results); 
  const [totalOrders, setTotalOrders] = useState(mockData.results.length);
  

  const handleOrderSelect = (selectedOrder) => {
    setSelectedOrderDetails({
      buySellIndicator: selectedOrder.executionDetails.buySellIndicator,
      orderStatus: selectedOrder.executionDetails.orderStatus,
      orderType: selectedOrder.executionDetails.orderType,
    });

    setSelectedOrderTimestamps({
      orderReceived: selectedOrder.timestamps.orderReceived,
      orderStatusUpdated: selectedOrder.timestamps.orderStatusUpdated,
      orderSubmitted: selectedOrder.timestamps.orderSubmitted,
    });
    
  };
  useEffect(() => {
    const filtered = mockData.results.filter((row) => {
      return row["&id"].toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRows(filtered);
    setTotalOrders(filtered.length);
  }, [searchText]);

  
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle= {`Orders ${totalOrders}`}/>
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
  
      <div className={styles.content}>
        <div className={styles.section}>
        {selectedOrderDetails && (
            <Card cardData={selectedOrderDetails} title="Selected Order Details" />
          )}
          {selectedOrderTimestamps && (
            <Card cardData={selectedOrderTimestamps} title="Selected Order Timestamps" />
          )}
          
        </div>
        <List rows={filteredRows} currency={currency} searchText={searchText} onClick={handleOrderSelect}/>
      </div>
    </div>
  );
};

export default Dashboard;
