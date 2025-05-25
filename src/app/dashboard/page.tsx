'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Bot, 
  MessageCircle, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Sparkles,
  TrendingUp,
  Clock,
  Zap
} from 'lucide-react'
import { toast } from 'sonner'

const stats = [
  {
    icon: MessageCircle,
    label: 'Conversaciones',
    value: '1,234',
    change: '+12%',
    trend: 'up'
  },
  {
    icon: Users,
    label: 'Usuarios Activos',
    value: '856',
    change: '+8%',
    trend: 'up'
  },
  {
    icon: Zap,
    label: 'Respuestas/día',
    value: '2,891',
    change: '+24%',
    trend: 'up'
  },
  {
    icon: Clock,
    label: 'Tiempo Promedio',
    value: '0.8s',
    change: '-15%',
    trend: 'down'
  }
]

const recentActivity = [
  {
    id: 1,
    user: 'María García',
    action: 'Inició una conversación sobre productos',
    time: 'hace 2 minutos',
    avatar: 'MG'
  },
  {
    id: 2,
    user: 'Carlos López',
    action: 'Completó una encuesta de satisfacción',
    time: 'hace 5 minutos',
    avatar: 'CL'
  },
  {
    id: 3,
    user: 'Ana Rodríguez',
    action: 'Solicitó soporte técnico',
    time: 'hace 8 minutos',
    avatar: 'AR'
  },
  {
    id: 4,
    user: 'Luis Martín',
    action: 'Consultó sobre precios',
    time: 'hace 12 minutos',
    avatar: 'LM'
  }
]

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          <span className="text-muted-foreground">Cargando dashboard...</span>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false })
      toast.success('Sesión cerrada exitosamente')
      router.push('/')
    } catch (error) {
      toast.error('Error al cerrar sesión')
    }
  }

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container-custom py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Bienvenido de vuelta, <span className="gradient-text">{session.user.name}</span>
              </h1>
              <p className="text-muted-foreground">
                Aquí tienes un resumen de la actividad de tu chatbot
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="hidden md:flex">
                <Sparkles className="w-3 h-3 mr-1" />
                Premium
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="rounded-full"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <Card key={stat.label} className="glass-card p-6 border-0 shadow-modern hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge 
                  variant={stat.trend === 'up' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card p-6 border-0 shadow-modern">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Actividad Reciente</h3>
                <Button variant="outline" size="sm" className="rounded-full">
                  Ver Todo
                </Button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center text-sm font-medium">
                      {activity.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Quick Stats */}
            <Card className="glass-card p-6 border-0 shadow-modern">
              <h3 className="text-lg font-bold mb-4">Resumen Rápido</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Satisfacción</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-accent rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                    </div>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Resolución</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-accent rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                    </div>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Velocidad</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-accent rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-primary to-primary/80 rounded-full" />
                    </div>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card p-6 border-0 shadow-modern">
              <h3 className="text-lg font-bold mb-4">Acciones Rápidas</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start rounded-lg">
                  <Bot className="w-4 h-4 mr-3" />
                  Entrenar Chatbot
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-lg">
                  <BarChart3 className="w-4 h-4 mr-3" />
                  Ver Análisis
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-lg">
                  <Settings className="w-4 h-4 mr-3" />
                  Configuración
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  )
}