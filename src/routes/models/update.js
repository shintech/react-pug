export default function (options) {
  const { db, logger } = options

  return async function (req, res) {
    let status, message
    const modelId = parseInt(req.params.id)

    try {
      await db.one('update models set name=$1, attribute=$2 where id=$3 returning id', [req.body.name, req.body.attribute, modelId])

      status = 'success'
      message = `Updated model id: ${modelId}...`
    } catch (err) {
      logger.error(err.message)

      status = 'error'
      message = `Error updating model id: ${modelId}...`
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
