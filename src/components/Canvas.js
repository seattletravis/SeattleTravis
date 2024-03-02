import React, { useRef, useEffect, useState } from 'react';
import { useKeyDown } from '../hooks/useKeyDown';

const Canvas = (props, keys) => {
	const [moveXY, setMoveXY] = useState([]);
	useKeyDown(() => {
		console.log('ArrowUp');
		detectKeyDown('ArrowUp');
	}, ['ArrowUp']);

	// let [headX, setHeadX] = useState(0.25 * window.innerWidth);
	// let [headY, setHeadY] = useState(0.25 * window.innerHeight);

	// useEffect(() => {
	// 	document.addEventListener('keydown', detectKeyDown, true);
	// }, [moveXY[0]]);

	const detectKeyDown = (key) => {
		if (
			(key === 'ArrowUp' ||
				key === 'ArrowDown' ||
				key === 'ArrowLeft' ||
				key === 'ArrowRight') &&
			moveXY.indexOf(key) === -1
		) {
			setMoveXY([...moveXY, key]);
		}

		console.log(moveXY);
	};

	const canvasRef = useRef(null);

	const draw = (ctx, frameCount) => {
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#000000';
		ctx.beginPath();
		let headX = 0.25 * ctx.canvas.width;
		let headY = 0.25 * ctx.canvas.height;
		ctx.arc(
			headY,
			headX,
			20 * Math.sin(frameCount * 0.05) ** 2,
			0,
			2 * Math.PI
		);
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
