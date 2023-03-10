import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
//import "./InfiniteScroll.css";
const style ={
  border:"1px solid green",
  margin:12,
  padding:8,
};
const App = () => {
  const [dataSource, setDataSource]= useState(Array.from({length:20}))
  const [hasMore, setHasMore]= useState(true)
  const fetchMoreData=()=>{
   
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({length:20})));
      }, 500); 
    
 };
  return (
    <div className="App">
      <p>Title:<b>InfiniteScroll </b></p>
      <div id="parentScrollDiv" style={{height:500, overflow:'auto'}}>
      <InfiniteScroll
       dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        scrollableTarget="parentScrollDiv">
        {dataSource.map((item,index)=>{
          return <div style={style}>this a div #{index + 1} inside InfiniteScroll</div>

        })}
      </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;