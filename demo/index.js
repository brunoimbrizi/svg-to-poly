const svgToPoly = require('../index.js');
const loadSvg = require('load-svg');
const normalize = require('normalize-path-scale');
const unflat = require('array-unflat');
const getBounds = require('bound-points');

// init canvas
const canvas = document.querySelector('canvas');
canvas.width = 640;
canvas.height = 640;

const ctx = canvas.getContext('2d');

// init select
const select = document.querySelector('select');
select.addEventListener('change', (e) => {
	load(e.target.value);
});

const load = (path) => {
	loadSvg(path, (err, svg) => {
		if (err) throw err;

		const poly = svgToPoly(svg);
		console.log(poly);
		draw(poly);
	});
};

const scale = (points, sx, sy) => {
	for (let i = 0; i < points.length; i++) {
		points[i][0] *= sx;
		points[i][1] *= sy;
	}
};

const draw = (data) => {
	const points = unflat(data.pointlist);
	const segments = unflat(data.segmentlist);
	const holes = unflat(data.holelist);

	const bounds = getBounds(points);

	normalize(points, bounds);
	scale(points, canvas.width * 0.4, canvas.height * 0.4);
	
	normalize(holes, bounds);
	scale(holes, canvas.width * 0.4, canvas.height * 0.4);

	ctx.fillStyle = '#eee';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.save();
	ctx.translate(canvas.width * 0.5, canvas.height * 0.5);
	ctx.fillStyle = '#000';
	ctx.lineWidth = 2;
	
	// draw points
  let x, y;
  for (let i = 0; i < points.length; i++) {
    x = points[i][0];
    y = points[i][1];
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  // draw segments
  if (segments) {
	  let a, b;
	  for (let i = 0; i < segments.length; i++) {
	  	a = segments[i][0];
	    b = segments[i][1];

		  ctx.beginPath();
		  ctx.moveTo(points[a][0], points[a][1]);
	    ctx.lineTo(points[b][0], points[b][1]);
	  	ctx.stroke();
	  }
	}

	// draw holes
	if (holes) {
		ctx.fillStyle = 'red';
		for (let i = 0; i < holes.length; i++) {
			x = holes[i][0];
	    y = holes[i][1];

	    ctx.save();
	    ctx.translate(x, y);
	    ctx.rotate(Math.PI * -0.25);
	    ctx.fillRect(-1, -6, 2, 12);
	    ctx.rotate(Math.PI * 0.5);
	    ctx.fillRect(-1, -6, 2, 12);
	    ctx.restore();
	  }
	}

  ctx.restore();
};

load(select.value);
