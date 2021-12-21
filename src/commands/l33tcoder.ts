import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'l33tcoder',
  run: async toolbox => {
    const { print } = toolbox

    print.warning('So, are you a l33tcoder?')
  }
}

module.exports = command
