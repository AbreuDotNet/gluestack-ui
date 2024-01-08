// console.timeMap = { boot: {}, runtime: {} };
// console.initKey = (key: string, runningTime: string) => {
//   console.timeMap[runningTime][key] = {
//     'startTime': 0,
//     'diff': [],
//     'callCounter': 0,
//     'averageTime(ms)': 0,
//   };
// };
// console.incrementCallCount = (key: string, runningTime: string) => {
//   console.timeMap[runningTime][key]['callCounter'] =
//     console.timeMap[runningTime][key]['callCounter'] + 1;
// };

// console.setStartTimeStamp = (key: string, runningTime?: string = 'runtime') => {
//   if (!console.timeMap[runningTime][key]) {
//     console.initKey(key, runningTime);
//   }
//   console.incrementCallCount(key, runningTime);
//   console.timeMap[runningTime][key]['startTime'] = new Date().getTime();
// };
// console.setDiff = (key: string, diff: number, runningTime: string) => {
//   console.timeMap[runningTime][key]['diff'].push(diff);
// };
// console.setEndTimeStamp = (key: string, runningTime?: string = 'runtime') => {
//   const endTime = new Date().getTime();
//   const diff = endTime - console.timeMap[runningTime][key]['startTime'];
//   console.timeMap[runningTime][key]['averageTime(ms)'] =
//     console.timeMap[runningTime][key]['diff'].reduce(
//       (partialSum: any, a: any) => partialSum + a,
//       0
//     ) / console.timeMap[runningTime][key]['callCounter'];
//   console.setDiff(key, diff, runningTime);
// };
// console.getPerformanceReport = () => {
//   // console.log('console.timeMap.boot');
//   // console.log(JSON.stringify(console.timeMap.boot));
//   console.log('console.timeMap.runtime');
//   console.log(
//     'Max>>>> NewComp',
//     console.timeMap['runtime']['NewComp']['diff'].sort(function (a, b) {
//       return a - b;
//     })[console.timeMap['runtime']['NewComp']['callCounter'] - 1]
//   );
//   console.log(
//     JSON.stringify(console.timeMap.runtime['NewComp']['averageTime(ms)']),
//     '\n',
//     JSON.stringify(console.timeMap.runtime['useEffect']['averageTime(ms)'])
//   );
//   console.log(
//     'Max>>>> useEffect',
//     console.timeMap['runtime']['useEffect']['diff'].sort(function (a, b) {
//       return a - b;
//     })[console.timeMap['runtime']['useEffect']['callCounter'] - 1]
//   );
// };

export { styled } from './nativedwindStyled';
