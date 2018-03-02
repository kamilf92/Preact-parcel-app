export const getResponse = async (type) =>  {
	let data, response = await fetch(`http://demo1160044.mockable.io/res.${type}`);

	if (!response.ok) {
		throw Error(response.statusText);
	}

	data = await response.text();
	return data;
};
