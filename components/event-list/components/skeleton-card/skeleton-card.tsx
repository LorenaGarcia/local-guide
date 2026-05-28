function SkeletonCard() {
    return (
        <div className="relative h-full min-h-[500px] overflow-hidden rounded-[2.5rem] bg-slate-100 animate-pulse flex flex-col p-8 justify-end border border-slate-200/50">
            <div className="w-24 h-6 bg-slate-200 rounded-lg mb-4"></div>
            <div className="w-3/4 h-8 bg-slate-200 rounded-xl mb-3"></div>
            <div className="w-full h-4 bg-slate-200 rounded-lg mb-2"></div>
            <div className="w-5/6 h-4 bg-slate-200 rounded-lg mb-6"></div>
            <div className="flex gap-4 mb-8">
                <div className="w-20 h-5 bg-slate-200 rounded-lg"></div>
                <div className="w-28 h-5 bg-slate-200 rounded-lg"></div>
            </div>
            <div className="w-full h-12 bg-slate-200 rounded-2xl"></div>
        </div>
    )
}


export { SkeletonCard }