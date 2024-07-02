const log = {
  info: (message: string) => {
    console.log(`%c${message}`, `background:#35495E; padding: 1px 6px; border-radius: 3px;  color: #fff;`);
  },
  progress: (message: string) => {
    console.log(`%c${message}`, `background:#409eff; padding: 1px 6px; border-radius: 3px;  color: #fff;`);
  },
  success: (message: string) => {
    console.log(`%c${message}`, `background:#67c23a; padding: 1px 6px; border-radius: 3px;  color: #fff;`);
  },
  warning: (message: string) => {
    console.log(`%c${message}`, `background:#e6a23c; padding: 1px 6px; border-radius: 3px;  color: #fff;`);
  },
  error: (message: string) => {
    console.log(`%c${message}`, `background:#f56c6c; padding: 1px 6px; border-radius: 3px;  color: #fff;`);
  }
};
export default log;
