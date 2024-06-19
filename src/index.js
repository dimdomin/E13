console.log('lalalalala');

for (let i = 0; i < 1; i++) {
	console.log(i);
}

fetch('http://localhost:7000/test')
	.then((res) => res.json())
	.then((data) => document.write(data.key))
	.catch((err) => console.error(err));
