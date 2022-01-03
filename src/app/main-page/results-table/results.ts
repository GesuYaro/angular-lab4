export interface Result {
  result: boolean;
  x: number;
  y: number;
  r: number;
  time: string;
  executionTime: number;
}

export const results = [
  {
    result: true,
    x: 1,
    y: 2.2,
    r: 3,
    time: 'string',
    executionTime: 99993,
  },
  {
    result: false,
    x: 1.3,
    y: 42,
    r: 3.4,
    time: 'time',
    executionTime: 1222345,
  },
  {
    result: true,
    x: 3,
    y: 2.67,
    r: 0.2,
    time: 'string',
    executionTime: 5567,
  },
];
