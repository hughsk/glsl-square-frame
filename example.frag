precision mediump float;

uniform vec2 uScreenSize;

#pragma glslify: squareFrame = require(./)

void main() {
  vec2 pos = squareFrame(uScreenSize);

  vec3 color = vec3(pos.x + 0.5, pos.y + 0.5, 0.2);
  float inSquare = (
    abs(pos.x) < 0.5 &&
    abs(pos.y) < 0.5
  ) ? 1.0 : 0.0;

  gl_FragColor.a   = 1.0;
  gl_FragColor.rgb = color * inSquare;
}
