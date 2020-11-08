svg-to-poly
===========

Converts an SVG into a Planar Straight Line Graph conforming to .poly files from [Triangle](https://www.cs.cmu.edu/~quake/triangle.html).

The default output is a JSON using the same property names as `struct triangulateio` defined in `triangle.h` from [Triangle](https://www.cs.cmu.edu/~quake/triangle.html).

An alternative output is a formatted string which could be written onto a .poly file.

> A .poly file represents a PSLG, as well as some additional information. PSLG stands for Planar Straight Line Graph, a term familiar to computational geometers. By definition, a PSLG is just a list of vertices and segments. A .poly file can also contain information about holes and concavities, as well as regional attributes and constraints on the areas of triangles.

Full description of the [.poly file format](https://www.cs.cmu.edu/~quake/triangle.poly.html).

## Install
```
npm install svg-to-poly
```

## Example
```js
const svgToPoly = require('svg-to-poly');
const loadSvg = require('load-svg');

loadSvg('./arrow460.svg', (err, svg) => {
  console.log(svgToPoly(svg));
});
```
Output:
```js
{
  pointlist: [[0.86, -0.50], [0.83, -0.55] ...],
  segmentlist: [[0, 1], [1, 2] ...],
  holelist: [[0.23, -0.40]],
  numberofpoints: 115,
  numberofsegments: 115,
  numberofholes: 1
}
```

Alternative with `format()` to get a string in the .poly format:
```js
const svgToPoly = require('svg-to-poly');
const loadSvg = require('load-svg');

loadSvg('./arrow460.svg', (err, svg) => {
  console.log(svgToPoly.format(svg));
});
```
Output:
```
# points
115 2 0 0
0 0.86 -0.50
1 0.83 -0.55
...
# segments
115 0
0 0 1
1 1 2
...
# holes
1
0 0.23 -0.40
```

## Demo

[poly-parse demo](https://brunoimbrizi.github.io/svg-to-poly/demo/)

## Usage

### `svgToPoly(svg, options)`

- `svg` an SVG element

- `options`
  - `flat` (default `false`) flatten nested arrays i.e. `[[x, y], [x, y]]` into `[x, y, x, y]`
  - `normalize` (default `false`) normalizes path to its bounding box, returns points in the `-1.0 ... 1.0` range
  - `threshold` (default `0.2`) threshold passed to [simplify-js](https://github.com/mourner/simplify-js)

**Returns** an object with the parsed properties.

### `svgToPoly.format(svg, options)`
Same as above.

**Returns** a string in the .poly format.

## Dependencies

[svg-to-poly](https://github.com/brunoimbrizi/svg-to-poly) benefits from the groundwork laid by other great packages:
- [extract-svg-path](https://github.com/mattdesl/extract-svg-path) concatenates all `<path>` data from an SVG
- [parse-svg-path](https://github.com/jkroso/parse-svg-path) splits paths into groups of instructions and values
- [svg-path-contours](https://github.com/mattdesl/svg-path-contours/) converts paths into polylines
- [simplify-path](https://github.com/mattdesl/simplify-path) simplifies polylines
- [point-in-polygon](https://github.com/substack/point-in-polygon) checks if a point is inside a polygon
- [polylabel](https://github.com/mapbox/polylabel) finds an optimal position inside a polygon

## See Also

- [Triangle - A Two-Dimensional Quality Mesh Generator and Delaunay Triangulator](https://www.cs.cmu.edu/~quake/triangle.html) - Jonathan Shewchuk
- [normalize-path-scale](https://github.com/mattdesl/normalize-path-scale)
- [bound-points](https://github.com/mikolalysenko/bound-points)


## License

MIT, see [LICENSE](LICENSE) for details.
