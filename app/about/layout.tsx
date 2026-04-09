export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-blue-400 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">About Section</h2>
        {children}
      </div>
    </div>
  )
}