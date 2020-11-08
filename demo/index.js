const svgToPoly = require('../index.js');
const loadSvg = require('load-svg');

// store
let svg;

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

// init range
const threshold = document.querySelector('#threshold');
threshold.addEventListener('input', (e) => {
	update();
});

const load = (path) => {
	loadSvg(path, (err, _svg) => {
		if (err) throw err;

		svg = _svg;
		update(true);
	});
};

const scale = (points, sx, sy) => {
	if (!points) return;

	for (let i = 0; i < points.length; i++) {
		points[i][0] *= sx;
		points[i][1] *= sy;
	}
};

const update = (log = false) => {
	const data = svgToPoly(svg, { normalize: true, threshold: parseFloat(threshold.value) });
	draw(data);
	
	if (log) console.log(data);
};

const draw = (data) => {
	const points = data.pointlist;
	const segments = data.segmentlist;
	const holes = data.holelist;

	scale(points, canvas.width * 0.4, canvas.height * 0.4);
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
