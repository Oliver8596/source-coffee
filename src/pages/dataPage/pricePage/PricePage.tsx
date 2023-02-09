// import styles from "./DataPage.module.css";
import { CandlestickChart, SingleYAxis } from "../../../components";
import mockdata from "../mockdata/coffeeprices.json";
import styles from "./PricePage.module.css";

export const PricePage: React.FC = () => {
  const xAxis = {
    name: "year",
    min: 1970,
  };

  const yAxis: SingleYAxis = {
    name: "$",
  };

  const upColor = "#03C988";
  const upBorderColor = "#03C988";
  const downColor = "#015036";
  const downBorderColor = "#015036";

  const series: any[] = [
    {
      type: "candlestick",
      dimentions: ["date", "open", "close", "highest", "lowest"],
      itemStyle: {
        color: upColor,
        color0: downColor,
        borderColor: upBorderColor,
        borderColor0: downBorderColor,
      },
    },
  ];

  const processedData = mockdata.map((d) => {
    return [d.year, d.yearOpen, d.yearClose, d.yearMin, d.yearMax];
  });

  const dataset = {
    // dimentions: ["year", "averagePrice", "yearOpen"],
    source: processedData,
  };

  return (
    <>
      <div className={styles["container"]}>
        <CandlestickChart
          xAxis={xAxis}
          yAxis={yAxis}
          series={series}
          dataset={dataset}
        />
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
        <h1>shshshs</h1>
      </div>
    </>
  );
};
