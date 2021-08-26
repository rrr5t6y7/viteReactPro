import React, { useEffect, useState } from "react";
// 模拟数据接口，3 秒钟返回数据。
const getList = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([6, 7, 8, 9, 10]);
    }, 3000);
  });
};

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    (async () => {
      const data = await getList();
      console.log("data", data);
      setData(data);
    })();
  }, []);
  return (
    <div className="App">
      {data.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
}

export default App;
