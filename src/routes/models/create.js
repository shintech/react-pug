export default function (options) {
  const { db, logger } = options

  return async function (req, res) {
    let status, message

    try {
      await db.none('insert into models(name, attribute)' + 'values( ${name}, ${attribute} )', req.body) // eslint-disable-line

      status = 'success'
      message = 'Inserted one model...'
    } catch (err) {
      logger.error(err.message)

      status = 'error'
      message = 'Error creating model...'
    }

    res.status(200)
    .json({
      body: {
        status: status,
        message: message
      }
    })
  }
}
