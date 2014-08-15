precision mediump float;

attribute vec2 position;

void main() {
  gl_Position = vec4(1.0);
  gl_Position.xy = position;
}
