function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">Portfolio Visualizer</span>
              </div>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-6">
                <a href="#" className="border-b-2 border-blue-600 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Tools
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Resources
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                Compare your portfolio
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl font-bold mb-4">Tools for Better Investors</h1>
              <p className="text-xl mb-8">Your Investments Explained.</p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-md">
                Join the Outperformance
              </button>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-15 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-4">Market Monitor - Top 10 Lazy Portfolios</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="text-left py-2 px-4">Portfolio</th>
                        <th className="text-right py-2 px-4">YTD</th>
                        <th className="text-right py-2 px-4">1Y</th>
                        <th className="text-right py-2 px-4">3Y</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-200">
                        <td className="py-3 px-4">Marc Faber Portfolio</td>
                        <td className="text-right py-3 px-4 text-green-300">6.58%</td>
                        <td className="text-right py-3 px-4 text-green-300">29.19%</td>
                        <td className="text-right py-3 px-4 text-green-300">18.92%</td>
                      </tr>
                      <tr className="border-t border-white border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-200">
                        <td className="py-3 px-4">Harry Browne Permanent Portfolio</td>
                        <td className="text-right py-3 px-4 text-green-300">5.30%</td>
                        <td className="text-right py-3 px-4 text-green-300">25.68%</td>
                        <td className="text-right py-3 px-4 text-green-300">17.09%</td>
                      </tr>
                      <tr className="border-t border-white border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-200">
                        <td className="py-3 px-4">Bill Bernstein No Brainer</td>
                        <td className="text-right py-3 px-4 text-green-300">1.31%</td>
                        <td className="text-right py-3 px-4 text-green-300">19.73%</td>
                        <td className="text-right py-3 px-4 text-green-300">15.11%</td>
                      </tr>
                      <tr className="border-t border-white border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-200">
                        <td className="py-3 px-4">Rick Ferri Core Four</td>
                        <td className="text-right py-3 px-4 text-green-300">0.89%</td>
                        <td className="text-right py-3 px-4 text-green-300">19.25%</td>
                        <td className="text-right py-3 px-4 text-green-300">16.69%</td>
                      </tr>
                      <tr className="border-t border-white border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-200">
                        <td className="py-3 px-4">Mebane Faber Ivy Portfolio</td>
                        <td className="text-right py-3 px-4 text-green-300">7.61%</td>
                        <td className="text-right py-3 px-4 text-green-300">17.13%</td>
                        <td className="text-right py-3 px-4 text-green-300">12.73%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 统计数据 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Design. Analyze. Compare.</h2>
            <p className="mt-4 text-xl text-gray-500">Investments worst kept secret</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">5.1 Million</p>
              <p className="text-gray-600 mt-2">Annual Visits</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">100+</p>
              <p className="text-gray-600 mt-2">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">30</p>
              <p className="text-gray-600 mt-2">Global Markets</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">187,650</p>
              <p className="text-gray-600 mt-2">Securities</p>
            </div>
          </div>
        </div>
      </div>

      {/* 功能模块 */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Understand your portfolio better</h2>
          </div>
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-6 fade-in" style={{ animationDelay: '0.1s' }}>Most Popular Analysis Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 card-hover fade-in" style={{ animationDelay: '0.2s' }}>
                <h4 className="text-lg font-semibold text-blue-600 mb-4">Portfolio Performance</h4>
                <p className="text-gray-600 mb-6">Portfolio backtesting is a process of simulating an investment strategy using historical data. It can help you and test how well a portfolio would have performed in the past, and to analyse risk and return.</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">Learn More</button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 card-hover fade-in" style={{ animationDelay: '0.3s' }}>
                <h4 className="text-lg font-semibold text-blue-600 mb-4">Portfolio Optimization</h4>
                <p className="text-gray-600 mb-6">Create and compare different portfolio models and align investments with financial goals.</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">Learn More</button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 card-hover fade-in" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-lg font-semibold text-blue-600 mb-4">Monte-Carlo Simulation</h4>
                <p className="text-gray-600 mb-6">Model the probability of different investment outcomes and better understand the impact of risk.</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">Learn More</button>
              </div>
            </div>
          </div>
          <div className="fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Tactical Models</h3>
            <div className="bg-white rounded-lg shadow-md p-8 card-hover">
              <p className="text-gray-600 mb-6">Tactical allocation models based on moving averages, momentum, market valuation, volatility targeting, or risk management strategies for improved risk-adjusted returns.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* 智能投资分析 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Be an Intelligent Investor</h2>
              <p className="text-gray-600 mb-8">Real experts can always explain the complex in simple terms. Intelligence is only of value to those who understand and can act upon it.</p>
              <div className="flex space-x-4 mb-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                  Text
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md">
                  Video
                </button>
              </div>
              <p className="text-gray-600">Portfolio Visualizer is a powerful portfolio analysis and reporting tool set, built to enable anyone to benefit from the sophisticated analytical techniques usually reserved for institutions. Turning analysis into actionable insight, explained by A.I.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-10 card-hover fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Engage with real-time insight</h3>
              <div className="text-center mb-8">
                <div className="inline-block bg-white rounded-full p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-2xl md:text-3xl font-bold text-blue-600">Portfolio Analysis + AI = Clarity</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-6">Portfolio Visualizer</h3>
              <p className="text-gray-400">Powerful portfolio analysis and reporting tools for investors.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Tools</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Portfolio Performance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Portfolio Optimization</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Monte-Carlo Simulation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tactical Models</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Portfolio Visualizer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
  