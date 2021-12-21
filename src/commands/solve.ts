import { GluegunCommand } from 'gluegun'

const solutionsPath = 'src/solutions'

const command: GluegunCommand = {
  name: 'solve',
  run: async toolbox => {
    var problemNumber = toolbox.parameters.first
    var problemArgs = toolbox.parameters.array.slice(1)

    var matches = toolbox.filesystem
      .cwd(solutionsPath)
      .find({ matching: `${problemNumber}-*` })

    if (matches.length === 1) {
      const solution = await import(
        toolbox.filesystem.path(solutionsPath, matches[0])
      )
      var answer = solution.default(...problemArgs)
      toolbox.print.success(answer)
    } else {
      toolbox.print.error('No solution found. 💀')
    }
  }
}

module.exports = command
