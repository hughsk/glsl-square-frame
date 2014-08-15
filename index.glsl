vec2 squareFrame(vec2 screenSize) {
  vec2 position = 2.0 * (gl_FragCoord.xy / uScreenSize.xy) - 1.0;
  position.x *= screenSize.x / screenSize.y;
  return position;
}

vec2 squareFrame(vec2 screenSize, vec2 coord) {
  vec2 position = 2.0 * (coord.xy / uScreenSize.xy) - 1.0;
  position.x *= screenSize.x / screenSize.y;
  return position;
}

#pragma glslify: export(squareFrame)
