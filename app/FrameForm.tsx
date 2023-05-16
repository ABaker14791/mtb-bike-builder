"useClient";

const FrameForm = () => {
	return (
		<div>
			<h1>Select Frame</h1>
			<form>
				<div className="flex gap-4 my-4">
					<label htmlFor="description">Description</label>
					<input name="description" type="text" />
				</div>
				<div className="flex gap-4 my-4">
					<label htmlFor="description">Price</label>
					<input name="description" type="text" />
				</div>
				<div className="flex gap-4 my-4">
					<label htmlFor="description">Links</label>
					<input name="description" type="text" />
				</div>
				<div className="flex justify-between">
					<button className="py-2 px-4 bg-white text-black">Save</button>
					<button className="py-2 px-4 bg-white text-black">Cancel</button>
				</div>
			</form>
		</div>
	);
};

export default FrameForm;
