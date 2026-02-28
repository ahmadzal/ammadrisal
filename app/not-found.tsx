export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-gray-300 mt-4 mb-8">
          Page Not Found
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-200"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
