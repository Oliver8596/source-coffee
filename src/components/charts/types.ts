export interface SingleXAxis {
  name: string;
  data?: string[];
  axisLabel?: {
    formatter: string;
  };
  onZero?: boolean;
}

export interface SingleYAxis {
  name: string;
  data?: number[];
  axisLabel?: {
    formatter: string;
  };
}
