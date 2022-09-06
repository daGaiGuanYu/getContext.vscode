if(globalThis['@ppzp/context'])
  throw Error('Different @ppzp/context versions')
globalThis['@ppzp/context'] = true

var context

exports.set = function(ctx) {
  if(context)
    throw Error('setting CONTEXT again')
  context = ctx
}

exports.get = function() {
  if(context)
    return context
  throw Error('access CONTEXT before setting')
}
