"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpDown, TrendingUp, Zap, RefreshCw } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Float, Sphere, OrbitControls, Text3D } from "@react-three/drei"
import { Suspense } from "react"
import SplineViewer from "@/components/spline-viewer"

function CryptoCoin3D({
  symbol,
  color,
  position,
}: { symbol: string; color: string; position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <Sphere args={[0.8, 32, 32]}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
        <Text3D font="/fonts/Inter_Bold.json" size={0.2} height={0.05} position={[-0.3, -0.1, 0.81]}>
          {symbol}
          <meshStandardMaterial color="#FFFFFF" />
        </Text3D>
      </group>
    </Float>
  )
}

const cryptos = [
  { symbol: "BTC", name: "Bitcoin", price: 45000, change: 2.5, color: "#8B5CF6" },
  { symbol: "ETH", name: "Ethereum", price: 3200, change: 1.8, color: "#A855F7" },
  { symbol: "SOL", name: "Solana", price: 120, change: -0.5, color: "#8B5CF6" },
  { symbol: "MATIC", name: "Polygon", price: 0.85, change: 3.2, color: "#A855F7" },
  { symbol: "AVAX", name: "Avalanche", price: 42, change: 1.2, color: "#8B5CF6" },
  { symbol: "DOT", name: "Polkadot", price: 8.5, change: -1.1, color: "#A855F7" },
]

const swapRoutes = [
  {
    from: "ETH",
    to: "USDC",
    route: "Uniswap V3 → 1inch",
    fee: "0.05%",
    time: "~15s",
    savings: "2.3%",
  },
  {
    from: "BTC",
    to: "SOL",
    route: "Jupiter → Serum",
    fee: "0.08%",
    time: "~30s",
    savings: "1.8%",
  },
  {
    from: "MATIC",
    to: "AVAX",
    route: "QuickSwap → TraderJoe",
    fee: "0.12%",
    time: "~45s",
    savings: "3.1%",
  },
]

export default function SwapFinderPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [fromCrypto, setFromCrypto] = useState("ETH")
  const [toCrypto, setToCrypto] = useState("USDC")
  const [amount, setAmount] = useState("1")
  const [isSwapping, setIsSwapping] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-75%"])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360])

  const swapCryptos = () => {
    setFromCrypto(toCrypto)
    setToCrypto(fromCrypto)
  }

  const handleSwap = () => {
    setIsSwapping(true)
    setTimeout(() => {
      setIsSwapping(false)
    }, 3000)
  }

  return (
    <div ref={containerRef} className="relative min-h-screen pt-24 bg-pure-black">
      {/* Hero Section */}
      <section className="relative py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto relative h-full">
          {/* Background 3D Model */}
          <div className="absolute inset-0 w-full h-full transform-none will-change-auto min-h-[600px]">
            <SplineViewer scene="https://prod.spline.design/ijCiht39kZHmxLyb/scene.splinecode" background="#000000" />
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 text-center pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="swap-finder-title gradient-title text-5xl md:text-7xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-bright-purple to-light-purple bg-clip-text text-transparent">
                Swap Finder
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-light max-w-3xl mx-auto mb-12"
            >
              Find the best crypto swap rates across multiple DEXs with real-time arbitrage opportunities and optimal
              routing
            </motion.p>
          </div>
        </div>
      </section>

      {/* 3D Crypto Showcase */}
      {/* Removed Canvas and 3D models */}

      {/* Swap Interface */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 purple-glow"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-pure-white mb-4">
                <span className="bg-gradient-to-r from-bright-purple to-light-purple bg-clip-text text-transparent">
                  Smart Swap Interface
                </span>
              </h2>
              <p className="text-gray-light">Get the best rates across 50+ DEXs with AI-powered routing</p>
            </div>

            <div className="space-y-6">
              {/* From Token */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-gray-light text-sm font-medium">From</label>
                  <div className="text-gray-light text-sm">Balance: 2.45 ETH</div>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={fromCrypto}
                    onChange={(e) => setFromCrypto(e.target.value)}
                    className="flex-1 bg-transparent border border-bright-purple/30 rounded-xl px-4 py-3 text-pure-white focus:outline-none focus:border-bright-purple transition-colors duration-200"
                  >
                    {cryptos.map((crypto) => (
                      <option key={crypto.symbol} value={crypto.symbol} className="bg-pure-black">
                        {crypto.symbol} - {crypto.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-32 bg-transparent border border-bright-purple/30 rounded-xl px-4 py-3 text-pure-white text-right focus:outline-none focus:border-bright-purple transition-colors duration-200"
                    placeholder="0.0"
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <motion.button
                  onClick={swapCryptos}
                  className="w-12 h-12 glass glass-hover rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-bright-purple/25 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpDown className="w-5 h-5 text-bright-purple" />
                </motion.button>
              </div>

              {/* To Token */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-gray-light text-sm font-medium">To</label>
                  <div className="text-gray-light text-sm">≈ $3,200</div>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={toCrypto}
                    onChange={(e) => setToCrypto(e.target.value)}
                    className="flex-1 bg-transparent border border-light-purple/30 rounded-xl px-4 py-3 text-pure-white focus:outline-none focus:border-light-purple transition-colors duration-200"
                  >
                    {cryptos.map((crypto) => (
                      <option key={crypto.symbol} value={crypto.symbol} className="bg-pure-black">
                        {crypto.symbol} - {crypto.name}
                      </option>
                    ))}
                  </select>
                  <div className="w-32 bg-transparent border border-light-purple/30 rounded-xl px-4 py-3 text-light-purple text-right font-medium">
                    {(Number.parseFloat(amount) * 3200).toFixed(4)}
                  </div>
                </div>
              </div>

              {/* Route Information */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-bright-purple" />
                    <span className="text-pure-white font-medium">Best Route</span>
                  </div>
                  <div className="text-green-400 text-sm font-medium">Save 2.3%</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-light">Route</span>
                    <span className="text-pure-white">Uniswap V3 → 1inch</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-light">Fee</span>
                    <span className="text-pure-white">0.05%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-light">Est. Time</span>
                    <span className="text-pure-white">~15 seconds</span>
                  </div>
                </div>
              </div>

              {/* swap button */}
              <motion.button
                onClick={handleSwap}
                disabled={isSwapping}
                className="w-full bg-gradient-to-r from-bright-purple to-light-purple text-pure-white py-4 rounded-2xl font-bold text-xl disabled:opacity-50 hover:shadow-lg hover:shadow-bright-purple/25 transition-all duration-300 purple-pulse"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSwapping ? (
                  <div className="flex items-center justify-center space-x-2">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Swapping...</span>
                  </div>
                ) : (
                  "Execute Swap"
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scrolling Routes */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-pure-white to-bright-purple bg-clip-text text-transparent">
              Optimal Swap Routes
            </span>
          </motion.h2>

          <motion.div style={{ x }} className="flex space-x-8">
            {swapRoutes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="flex-shrink-0 w-80"
              >
                <div className="glass glass-hover rounded-3xl p-6 purple-glow-hover">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-bright-purple to-light-purple rounded-full flex items-center justify-center">
                        <span className="text-pure-white font-bold text-sm">{route.from}</span>
                      </div>
                      <ArrowUpDown className="w-5 h-5 text-gray-light" />
                      <div className="w-10 h-10 bg-gradient-to-r from-light-purple to-bright-purple rounded-full flex items-center justify-center">
                        <span className="text-pure-white font-bold text-sm">{route.to}</span>
                      </div>
                    </div>
                    <div className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      Save {route.savings}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-light">Route</span>
                      <span className="text-pure-white font-medium">{route.route}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-light">Fee</span>
                      <span className="text-bright-purple">{route.fee}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-light">Time</span>
                      <span className="text-light-purple">{route.time}</span>
                    </div>
                  </div>

                  <motion.button
                    className="w-full mt-6 bg-gradient-to-r from-bright-purple to-light-purple text-pure-white py-3 rounded-full font-medium hover:shadow-lg hover:shadow-bright-purple/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Use This Route
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Data */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-light-purple to-bright-purple bg-clip-text text-transparent">
              Live Market Data
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptos.map((crypto, index) => (
              <motion.div
                key={crypto.symbol}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass glass-hover rounded-2xl p-6 purple-glow-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: crypto.color }}
                    >
                      <span className="text-pure-white font-bold text-sm">{crypto.symbol[0]}</span>
                    </div>
                    <div>
                      <div className="text-pure-white font-semibold">{crypto.symbol}</div>
                      <div className="text-gray-light text-sm">{crypto.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-pure-white font-semibold">${crypto.price.toLocaleString()}</div>
                    <div className={`text-sm ${crypto.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {crypto.change >= 0 ? "+" : ""}
                      {crypto.change}%
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-bright-purple" />
                  <span className="text-gray-light text-sm">24h Volume: $2.1B</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
