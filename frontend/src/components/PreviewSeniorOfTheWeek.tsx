import { getArticleByZIndex } from '@/actions/getArticleByZIndex';
import Image from 'next/image';

export default async function PreviewSeniorOfTheWeek() {
	const article = await getArticleByZIndex(0);

	return (
		<div className="w-full p-3 border-neutral-300 border-b">
			<a href={`/articles/${article.slug}`}>
				<div className="flex justify-between">
					<div className="w-2/3 pr-3">
						<h3 className="font-bold bg-gradient-to-r from-[#B40A0A] to-[#f71e1e] inline-block text-transparent bg-clip-text">
							{article.tag}
						</h3>
						<h1 className="font-serif font-medium text-xl py-2">{article.title}</h1>
					</div>
					<div className="w-1/3">
						<Image
							src={'http://127.0.0.1:1337' + article.thumbnail.url}
							width="0"
							height="0"
							sizes="25vw"
							className="w-full h-auto"
							alt={'Logo of The Exonian'}
						/>
					</div>
				</div>
				<div className="py-3">
					<p className="text-xs text-[#4E4E4E] text-ellipsis line-clamp-3">
						{article.content}
					</p>
				</div>
				<div className="">
					<p className="text-xs text-[#6C6C6C]">
						By:{' '}
						<span>
							{article.authors.map((author, i) => {
								return author.fullname;
							})}
						</span>
					</p>
					<p className="text-xs text-[#6C6C6C]">
						{new Date(article.publishedAt).toLocaleDateString()}
					</p>
				</div>
			</a>
		</div>
	);
}
