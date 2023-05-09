
export default function loading() {
    return (
        <div className="fixed top-0 left-0 z-[9999] w-screen h-screen bg-[var(--primary-color)] grid place-items-center">
            <div className="w-11 h-11 rounded-full border-t border-t-white animate-spin"></div>
        </div>
    )
}