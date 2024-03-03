import React, { useRef, useEffect, useState } from 'react';
import { useKeyDown } from '../hooks/useKeyDown';

const Canvas = (props, keys) => {
	const canvasRef = useRef(null);

	const [moveXY, setMoveXY] = useState([]);
	// let [headX, setHeadX] = useState(0.25 * window.innerWidth);
	// let [headY, setHeadY] = useState(0.25 * window.innerHeight);
	// let [headVX, setHeadVX] = useState(0);
	// let [headVY, setHeadVY] = useState(0);

	useKeyDown(() => {
		detectKeyDown('ArrowUp');
	}, ['ArrowUp']);

	useKeyDown(() => {
		detectKeyDown('ArrowDown');
	}, ['ArrowDown']);

	useKeyDown(() => {
		detectKeyDown('ArrowLeft');
	}, ['ArrowLeft']);

	useKeyDown(() => {
		detectKeyDown('ArrowRight');
	}, ['ArrowRight']);

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

	// const update = () => {
	// 	if (moveXY.includes('ArrowUp')) {
	// 		setHeadVY(-0.01);
	// 	} else if (moveXY.includes('ArrowDown')) {
	// 		setHeadVY(0.01);
	// 	} else if (moveXY.includes('ArrowLeft')) {
	// 		setHeadVX(-0.01);
	// 	} else if (moveXY.includes('ArrowRight') && frameCount % 100 === 0) {
	// 		setHeadVX(0.01);
	// 	}
	// };

	const draw = (ctx, frameCount, headX, headY) => {
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#000000';
		// setHeadX(headX + headVX);
		// setHeadY(headY + headVY);
		console.log(headX);
		ctx.beginPath();
		ctx.arc(
			headX,
			headY,
			10 * Math.sin(frameCount * 0.05) ** 2 + 20,
			0,
			2 * Math.PI
		);
		ctx.fill();
	};

	useEffect(() => {
		let headX = 0.25 * window.innerWidth;
		let headY = 0.25 * window.innerHeight;
		let headVX = 0;
		let headVY = 0;

		if (moveXY.includes('ArrowUp')) headVY = -1;
		else if (moveXY.includes('ArrowDown')) headVY = 1;
		else if (moveXY.includes('ArrorLeft')) headVX = -1;
		else if (moveXY.includes('ArrowRight')) headVX = 1;

		// setHeadX(headX + headVX);
		// setHeadY(headY + headVY);

		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		let frameCount = 0;
		let animationFrameId;

		//Our draw game here
		const render = () => {
			frameCount++;
			headX += headVX;
			headY += headVY;
			draw(context, frameCount, headX, headY);
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
