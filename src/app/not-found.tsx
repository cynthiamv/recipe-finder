import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-body text-text">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-rose-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{`Sorry, the page you're looking for doesn't exist.`}</p>
        <Link href="/" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}
