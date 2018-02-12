import { headers } from '../../lib'

export default function (options) {
  const { db, logger } = options

  return async function (req, res) {
    let result, status, message, response
    options.startTime = Date.now()

    try {
      result = await db.one('insert into models(name, attribute)' + 'values( ${name}, ${attribute} ) returning id', req.body) // eslint-disable-line
      status = 'success'
      message = `Inserted one model; id: ${result.id}...`

      logger.info(`Insterted one model; id: ${result.id}`)
    } catch (err) {
      status = 'error'
      message = err.message

      logger.error(err.message)
    }

    response = {
      body: { result, status, message }
    }

    res.status(200)
    .format({
      json: () => {
        res.set(headers(response, options))
        .write(JSON.stringify(response))
        res.end()
      }
    })
  }
}
