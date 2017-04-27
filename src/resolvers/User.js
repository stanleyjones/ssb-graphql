export default {
  channels: ({ id }, args, context, info) => [{ name: JSON.stringify(context) }]
}
