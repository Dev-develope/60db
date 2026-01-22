import { Calendar, User } from "lucide-react";

interface BlogPostCardProps {
    title: string;
    excerpt: string;
    date?: string;
    author?: string;
    category?: string;
    logo?: string;
    featured?: boolean;
}

const BlogPostCard = ({
    title,
    excerpt,
    date,
    author,
    category,
    logo,
    featured = false
}: BlogPostCardProps) => {
    return (
        <article className={`group bg-card border border-border rounded-xl overflow-hidden hover:shadow-card transition-all cursor-pointer ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
            {/* Logo/Brand Section */}
            <div className={`bg-secondary/30 flex items-center justify-center ${featured ? 'h-48' : 'h-32'}`}>
                {logo ? (
                    <div className="text-center">
                        <div className={`${featured ? 'text-6xl' : 'text-5xl'} font-bold`}>
                            {logo}
                        </div>
                    </div>
                ) : (
                    <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-3xl">📝</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Category Tag */}
                {category && (
                    <div className="mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded-full">
                            {category}
                        </span>
                    </div>
                )}

                <h2 className={`font-semibold text-foreground mb-3 group-hover:text-primary transition-colors ${featured ? 'text-2xl line-clamp-2' : 'text-lg line-clamp-2'}`}>
                    {title}
                </h2>

                <p className={`text-muted mb-4 ${featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}`}>
                    {excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-muted">
                    {author && (
                        <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{author}</span>
                        </div>
                    )}
                    {date && (
                        <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{date}</span>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

export default BlogPostCard;
