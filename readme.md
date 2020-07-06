# Fastify Issue Async

## Steps to reproduce

1. Install dependencies in both folders

```
> cd fastify-v2 && yarn && cd ../fastify-v3 && yarn && cd ..
```

2. Run `node fastify-v2`
3. See the expected server log
4. Run `node fastify-v3`
5. See the initialization error
