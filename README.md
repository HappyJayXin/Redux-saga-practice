# Redux-saga-practice

```
yarn
npm run dev
```

## Use redux-saga

1. takeEvery : 每次 dispatch 的 action 符合 pattern 時，產生一個 saga
2. put : dispatch 一個 action
3. call : middleware 呼叫
4. take : 指示 middleware 在 Store 等待指定的 action
5. fork : 指示 middleware 在 fn 執行一個非阻塞呼叫
6. select : 指示 middleware 在目前 Store 的 state 調用提供的 selector

