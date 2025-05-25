import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Additional middleware logic can be added here
    console.log('Middleware executed for:', req.nextUrl.pathname)
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to API routes
        if (req.nextUrl.pathname.startsWith('/api/')) {
          return true
        }

        // Allow access to public routes
        const publicRoutes = ['/', '/login', '/register', '/about', '/features', '/pricing', '/contact']
        const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname)
        
        if (isPublicRoute) {
          return true
        }

        // Require authentication for protected routes
        return !!token
      },
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (NextAuth routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}