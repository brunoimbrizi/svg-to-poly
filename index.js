const extract = require('extract-svg-path').parse;
const parse = require('parse-svg-path');
const contours = require('svg-path-contours');
const simplify = require('simplify-path');
const inside = require('point-in-polygon');
const polylabel = require('polylabel');

const svgToPoly = (svg) => {
	const epath = extract(svg);
	const ppath = parse(epath);
	const contr = contours(ppath);

	const simpl = contr.map(function(c) {
    return simplify(c, 0.2);
	});

	const paths = [];

	// create an object for each path
	simpl.forEach(path => {
		paths.push({
			points: path,
			segments: [],
			holes: [],
			closed: false,
			winding: 0,
		})
	});

	// set points and segments
	let ix, iy, ex, ey, points, path;
	let k = 0;

	for (let i = 0; i < paths.length; i++) {
		path = paths[i];
		points = path.points;
		segments = path.segments;

		ix = points[0][0];
		iy = points[0][1];
		ex = points[points.length - 1][0];
		ey = points[points.length - 1][1];

		// if last point == first, remove it
		if (ix === ex && iy === ey) {
			path.closed = true;
			points.pop();
		}

		for (let j = 0; j < points.length - 1; j++) {
			segments.push(k + j + 0, k + j + 1);
		}

		// if closed, add segment last to first
		if (path.closed) {
			segments.push(k + points.length - 1, k);
		}

		k += points.length;
	}

	// set winding numbers
	// 0 outermost, N innermost
	//  ___________
	// |  _______  | 
	// | |  ___  | |
	// | | |_2_| | |
	// | |___1___| |
	// |_____0_____|

	let othr;
	for (var i = 0; i < paths.length; i++) {
		path = paths[i];
		for (var j = 0; j < paths.length; j++) {
			othr = paths[j];
			if (path === othr) continue;
			if (inside(path.points[0], othr.points)) path.winding++;
		}
	}

	// find the biggest winding number
	let maxWinding = 0;
	paths.forEach(p => {
		if (p.winding > maxWinding) maxWinding = p.winding;
	});

	// set hole points for paths with odd winding numbers
	let winding = 1;
	while (winding <= maxWinding) {
		const odd = paths.filter(p => p.winding === winding);
		const evn = paths.filter(p => p.winding === winding + 1);

		odd.forEach(o => {
			const arr = [o.points];
			evn.forEach(e => {
				arr.push(e.points);
			});
			const h = polylabel(arr);
			o.holes.push([ h[0], h[1] ]);
		});
		
		winding += 2;		
	}


	const pointlist = getFlattened(paths, 'points');
	const numberofpoints = pointlist.length * 0.5;
	const segmentlist = getFlattened(paths, 'segments');
	const numberofsegments = segmentlist.length * 0.5;
	const holelist = getFlattened(paths, 'holes');
	const numberofholes = holelist.length * 0.5;

	return {
		pointlist,
		numberofpoints,
		segmentlist,
		numberofsegments,
		holelist,
		numberofholes,
	};
};

const getFlattened = (paths, prop) => {
	const flat = [];
	paths.forEach(p => flat.push(p[prop]));
	return flat.flat(2);
};

module.exports = svgToPoly;