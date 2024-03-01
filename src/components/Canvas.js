import React, { useRef, useEffect } from 'react';

const Canvas = (props) => {
	const canvasRef = useRef(null);

	const draw = (ctx, frameCount) => {
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		ctx.fillStyle = '#000000';
		ctx.beginPath();
		ctx.arc(550, 480, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
		ctx.fill();
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		let frameCount = 0;
		let animationFrameId;

		//Our draw came here
		const render = () => {
			frameCount++;
			draw(context, frameCount);
			animationFrameId = window.requestAnimationFrame(render);
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw]);

	return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
