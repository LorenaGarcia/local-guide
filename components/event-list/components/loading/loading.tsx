import { SkeletonCard } from "../skeleton-card/skeleton-card"

function Loading() {
    return (
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-white min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 animate-pulse">
                <div className="max-w-3xl w-full">
                    <div className="h-14 bg-slate-200 rounded-2xl w-3/4 mb-6"></div>
                    <div className="h-6 bg-slate-200 rounded-xl w-1/2"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </div>
    );
}

export { Loading }