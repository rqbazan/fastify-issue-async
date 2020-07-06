# Fastify Issue Async

## Steps to reproduce

1. Install dependencies in both folders

```
> cd fastify-v2 && yarn && cd ../fastify-v3 && yarn && cd ..
```

2. Run `node fastify-v2`
3. See the expected server log

```
λ node fastify-v2
{ app: true }
{"level":30,"time":1593999007374,"pid":17756,"hostname":"kratos","msg":"Server listening at http://127.0.0.1:3000","v":1}
^C
```

4. Run `node fastify-v3`
5. See the initialization error

```
λ node fastify-v3
{ app: false }
TypeError: Cannot read property 'listen' of undefined
    at main (D:\Software\Personal\fastify-issue-async\fastify-v3\index.js:17:15)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
```
