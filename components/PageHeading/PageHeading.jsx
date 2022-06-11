import React from "react";

import { Divider } from "../../components";

const PageHeading = ({ title, subtitle }) => {
	return (
		<div className="mb-10 flex flex-col items-center text-dark-400">
			<h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">
				{title} <br />
				<span className="text-xl font-medium md:text-2xl">{subtitle}</span>
			</h1>
			<Divider className="h-1 max-w-[170px] bg-dark-400" />
		</div>
	);
};

export default PageHeading;
