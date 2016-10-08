'use strict';

const helloWorld = () => {
	return 'hello world! ';
};

async function init() {
	const hello = await helloWorld();
	console.log(hello);
}

init();
