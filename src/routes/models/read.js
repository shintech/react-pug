export default function (options) {
  const { db, logger } = options

  return {
    one: async function (req, res) {
      let model
      let modelId = parseInt(req.params.id)

      try {
        model = await db.one('select * from models where id = $1', modelId)
      } catch (err) {
        logger.error(err.message)

        return res.send('Error loading model from database...')
      }

      res.status(200)
      .json({
        body: model
      })
    },

    all: async function (req, res) {
      let models

      try {
        models = await db.any('select * from models')
      } catch (err) {
        logger.error(err.message)

        return res.send('Error loading models from database...')
      }

      res.status(200)
      .json({
        body: models
      })
    }
  }
}
