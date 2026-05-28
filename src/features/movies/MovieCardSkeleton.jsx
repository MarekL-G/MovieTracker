export function MovieCardSkeleton(){
    return(
        <div className="animate-pulse">
            <div className="aspect-[2/3] bg-zinc-700 rounded">
            </div>

            <div className="h-3 bg-zinc-700 rounded mt-2 w-3/4">
            </div>

            <div className="h3 bg-zinc-700 rounded mt-1 w-1/4">
            </div>
        </div>
    )
}