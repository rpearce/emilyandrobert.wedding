const Task = require('data.task')

const taskFromNode = (fn, ctx) => (...args) => new Task((reject, resolve) => {
  fn.apply(ctx,
    args.concat(
      (err, data) => err ? reject(err) : resolve(data)
    )
  )
})

module.exports = taskFromNode
