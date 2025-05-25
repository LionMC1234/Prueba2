import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    // Test Mongoose connection
    await dbConnect()
    console.log('✅ Mongoose connection successful')

    // Test MongoDB native driver connection
    const client = await clientPromise
    const db = client.db()
    await db.admin().ping()
    console.log('✅ MongoDB native driver connection successful')

    return NextResponse.json({
      message: 'Database connections successful',
      mongoose: 'Connected',
      mongodb: 'Connected',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('❌ Database connection error:', error)
    return NextResponse.json(
      {
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}