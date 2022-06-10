const Button = ({ children, textColor, bgColor, border, submit }) => {
	return (
		<>
			<button
				className="rounded-md bg-dark-400 py-2 px-8 text-[18px] uppercase text-light-100"
				type={submit ? "submit" : "button"}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
