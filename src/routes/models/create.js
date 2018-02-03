export default function (options) {
  const { db, logger } = options

  return async function (req, res) {
    try {
      await db.none('insert into models(name, attribute)' + 'values( ${name}, ${attribute} )', req.body) // eslint-disable-line
    } catch (err) {
      logger.error(err.message)

      return res.send('Error creating model...')
    }

    res.status(200)
    .json({
      status: 'success',
      message: 'Inserted one model...'
    })
  }
}
