var triangle = require('a-big-triangle')
var shell    = require('gl-now')()
var Shader   = require('glslify')
var gl

shell.on('gl-init', function() {
  shader = Shader({
      vert: './example.vert'
    , frag: './example.frag'
  })(gl = shell.gl)
})

shell.on('gl-render', function() {
  shader.bind()
  shader.uniforms.uScreenSize = [shell.width, shell.height]
  triangle(gl)
})
