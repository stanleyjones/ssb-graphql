export default {
  content: (msg) => JSON.stringify(msg.value.content),
  sequence: (msg) => msg.value.sequence,
  timestamp: (msg) => msg.value.timestamp,
  type: (msg) => msg.value.content.type,
}
