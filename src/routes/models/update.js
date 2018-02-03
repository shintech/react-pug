export default function (options) {
  const { db, logger } = options

  return async function (req, res) {
    const modelId = parseInt(req.params.id)

    try {
      await db.one('update models set name=$1, attribute=$2 where id=$3 returning id', [req.body.name, req.body.attribute, modelId])
    } catch (err) {
      logger.error(err.message)

      return res.send(`Error updating model id: ${modelId}...`)
    }

    res.status(200)
    .json({
      status: 'success',
      message: `Updated model id: ${modelId}...`
    })
  }
}
