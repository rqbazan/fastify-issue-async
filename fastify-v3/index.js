const fastify = require('fastify')

async function buildApp(opts) {
  const app = fastify(opts)

  // register plugins

  return app
}

async function main() {
  const app = await buildApp({ logger: true })

  console.log({ app: !!app }) // false

  try {
    await app.listen(3000)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()
