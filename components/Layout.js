
export default function Layout({ children, home }) {
    return (
        <div className="min-h-full p-12">
            <main>{children}</main>
        </div>
    )
}