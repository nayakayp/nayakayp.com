import Link from "next/link";

import { Divider } from "../../components";

const ArticleHeading = ({ titleLeft, titleRight, isLink }) => {
	return (
		<div className="flex items-center justify-between">
			<h2 className="text-xl font-bold text-turq-400 md:text-4xl">
				{titleLeft}
			</h2>
			<Link href="/artikel">
				<a
					className={`${
						!isLink && "cursor-text"
					} text-sm font-semibold text-dark-300 md:text-base`}
				>
					{titleRight}
					<Divider className="mt-1 h-[2px] bg-turq-400 md:mt-2 md:h-[3px]" />
				</a>
			</Link>
		</div>
	);
};

export default ArticleHeading;
