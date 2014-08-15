# glsl-square-frame [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Given a screen size, get values between -1 and +1 for the current pixel.

Useful for full-screen shaders: whereas `gl_FragCoord.xy` changes scale with the
canvas and sending the `[width, height]` over yourself results in stretching
unless you scale it properly – using this function lets you get consistent
points regardless of aspect ratio.

See the code in [`example.frag`](http://github.com/hughsk/glsl-square-frame/blob/master/example.frag)
for example usage.

## Usage

[![NPM](https://nodei.co/npm/glsl-square-frame.png)](https://nodei.co/npm/glsl-square-frame/)

### `vec2 squareFrame(vec2 size)`
### `vec2 squareFrame(vec2 size, vec2 coord)`

Returns a `vec2` containing the scaled screen position, ranging between -1
and +1.

* `size` is a `vec2` containing the `[width, height]` of your canvas.
* `coord` is the position of the current fragment, in pixels. Defaults
  to `gl_FragCoord.xy`.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/glsl-square-frame/blob/master/LICENSE.md) for details.
