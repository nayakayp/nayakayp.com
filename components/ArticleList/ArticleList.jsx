import Link from "next/link";

const ArticleList = ({ id, date, title, excerpt }) => {
	return (
		<Link href="/artike/1">
			<a className="group flex items-center justify-between rounded-lg p-2 transition-all duration-200 hover:bg-turq-300">
				<h3 className="text-base font-bold text-dark-400 duration-300 group-hover:text-white">
					{title}
				</h3>
				<p className="text-xs group-hover:text-white">{date}</p>
			</a>
		</Link>
	);
};

export default ArticleList;