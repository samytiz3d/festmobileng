import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 text-center">
      <div>
        <p className="text-8xl font-extrabold text-gray-100">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 text-sm">This page has gone off the grid. Let's get you back.</p>
        <Link to="/" className="btn-brand">Back to Home</Link>
      </div>
    </div>
  )
}
