export const getResponse = async (type) =>  {
	const response = await fetch(`http://demo1160044.mockable.io/res.${type}`);

	if (!response.ok) {
		throw Error(response.statusText);
	}

	const data = await response.text();
	return data;
};
