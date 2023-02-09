import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import styles from "./CandlestickChart.module.css";

export interface CandlestickChartSeries {
  type: "candlestick";
  dimentions?: any[];
}

export interface CandlestickChartProps {
  xAxis: any;
  yAxis: any;
  series: any[];
  dataset: {
    // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
    // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
    // 如果不指定 dimensions，也可以通过指定 series.encode
    // 完成映射，参见后文。
    dimensions?: string[];
    source: any[];
  };
}

export const CandlestickChart: React.FC<CandlestickChartProps> = (props) => {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const candlestickChart = echarts.init(chartRef.current);
      const option = {
        xAxis: props.xAxis,
        yAxis: props.yAxis,
        series: props.series,
        dataset: props.dataset,
      };
      candlestickChart.setOption(option);
    }
  }, [props]);

  return (
    <>
      <div
        id="main"
        className={styles["CandlestickChart"]}
        ref={chartRef}
      ></div>
    </>
  );
};
