import Link from "next/link";

const ArticleList = ({ id, date, title, excerpt }) => {
	return (
		<Link href={`/artikel/${id}`}>
			<a className="group flex items-center justify-between rounded-lg py-2 transition-all duration-200 md:p-2 md:hover:bg-turq-300">
				<h3 className="text-base font-bold text-dark-400 duration-300 md:text-base md:group-hover:text-white">
					{title}
				</h3>
				<p className="text-xs md:group-hover:text-white">{date}</p>
			</a>
		</Link>
	);
};

export default ArticleList;
