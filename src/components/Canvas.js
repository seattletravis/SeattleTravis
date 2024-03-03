import React, { useRef, useEffect, useState } from 'react';
import { useKeyDown } from '../hooks/useKeyDown';

const Canvas = (props, keys) => {
	const [moveXY, setMoveXY] = useState([]);
	const [headX, setHeadX] = useState(0.25 * window.innerWidth);
	const [headY, setHeadY] = useState(0.25 * window.innerHeight);
	let [headVX, setHeadVX] = useState(0);
	let [headVY, setHeadVY] = useState(0);

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

	const canvasRef = useRef(null);

	const update = () => {
		if (moveXY.includes('ArrowUp')) {
			setHeadVY(-1);
		} else if (moveXY.includes('ArrowDown')) {
			setHeadVY(1);
		} else if (moveXY.includes('ArrowLeft')) {
			setHeadVX(-1);
		} else if (moveXY.includes('ArrowRight')) {
			setHeadVX(1);
		}
	};

	const draw = (ctx, frameCount) => {
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#000000';
		setHeadX(headX + headVX);
		setHeadY(headY + headVY);
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
